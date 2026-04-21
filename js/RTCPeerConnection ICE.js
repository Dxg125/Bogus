/* debug js sip snippet 1 */


function instrumentPC(pc, tag) {
	const t0 = performance.now()

	function ts() {
		return `${(performance.now() - t0).toFixed(1)}ms`
	}

	// Log state transitions
	pc.onicegatheringstatechange = () => console.log(`[${tag}] ${ts()} iceGatheringState=${pc.iceGatheringState}`)
	pc.oniceconnectionstatechange = () => console.log(`[${tag}] ${ts()} iceConnectionState=${pc.iceConnectionState}`)
	pc.onconnectionstatechange = () => console.log(`[${tag}] ${ts()} connectionState=${pc.connectionState}`)
	pc.onsignalingstatechange = () => console.log(`[${tag}] ${ts()} signalingState=${pc.signalingState}`)

	// Log candidate events
	pc.onicecandidate = (e) => {
		if (e.candidate) {
			console.log(`[${tag}] ${ts()} localCandidate`, e.candidate.candidate)
		} else {
			console.log(`[${tag}] ${ts()} localCandidate=END`)
		}
	}

	// Wrap critical methods
	const _setLocal = pc.setLocalDescription.bind(pc)
	pc.setLocalDescription = async (desc) => {
		try {
			console.log(`[${tag}] ${ts()} setLocalDescription begin`, desc?.type)
			const r = await _setLocal(desc)
			console.log(`[${tag}] ${ts()} setLocalDescription ok`, pc.localDescription?.type)
			return r
		} catch (err) {
			console.log(`[${tag}] ${ts()} setLocalDescription FAIL`, err)
			throw err
		}
	}

	const _setRemote = pc.setRemoteDescription.bind(pc)
	pc.setRemoteDescription = async (desc) => {
		try {
			console.log(`[${tag}] ${ts()} setRemoteDescription begin`, desc?.type)
			const r = await _setRemote(desc)
			console.log(`[${tag}] ${ts()} setRemoteDescription ok`, pc.remoteDescription?.type)
			return r
		} catch (err) {
			console.log(`[${tag}] ${ts()} setRemoteDescription FAIL`, err)
			throw err
		}
	}

	const _addIce = pc.addIceCandidate.bind(pc)
	pc.addIceCandidate = async (cand) => {
		try {
			const s = cand?.candidate || cand
			console.log(`[${tag}] ${ts()} addIceCandidate begin`, (s && String(s).slice(0, 80)) || cand)
			const r = await _addIce(cand)
			console.log(`[${tag}] ${ts()} addIceCandidate ok`)
			return r
		} catch (err) {
			console.log(`[${tag}] ${ts()} addIceCandidate FAIL`, err, cand)
			throw err
		}
	}

	return pc
}













/* debug js sip snippet 1 */



function makeIceQueue(pc, tag) {
	const pending = []

	async function add(c) {
		if (!c) { return }
		if (!pc.remoteDescription) {
			pending.push(c)
			console.log(`[${tag}] queued remoteCandidate (${pending.length})`)
			return
		}
		await pc.addIceCandidate(c)
	}

	async function onRemoteDescriptionSet() {
		while (pending.length) {
			const c = pending.shift()
			await pc.addIceCandidate(c)
		}
	}

	return { add, onRemoteDescriptionSet }
}

function attachSessionDebug(session, id) {
	const tag = `jssip:${id}`
	const pc = instrumentPC(session.connection, tag)
	const iceQ = makeIceQueue(pc, tag)

	// Example: when your signaling delivers remote candidates:
	session.on('icecandidate', (data) => {
		// Depends on your plumbing. The point: route to iceQ.add(...)
		iceQ.add(data.candidate)
	})

	// When you set remote SDP:
	async function setRemote(desc) {
		await pc.setRemoteDescription(desc)
		await iceQ.onRemoteDescriptionSet()
	}

	return { pc, setRemote, iceQ }
}