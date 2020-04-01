import * as THREE from 'three';

const vertexShader = require('./shaders/vertex_shader');
const fragmentShader = require('./shaders/fragment_shader');

function mobileCheck() {
    var check = 1;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = 1.5;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

export default (_this, window, document) => {

    return () => {
        // SETTING UP SCENE AND PERSPECTIVE MATRIX
        const self = _this
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 7000)
        const scene = new THREE.Scene()

        //SETTING UP SHITTY THINGS LIKE FOG AND LIGHTS
        // SETTING UP GEOMETRY AND MATERIAL
        const ico1Size = 200 / mobileCheck();
        const ico2Size = 50 / mobileCheck();
        const icosaedronGeometry1 = new THREE.IcosahedronGeometry(ico1Size, 0);
        const icosaedronGeometry2 = new THREE.IcosahedronGeometry(ico2Size, 1);
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

        let animationWindow = 20;
        let animationCounter = 0;
        function animate(t = 0) {
            let deltaColor = t * 0.0025;
            let delta1 = t * 0.00025
            let delta2 = t * 0.0007875

            requestAnimationFrame(animate);

            self.state.mesh1.quaternion.setFromEuler(new THREE.Euler(delta1, delta1 * 2, 0));
            self.state.mesh2.material.uniforms.r.value = Math.sin(deltaColor + 0);
            self.state.mesh2.material.uniforms.g.value = Math.sin(deltaColor + 90);
            self.state.mesh2.material.uniforms.b.value = Math.sin(deltaColor + 180);
            
            if (animationCounter % animationWindow === 0){
                self.state.mesh2.scale.x = Math.max(self.state.mesh2.scale.x * (Math.tan(t)/10 + 1), 0.35);
                self.state.mesh2.scale.y = Math.max(self.state.mesh2.scale.y * (Math.tan(t)/10 + 1), 0.35);
                self.state.mesh2.scale.z = Math.max(self.state.mesh2.scale.z * (Math.tan(t)/10 + 1), 0.35);
            }

            animationCounter++;

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