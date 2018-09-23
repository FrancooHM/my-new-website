module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/goodbye.js":
/*!**************************!*\
  !*** ./pages/goodbye.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fx_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fx.2 */ "./utils/fx.2.js");
/* harmony import */ var _utils_onWindowResize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/onWindowResize */ "./utils/onWindowResize.js");
/* harmony import */ var _utils_onWindowResize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_onWindowResize__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/goodbye.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onWindowResize = _utils_onWindowResize__WEBPACK_IMPORTED_MODULE_3___default()(this, window);
      this.fx = Object(_utils_fx_2__WEBPACK_IMPORTED_MODULE_2__["default"])(this, window, document);
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      this.fx();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/styles/goodbye.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "webgl-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "magical-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "animated fadeIn magical-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, " Get things done, make things better. ")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./utils/fx.2.js":
/*!***********************!*\
  !*** ./utils/fx.2.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

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

/***/ }),

/***/ "./utils/onWindowResize.js":
/*!*********************************!*\
  !*** ./utils/onWindowResize.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (_this, window) {
  return function () {
    _this.state.camera.aspect = window.innerWidth / window.innerHeight;

    _this.state.camera.updateProjectionMatrix();

    _this.state.renderer.setSize(window.innerWidth, window.innerHeight);
  };
};

/***/ }),

/***/ "./utils/shaders/fragment_shader.js":
/*!******************************************!*\
  !*** ./utils/shaders/fragment_shader.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float r;\nuniform float g;\nuniform float b;\n\nvoid main() {\n\tgl_FragColor = vec4(r,g,b,1.0);\n}\n";

/***/ }),

/***/ "./utils/shaders/vertex_shader.js":
/*!****************************************!*\
  !*** ./utils/shaders/vertex_shader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float r;\nuniform float g;\nuniform float b;\nattribute float vertexDisplacement;\nvoid main(){\n    vec3 p = position;\n    p.x = p.x + sin(vertexDisplacement) * 30.0;\n    p.y = p.y + cos(vertexDisplacement) * 30.0;\n    p.z = p.z + cos(vertexDisplacement) * 30.0;\n\n    vec4 modelViewPosition = modelViewMatrix * vec4(p ,1.0);\n    gl_Position = projectionMatrix * modelViewPosition;\n}\n";

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/goodbye.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/goodbye.js */"./pages/goodbye.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ })

/******/ });
//# sourceMappingURL=goodbye.js.map