import * as THREE from 'three';
import Core from './core';
import AudioManager from './audio.manager';
import SceneFactory from './scene.factory';
import VideoManager from './video.manager';

const CAMERA_Z_DISTANCE = 600;

function redraw(t = 0) {
    let deltaColor = t * 0.0025;
    let delta1 = t * 0.00025;
    let delta2 = t * 0.0007875;

    this.meshes[0].quaternion.setFromEuler(new THREE.Euler(delta1, delta1 * 2, 0));
    this.meshes[1].quaternion.setFromEuler(new THREE.Euler(delta2, delta2 * 2, 0));
    this.meshes[1].material.uniforms.r.value = Math.sin(deltaColor + 0);
    this.meshes[1].material.uniforms.g.value = Math.sin(deltaColor + 90);
    this.meshes[1].material.uniforms.b.value = Math.sin(deltaColor + 180);
}

function shadershit() {
    // const voiceAmplitude = AudioManager.calculateVoiceBandAmplitude(this.audiodata)
    // console.log('voiceAmplitude: ', voiceAmplitude)
    // for (let index = 0; index < this.vertexDisplacement.length; index++) {
    //     this.vertexDisplacement[index] = voiceAmplitude;
    // }
    // this.mesh1.geometry.attributes.vertexDisplacement.needsUpdate = true;
}

export default async function fftFx() {

    // const recorder = await AudioManager.setupAudioContext();
    const repo = SceneFactory.create.bind(this)(CAMERA_Z_DISTANCE, window.innerWidth,  window.innerHeight);

    //APPENDING CANVAS TO THE DOM
    document.getElementById('webgl-wrapper').appendChild(repo.renderer.domElement)

    //ATTACHING ELEMENTS TO THE STATE SCOPE AND RUNING FIRST ANIMATION FRAME
    this.camera = repo.camera
    this.scene = repo.scene
    this.renderer = repo.renderer
    this.meshes = [...repo.meshes]

    // VideoManager.setupVertexShaderCommunicationBuffer.bind(this)('vertexDisplacement', repo.meshes[0].geometry);

    this.audiodata = []
    //SETTING THE MEDIA STREAM COLLECTOR
    // recorder.ondataavailable = (e) => {
    //     this.audiodata.push(e.data.size)
    // }
    //STARTING MIC RECORDER
    // recorder.start(50);
    //STARTING ANIMATION
    Core.startAnimation.bind(this)(0, redraw, shadershit)
}