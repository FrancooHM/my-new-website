webpackHotUpdate("static/development/pages/goodbye.js",{

/***/ "./utils/fx.2.js":
/*!***********************!*\
  !*** ./utils/fx.2.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

var colors = [0x0000ff, 0x00ff00, 0xff0000, 0xf0f000, 0x00f0f0];

var vertexShader = __webpack_require__(/*! ./shaders/vertex_shader */ "./utils/shaders/vertex_shader.js");

var fragmentShader = __webpack_require__(/*! ./shaders/fragment_shader */ "./utils/shaders/fragment_shader.js");

/* harmony default export */ __webpack_exports__["default"] = (function (_this, window, document) {
  return function () {
    // SETTING UP SCENE AND PERSPECTIVE MATRIX
    var self = _this;
    var camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](70, window.innerWidth / window.innerHeight, 1, 1000);
    var scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"](); // SETTING UP GEOMETRY AND MATERIAL

    var icosaedronGeometry1 = new three__WEBPACK_IMPORTED_MODULE_0__["IcosahedronGeometry"](300, 0);
    var icosaedronGeometry2 = new three__WEBPACK_IMPORTED_MODULE_0__["IcosahedronGeometry"](100, 1);
    var lineSegmentsGeometry1 = new three__WEBPACK_IMPORTED_MODULE_0__["EdgesGeometry"](icosaedronGeometry1);
    var lineSegmentsGeometry2 = new three__WEBPACK_IMPORTED_MODULE_0__["EdgesGeometry"](icosaedronGeometry2);
    var lineSegmentsMaterial1 = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
      uniforms: {
        time: {
          value: 1.0
        },
        resolution: {
          value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]()
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
    var lineSegmentsMaterial2 = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
      uniforms: {
        time: {
          value: 1.0
        },
        resolution: {
          value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]()
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

    lineSegmentsGeometry1.addAttribute('vertexDisplacement', new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](vertexDisplacement, 1));
    var mesh1 = new three__WEBPACK_IMPORTED_MODULE_0__["LineSegments"](lineSegmentsGeometry1, lineSegmentsMaterial1);
    var mesh2 = new three__WEBPACK_IMPORTED_MODULE_0__["LineSegments"](lineSegmentsGeometry2, lineSegmentsMaterial2); //SETTING UP THE RENDERER

    var renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"](); //SETTING UP CAMERA POSIION

    camera.position.z = 600; //ADDING ELEMENTS TO THE SCENE

    scene.add(mesh1);
    scene.add(mesh2); // SETTING UP PIXEL RATIO AND CANVAS SIZE

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight); //APPENDING CANAS TO THE DOM

    document.getElementById('webgl-wrapper').appendChild(renderer.domElement); //ADDING WINDOWS RESIZE EVENT

    window.addEventListener('resize', _this.onWindowResize.bind(_this), false); //ATTACHING ELEMENTS TO THE STATE SCOPE AND RUNING FIRST ANIMATION FRAME

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
      self.state.mesh1.quaternion.setFromEuler(new three__WEBPACK_IMPORTED_MODULE_0__["Euler"](delta1, delta1 * 2, 0));
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

      self.state.mesh2.quaternion.setFromEuler(new three__WEBPACK_IMPORTED_MODULE_0__["Euler"](delta2, delta2 * 2, 0));
      self.state.renderer.render(self.state.scene, self.state.camera);
    }
  };
});

/***/ })

})
//# sourceMappingURL=goodbye.js.13af9d84632ca16eeb75.hot-update.js.map