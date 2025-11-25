/**
 * Calculate laser power needed to burn a cylindrical hole in tissue
 * All units SI-based unless otherwise noted
 */
function calcLaserPower(inputs) {

    // ########## INPUT ##########
    const r = inputs.radius;        // cm, target hole radius
    const h = inputs.depth;         // cm, target hole depth
    const rho = inputs.density;     // g/cm³, tissue density (~1.0 for water)

    const fw = inputs.waterFraction; // fraction of mass that is water (0..1)
    const cw = inputs.cWater;        // J/gK, specific heat water (4.18)
    const cs = inputs.cSolid;        // J/gK, specific heat solids (~1.7)

    const dT = inputs.deltaT;        // K, temperature rise to reach boiling
    const Lv = inputs.latentHeat;    // J/g, water vaporization enthalpy (2256)

    const phi = inputs.vaporizedFraction; // fraction of water mass actually vaporized (0..1)
    const deltaT_pulse = inputs.pulseDuration; // seconds, time to deliver energy

    // Efficiency factors (0..1), multiply to get total coupling factor
    const eta_laser = inputs.etaLaser;           // electric → optical
    const eta_abs = inputs.etaAbsorption;       // surface absorption
    const eta_depth = inputs.etaDepth;          // transmission through tissue
    const eta_plasma = inputs.etaPlasma;        // loss due to vapor/plasma shielding
    const eta_geo = inputs.etaGeometry;         // beam shape, focus, etc.

    // ########## STEP 1: Volume & Mass ##########
    const volume = Math.PI * r * r * h;   // cm³
    const mass = rho * volume;            // g

    // ########## STEP 2: Energy to heat material ##########
    const Q_heat = (fw * mass * cw * dT) + ((1 - fw) * mass * cs * dT);

    // ########## STEP 3: Energy to vaporize water ##########
    const Q_vap = phi * fw * mass * Lv;

    // Total energy needed for material itself
    const Q_mat = Q_heat + Q_vap;

    // ########## STEP 4: Add losses (optical coupling) ##########
    const eta_total_coupling = eta_abs * eta_depth * eta_plasma * eta_geo;

    // Optical energy needed at the target
    const E_opt = Q_mat / eta_total_coupling;

    // Electrical energy needed to generate that optical energy
    const E_el = E_opt / eta_laser;

    // ########## STEP 5: Convert to power (W = J/s) ##########
    const P_opt = E_opt / deltaT_pulse;  // optical power needed
    const P_el = E_el / deltaT_pulse;    // electrical input power needed

    // ########## STEP 6: Optional intensity/fluence ##########
    const r_spot = inputs.spotRadius; // cm, actual laser spot radius
    const area_spot = Math.PI * r_spot * r_spot; // cm²

    // convert area to m² for standard W/m²
    const area_spot_m2 = area_spot / 10000.0;

    const fluence = E_opt / area_spot;        // J/cm²
    const intensity = P_opt / area_spot_m2;   // W/m²

    // ########## RETURN ##########
    return {
        volume, mass,
        Q_heat, Q_vap, Q_mat,
        E_opt, E_el,
        P_opt, P_el,
        fluence, intensity
    };
}

const result = calcLaserPower({
    radius: 0.25,         // 0.25 cm = 5 mm diameter
    depth: 20,            // 20 cm
    density: 1.0,         // g/cm³
    waterFraction: 0.7,   // 70% water
    cWater: 4.18,
    cSolid: 1.7,
    deltaT: 80,           // 20 → 100 °C
    latentHeat: 2256,
    vaporizedFraction: 1.0,  // full vaporization

    pulseDuration: 0.1,      // 0.1 s

    etaLaser: 0.2,           // 20% electric → optical
    etaAbsorption: 0.9,
    etaDepth: 0.9,
    etaPlasma: 0.5,
    etaGeometry: 0.9,

    spotRadius: 0.25          // same as hole radius
});

console.log(result.P_opt.toFixed(0) + " W optical power");
console.log(result.P_el.toFixed(0) + " W electrical power");