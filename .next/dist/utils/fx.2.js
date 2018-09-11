'use strict';

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var colors = [0x0000ff, 0x00ff00, 0xff0000, 0xf0f000, 0x00f0f0];
var vertexShader = require('./shaders/vertex_shader');
var fragmentShader = require('./shaders/fragment_shader');

module.exports = function (_this, window, document) {
    return function () {
        // SETTING UP SCENE AND PERSPECTIVE MATRIX
        var self = _this;
        var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        var scene = new THREE.Scene();

        // SETTING UP GEOMETRY AND MATERIAL
        var icosaedronGeometry1 = new THREE.IcosahedronGeometry(300, 0);
        var icosaedronGeometry2 = new THREE.IcosahedronGeometry(100, 1);
        var lineSegmentsGeometry1 = new THREE.EdgesGeometry(icosaedronGeometry1);
        var lineSegmentsGeometry2 = new THREE.EdgesGeometry(icosaedronGeometry2);

        var lineSegmentsMaterial1 = new THREE.ShaderMaterial({
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
        var lineSegmentsMaterial2 = new THREE.ShaderMaterial({
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
        for (var index = 0; index < vertexDisplacement.length; index++) {
            vertexDisplacement[index] = 0;
        }
        lineSegmentsGeometry1.addAttribute('vertexDisplacement', new THREE.BufferAttribute(vertexDisplacement, 1));

        var mesh1 = new THREE.LineSegments(lineSegmentsGeometry1, lineSegmentsMaterial1);
        var mesh2 = new THREE.LineSegments(lineSegmentsGeometry2, lineSegmentsMaterial2);

        //SETTING UP THE RENDERER
        var renderer = new THREE.WebGLRenderer();

        //SETTING UP CAMERA POSIION
        camera.position.z = 600;

        //ADDING ELEMENTS TO THE SCENE
        scene.add(mesh1);
        scene.add(mesh2);

        // SETTING UP PIXEL RATIO AND CANVAS SIZE
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        //APPENDING CANAS TO THE DOM
        document.getElementById('webgl-wrapper').appendChild(renderer.domElement);

        //ADDING WINDOWS RESIZE EVENT
        window.addEventListener('resize', _this.onWindowResize.bind(_this), false);

        //ATTACHING ELEMENTS TO THE STATE SCOPE AND RUNING FIRST ANIMATION FRAME
        _this.setState({
            camera: camera,
            scene: scene,
            renderer: renderer,
            mesh1: mesh1,
            mesh2: mesh2
        }, animate);

        var fixIco = false;

        setInterval(function () {
            fixIco = !fixIco;
        }, 4000);

        function animate(t) {
            var deltaColor = t * 0.0025;
            var delta1 = t * 0.00025;
            var delta2 = t * 0.0007875;

            requestAnimationFrame(animate);

            self.state.mesh1.quaternion.setFromEuler(new THREE.Euler(delta1, delta1 * 2, 0));
            self.state.mesh2.material.uniforms.r.value = Math.sin(deltaColor);
            self.state.mesh2.material.uniforms.g.value = Math.cos(deltaColor);
            self.state.mesh2.material.uniforms.b.value = Math.tan(deltaColor);

            var repetitive = Math.floor(t / 1000) % 5;
            var noise = repetitive === 0;

            if (noise) {
                for (var _index = 0; _index < vertexDisplacement.length; _index++) {
                    vertexDisplacement[_index] = Math.random() * 100;
                }
                self.state.mesh1.geometry.attributes.vertexDisplacement.needsUpdate = true;
            } else {
                if (fixIco) {
                    for (var _index2 = 0; _index2 < vertexDisplacement.length; _index2++) {
                        vertexDisplacement[_index2] = 0;
                    }
                }
                self.state.mesh1.geometry.attributes.vertexDisplacement.needsUpdate = true;
            }

            self.state.mesh2.quaternion.setFromEuler(new THREE.Euler(delta2, delta2 * 2, 0));
            self.state.renderer.render(self.state.scene, self.state.camera);
        }
    };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2Z4LjIuanMiXSwibmFtZXMiOlsiVEhSRUUiLCJjb2xvcnMiLCJ2ZXJ0ZXhTaGFkZXIiLCJyZXF1aXJlIiwiZnJhZ21lbnRTaGFkZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX3RoaXMiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInNlbGYiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNjZW5lIiwiU2NlbmUiLCJpY29zYWVkcm9uR2VvbWV0cnkxIiwiSWNvc2FoZWRyb25HZW9tZXRyeSIsImljb3NhZWRyb25HZW9tZXRyeTIiLCJsaW5lU2VnbWVudHNHZW9tZXRyeTEiLCJFZGdlc0dlb21ldHJ5IiwibGluZVNlZ21lbnRzR2VvbWV0cnkyIiwibGluZVNlZ21lbnRzTWF0ZXJpYWwxIiwiU2hhZGVyTWF0ZXJpYWwiLCJ1bmlmb3JtcyIsInRpbWUiLCJ2YWx1ZSIsInJlc29sdXRpb24iLCJWZWN0b3IyIiwiciIsImciLCJiIiwibGluZVNlZ21lbnRzTWF0ZXJpYWwyIiwidmVydGV4RGlzcGxhY2VtZW50IiwiRmxvYXQzMkFycmF5IiwiYXR0cmlidXRlcyIsInBvc2l0aW9uIiwiY291bnQiLCJpbmRleCIsImxlbmd0aCIsImFkZEF0dHJpYnV0ZSIsIkJ1ZmZlckF0dHJpYnV0ZSIsIm1lc2gxIiwiTGluZVNlZ21lbnRzIiwibWVzaDIiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJ6IiwiYWRkIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib25XaW5kb3dSZXNpemUiLCJiaW5kIiwic2V0U3RhdGUiLCJhbmltYXRlIiwiZml4SWNvIiwic2V0SW50ZXJ2YWwiLCJ0IiwiZGVsdGFDb2xvciIsImRlbHRhMSIsImRlbHRhMiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0YXRlIiwicXVhdGVybmlvbiIsInNldEZyb21FdWxlciIsIkV1bGVyIiwibWF0ZXJpYWwiLCJNYXRoIiwic2luIiwiY29zIiwidGFuIiwicmVwZXRpdGl2ZSIsImZsb29yIiwibm9pc2UiLCJyYW5kb20iLCJnZW9tZXRyeSIsIm5lZWRzVXBkYXRlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLEFBQU87O0lBQVAsQUFBWTs7OztBQUNaLElBQU0sU0FBUyxDQUFBLEFBQUMsVUFBRCxBQUFXLFVBQVgsQUFBcUIsVUFBckIsQUFBK0IsVUFBOUMsQUFBZSxBQUF5QztBQUN4RCxJQUFNLGVBQWUsUUFBckIsQUFBcUIsQUFBUTtBQUM3QixJQUFNLGlCQUFpQixRQUF2QixBQUF1QixBQUFROztBQUUvQixPQUFBLEFBQU8sVUFBVSxVQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVIsQUFBZ0IsVUFBYSxBQUMxQztXQUFPLFlBQU0sQUFDVDtBQUNBO1lBQU0sT0FBTixBQUFhLEFBQ2I7WUFBTSxTQUFTLElBQUksTUFBSixBQUFVLGtCQUFWLEFBQTRCLElBQUksT0FBQSxBQUFPLGFBQWEsT0FBcEQsQUFBMkQsYUFBM0QsQUFBd0UsR0FBdkYsQUFBZSxBQUEyRSxBQUMxRjtZQUFNLFFBQVEsSUFBSSxNQUFsQixBQUFjLEFBQVUsQUFFeEI7O0FBQ0E7WUFBTSxzQkFBc0IsSUFBSSxNQUFKLEFBQVUsb0JBQVYsQUFBOEIsS0FBMUQsQUFBNEIsQUFBbUMsQUFDL0Q7WUFBTSxzQkFBc0IsSUFBSSxNQUFKLEFBQVUsb0JBQVYsQUFBOEIsS0FBMUQsQUFBNEIsQUFBbUMsQUFDL0Q7WUFBTSx3QkFBd0IsSUFBSSxNQUFKLEFBQVUsY0FBeEMsQUFBOEIsQUFBd0IsQUFDdEQ7WUFBTSx3QkFBd0IsSUFBSSxNQUFKLEFBQVUsY0FBeEMsQUFBOEIsQUFBd0IsQUFFdEQ7O1lBQU0sNEJBQTRCLE1BQUosQUFBVTs7OzsyQkFDMUIsQUFFQSxBQUNLLEFBRVg7QUFITSxBQUNGOzsyQkFHTyxJQUFJLE1BTlQs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QUE2QyxBQUFTLEFBQ3REO2lCQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBakIsQUFBMEIsU0FBMUIsQUFBbUMsRUFBbkMsQUFBcUMsUUFBUSxLQUFBLEFBQUssSUFBbEQsQUFBNkMsQUFBUyxBQUN0RDtpQkFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFNBQWpCLEFBQTBCLFNBQTFCLEFBQW1DLEVBQW5DLEFBQXFDLFFBQVEsS0FBQSxBQUFLLElBQWxELEFBQTZDLEFBQVMsQUFFdEQ7O2dCQUFJLGFBQWEsS0FBQSxBQUFLLE1BQU0sSUFBWCxBQUFlLFFBQWhDLEFBQXdDLEFBQ3hDO2dCQUFJLFFBQVEsZUFBWixBQUEyQixBQUUzQjs7Z0JBQUEsQUFBSSxPQUFPLEFBQ1A7cUJBQUssSUFBSSxTQUFULEFBQWlCLEdBQUcsU0FBUSxtQkFBNUIsQUFBK0MsUUFBL0MsQUFBdUQsVUFBUyxBQUM1RDt1Q0FBQSxBQUFtQixVQUFTLEtBQUEsQUFBSyxXQUFqQyxBQUE0QyxBQUMvQztBQUNEO3FCQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBakIsQUFBMEIsV0FBMUIsQUFBcUMsbUJBQXJDLEFBQXdELGNBQXhELEFBQXNFLEFBQ3pFO0FBTEQsbUJBS08sQUFDSDtvQkFBQSxBQUFJLFFBQVEsQUFDUjt5QkFBSyxJQUFJLFVBQVQsQUFBaUIsR0FBRyxVQUFRLG1CQUE1QixBQUErQyxRQUEvQyxBQUF1RCxXQUFTLEFBQzVEOzJDQUFBLEFBQW1CLFdBQW5CLEFBQTRCLEFBQy9CO0FBQ0o7QUFDRDtxQkFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFNBQWpCLEFBQTBCLFdBQTFCLEFBQXFDLG1CQUFyQyxBQUF3RCxjQUF4RCxBQUFzRSxBQUN6RTtBQUVEOztpQkFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFdBQWpCLEFBQTRCLGFBQWEsSUFBSSxNQUFKLEFBQVUsTUFBVixBQUFnQixRQUFRLFNBQXhCLEFBQWlDLEdBQTFFLEFBQXlDLEFBQW9DLEFBQzdFO2lCQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsT0FBTyxLQUFBLEFBQUssTUFBaEMsQUFBc0MsT0FBTyxLQUFBLEFBQUssTUFBbEQsQUFBd0QsQUFDM0Q7QUFDSjtBQXZJRCxBQXdJSDtBQXpJRCIsImZpbGUiOiJmeC4yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mcmFuY29hZ3VzdGlucmFiYWdsaWEvRGV2ZWxvcC9OZXh0IGFwcHMvbXktbmV3LXdlYnNpdGUifQ==