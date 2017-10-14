import React from 'react'
import Head from 'next/head'
import * as THREE from 'three'
const colors = [0x0000ff,0x00ff00,0xff0000,0xf0f000,0x00f0f0]

export default class extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.init()
  }

  init() {
    // SETTING UP SCENE AND PERSPECTIVE MATRIX
    const self = this
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000)
    const scene = new THREE.Scene()

    // SETTING UP GEOMETRY AND MATERIAL
    const icosaedronGeometry1 = new THREE.IcosahedronGeometry(200, 0)
    const icosaedronGeometry2 = new THREE.IcosahedronGeometry(200, 2)
    const lineSegmentsGeometry1 = new THREE.EdgesGeometry(icosaedronGeometry1);
    const lineSegmentsGeometry2 = new THREE.EdgesGeometry(icosaedronGeometry2);
    const lineSegmentsMaterial = new THREE.LineBasicMaterial({color: 0xffffff, linewidth: 0.5});
    const mesh1 = new THREE.LineSegments(lineSegmentsGeometry1, lineSegmentsMaterial)
    const mesh2 = new THREE.LineSegments(lineSegmentsGeometry2, lineSegmentsMaterial)

    //SETTING UP THE RENDERER
    const renderer = new THREE.WebGLRenderer()

    //SETTING UP CAMERA POSIION
    camera.position.z = 600

    //ADDING ELEMENTS TO THE SCENE
    scene.add(mesh1)
    scene.add(mesh2)

    // SETTING UP PIXEL RATIO AND CANVAS SIZE
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    //APPENDING CANAS TO THE DOM
    document.getElementById('webgl-wrapper').appendChild(renderer.domElement)

    //ADDING WINDOWS RESIZE EVENT
    window.addEventListener('resize', this.onWindowResize, false)

    //ATTACHING ELEMENTS TO THE STATE SCOPE AND RUNING FIRST ANIMATION FRAME
    this.setState({
      camera,
      scene,
      renderer,
      mesh1,
      mesh2
    }, animate)

    function animate(t) {
      let rotationangle = t * 0.001
      requestAnimationFrame(animate)
      self.state.mesh1.quaternion.setFromEuler(new THREE.Euler(rotationangle, rotationangle * 3, 0))
      self.state.mesh1.position.x = 250 * Math.sin(rotationangle)
      self.state.mesh1.position.y = 250 * Math.sin(-rotationangle*2)
      self.state.mesh1.position.z = 200 * Math.sin(rotationangle*2.5)
      self.state.mesh1.material.color.setHex(colors[Math.floor(Math.random()*colors.length)])
      self.state.mesh2.quaternion.setFromEuler(new THREE.Euler(rotationangle, rotationangle * 3, 0))
      self.state.mesh2.position.x = 250 * Math.sin(-rotationangle)
      self.state.mesh2.position.y = 250 * Math.sin(rotationangle*2)
      self.state.mesh2.position.z = 200 * Math.sin(-rotationangle*2.5)
      self.state.mesh2.material.color.setHex(colors[Math.floor(Math.random()*colors.length)])
      self.state.renderer.render(self.state.scene, self.state.camera)
    }

  }

  onWindowResize() {
    this.state.camera.aspect = window.innerWidth / window.innerHeight
    this.state.camera.updateProjectionMatrix()
    this.state.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  render() {

    return (
      <div>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/goodbye.css"/>
        </Head>
        <div id="webgl-wrapper"></div>
        <div className="magical-text-wrapper">
          <h1 className="animated fadeIn magical-text">Get things done, make things better.</h1>
        </div>
      </div>
    )
  }
}
