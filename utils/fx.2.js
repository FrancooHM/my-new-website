import * as THREE from 'three';
const colors = [0x0000ff, 0x00ff00, 0xff0000, 0xf0f000, 0x00f0f0];
const vertexShader = require('./shaders/vertex_shader');
const fragmentShader = require('./shaders/fragment_shader');

module.exports = (_this, window, document) => {
    return () => {
        // SETTING UP SCENE AND PERSPECTIVE MATRIX
        const self = _this
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000)
        const scene = new THREE.Scene()

        // SETTING UP GEOMETRY AND MATERIAL
        const icosaedronGeometry1 = new THREE.IcosahedronGeometry(300, 0)
        const icosaedronGeometry2 = new THREE.IcosahedronGeometry(100, 1)
        const lineSegmentsGeometry1 = new THREE.EdgesGeometry(icosaedronGeometry1);
        const lineSegmentsGeometry2 = new THREE.EdgesGeometry(icosaedronGeometry2);

        const lineSegmentsMaterial1 = new THREE.ShaderMaterial({
            uniforms: {

                time: {
                    value: 1.0
                },
                resolution: {
                    value: new THREE.Vector2()
                },
                r: {
                    value: 255.0
                },
                g: {
                    value: 255.0
                },
                b: {
                    value: 255.0
                }

            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });
        const lineSegmentsMaterial2 = new THREE.ShaderMaterial({
            uniforms: {

                time: {
                    value: 1.0
                },
                resolution: {
                    value: new THREE.Vector2()
                },
                r: {
                    value: 255.0
                },
                g: {
                    value: 255.0
                },
                b: {
                    value: 255.0
                }

            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        });

        var vertexDisplacement = new Float32Array(lineSegmentsGeometry1.attributes.position.count);
        for (let index = 0; index < vertexDisplacement.length; index++) {
            vertexDisplacement[index] = 0;
        }
        lineSegmentsGeometry1.addAttribute('vertexDisplacement', new THREE.BufferAttribute(vertexDisplacement, 1));

        const mesh1 = new THREE.LineSegments(lineSegmentsGeometry1, lineSegmentsMaterial1)
        const mesh2 = new THREE.LineSegments(lineSegmentsGeometry2, lineSegmentsMaterial2)

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
        }, animate)

        var fixIco = false;

        setInterval(() => {
            fixIco = !fixIco;
        }, 4000);

        function animate(t) {
            let deltaColor = t * 0.0025
            let delta1 = t * 0.00025
            let delta2 = t * 0.0007875

            requestAnimationFrame(animate);

            self.state.mesh1.quaternion.setFromEuler(new THREE.Euler(delta1, delta1 * 2, 0));
            self.state.mesh2.material.uniforms.r.value = Math.sin(deltaColor);
            self.state.mesh2.material.uniforms.g.value = Math.cos(deltaColor);
            self.state.mesh2.material.uniforms.b.value = Math.tan(deltaColor);

            let repetitive = Math.floor(t / 1000) % 5;
            let noise = repetitive === 0;

            if (noise) {
                for (let index = 0; index < vertexDisplacement.length; index++) {
                    vertexDisplacement[index] = Math.random() * 100;
                }
                self.state.mesh1.geometry.attributes.vertexDisplacement.needsUpdate = true;
            } else {
                if (fixIco) {
                    for (let index = 0; index < vertexDisplacement.length; index++) {
                        vertexDisplacement[index] = 0;
                    }
                }
                self.state.mesh1.geometry.attributes.vertexDisplacement.needsUpdate = true;
            }

            self.state.mesh2.quaternion.setFromEuler(new THREE.Euler(delta2, delta2 * 2, 0));
            self.state.renderer.render(self.state.scene, self.state.camera);
        }
    }
}