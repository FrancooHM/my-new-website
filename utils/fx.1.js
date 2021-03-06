import * as THREE from 'three';
const colors = [0x0000ff, 0x00ff00, 0xff0000, 0xf0f000, 0x00f0f0];

module.exports = (_this, window, document) => {
    return () => {
        // SETTING UP SCENE AND PERSPECTIVE MATRIX
        const self = _this
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 20000)
        const scene = new THREE.Scene()

        // SETTING UP GEOMETRY AND MATERIAL
        const icosaedronGeometry1 = new THREE.IcosahedronGeometry(50, 0)
        const icosaedronGeometry2 = new THREE.IcosahedronGeometry(50, 0)
        const lineSegmentsGeometry1 = new THREE.EdgesGeometry(icosaedronGeometry1);
        const lineSegmentsGeometry2 = new THREE.EdgesGeometry(icosaedronGeometry2);
        const lineSegmentsMaterial = new THREE.LineBasicMaterial({
            color: 0xffffff,
            linewidth: 0.5
        });
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
        window.addEventListener('resize', _this.onWindowResize.bind(_this), false)

        //ATTACHING ELEMENTS TO THE STATE SCOPE AND RUNING FIRST ANIMATION FRAME
        _this.setState({
            camera,
            scene,
            renderer,
            mesh1,
            mesh2
        }, () => {
            console.log('this.state 3', _this.state);
            animate()
        })

        function animate(t) {
            let rotationangle = t * 0.001
            requestAnimationFrame(animate)
            self.state.mesh1.quaternion.setFromEuler(new THREE.Euler(rotationangle, rotationangle * Math.sin(rotationangle)/50, 0))
            self.state.mesh1.position.x = 100 * Math.sin(rotationangle)
            self.state.mesh1.position.y = 100 * Math.cos(rotationangle)
            self.state.mesh1.position.z = 100 * Math.tan(rotationangle)
            self.state.mesh1.material.color.setHex(colors[Math.floor(Math.random() * colors.length)])
            self.state.mesh2.quaternion.setFromEuler(new THREE.Euler(rotationangle, rotationangle * Math.sin(rotationangle)/50, 0))
            self.state.mesh2.position.x = 100 * Math.tan(rotationangle)
            self.state.mesh2.position.y = 100 * Math.sin(rotationangle)
            self.state.mesh2.position.z = 100 * Math.cos(rotationangle)
            self.state.mesh2.material.color.setHex(colors[Math.floor(Math.random() * colors.length)])
            self.state.renderer.render(self.state.scene, self.state.camera)
        }
    }
}