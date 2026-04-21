// convert html "<div class="123">" -> "<div style="value-of-class-123">"
// csp friendly
// uses way to much space -> copies also unused css info-
// 
let rootEl  = $(`.offline-content`)[0];
// Create style tag with nonce
const st    = document.createElement('style');
const nodes = [rootEl, ...rootEl.querySelectorAll('*')];
let css     = '';
for (let i = 0; i < nodes.length; i++) {
	const el = nodes[i];
	const cls = `off-${i}`;
	el.classList.add(cls);
	const cs = getComputedStyle(el);
	let rule = '';
	for (let k = 0; k < cs.length; k++) {
		const prop = cs[k];
		const val = cs.getPropertyValue(prop);
		if (!val) { continue; }
		rule += `${prop}:${val};`;
	}
	css += `.${cls}{${rule}}\n`;
}
st.textContent = css;

const OfflineContent = st.outerHTML + rootEl.outerHTML;