const fft = require('jsfft');
const FFT_SAMPLE_LENGTH = 256;

async function initAudioContext(window) {
    let audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    let analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    return await navigator.mediaDevices.getUserMedia({
        audio: true
    });
}

function calculateVoiceBandAmplitude(audiodata) {
    const fullLength = audiodata.length
    const audioChunk = audiodata.slice(Math.max(fullLength - FFT_SAMPLE_LENGTH, 0), fullLength)
    const sampleLength = audioChunk.length
    // Use the in-place mapper to populate the data.
    const audioProcessor = new fft.ComplexArray(sampleLength).map((value, i, n) => {
        value.real = audioChunk[i]
    })
    const frequencies = audioProcessor.FFT()
    const band = Math.min(1, sampleLength - 1) // 48.000hz / 32 -> 1500hz per band, so the first element is amplitude from 1500hz to 3000hz
    return frequencies.real[band] / Math.sqrt(sampleLength)
}

async function setupAudioContext() {
    let recorder
    // SETING UP AUDIO CONTEXT
    try {
        const stream = await initAudioContext(window)
        recorder = new MediaRecorder(stream);
    } catch (error) {
        console.log("Not supported Audio Context")
    }

    return recorder
}

export default {
    setupAudioContext,
    initAudioContext,
    calculateVoiceBandAmplitude
}