webpackHotUpdate("static/development/pages/goodbye.js",{

/***/ "./pages/goodbye.js":
/*!**************************!*\
  !*** ./pages/goodbye.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
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




var colors = [0x0000ff, 0x00ff00, 0xff0000, 0xf0f000, 0x00f0f0];

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
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      // SETTING UP SCENE AND PERSPECTIVE MATRIX
      var self = this;
      var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](70, window.innerWidth / window.innerHeight, 1, 1000);
      var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"](); // SETTING UP GEOMETRY AND MATERIAL

      var icosaedronGeometry1 = new three__WEBPACK_IMPORTED_MODULE_2__["IcosahedronGeometry"](200, 0);
      var icosaedronGeometry2 = new three__WEBPACK_IMPORTED_MODULE_2__["IcosahedronGeometry"](200, 2);
      var lineSegmentsGeometry1 = new three__WEBPACK_IMPORTED_MODULE_2__["EdgesGeometry"](icosaedronGeometry1);
      var lineSegmentsGeometry2 = new three__WEBPACK_IMPORTED_MODULE_2__["EdgesGeometry"](icosaedronGeometry2);
      var lineSegmentsMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({
        color: 0xffffff,
        linewidth: 0.5
      });
      var mesh1 = new three__WEBPACK_IMPORTED_MODULE_2__["LineSegments"](lineSegmentsGeometry1, lineSegmentsMaterial);
      var mesh2 = new three__WEBPACK_IMPORTED_MODULE_2__["LineSegments"](lineSegmentsGeometry2, lineSegmentsMaterial); //SETTING UP THE RENDERER

      var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"](); //SETTING UP CAMERA POSIION

      camera.position.z = 600; //ADDING ELEMENTS TO THE SCENE

      scene.add(mesh1);
      scene.add(mesh2); // SETTING UP PIXEL RATIO AND CANVAS SIZE

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight); //APPENDING CANAS TO THE DOM

      document.getElementById('webgl-wrapper').appendChild(renderer.domElement); //ADDING WINDOWS RESIZE EVENT

      window.addEventListener('resize', this.onWindowResize.bind(this), false); //ATTACHING ELEMENTS TO THE STATE SCOPE AND RUNING FIRST ANIMATION FRAME

      this.setState({
        camera: camera,
        scene: scene,
        renderer: renderer,
        mesh1: mesh1,
        mesh2: mesh2
      }, animate);

      function animate(t) {
        var rotationangle = t * 0.001;
        requestAnimationFrame(animate);
        self.state.mesh1.quaternion.setFromEuler(new three__WEBPACK_IMPORTED_MODULE_2__["Euler"](rotationangle, rotationangle * 3, 0));
        self.state.mesh1.position.x = 250 * Math.sin(rotationangle);
        self.state.mesh1.position.y = 250 * Math.sin(-rotationangle * 2);
        self.state.mesh1.position.z = 200 * Math.sin(rotationangle * 2.5);
        self.state.mesh1.material.color.setHex(colors[Math.floor(Math.random() * colors.length)]);
        self.state.mesh2.quaternion.setFromEuler(new three__WEBPACK_IMPORTED_MODULE_2__["Euler"](rotationangle, rotationangle * 3, 0));
        self.state.mesh2.position.x = 250 * Math.sin(-rotationangle);
        self.state.mesh2.position.y = 250 * Math.sin(rotationangle * 2);
        self.state.mesh2.position.z = 200 * Math.sin(-rotationangle * 2.5);
        self.state.mesh2.material.color.setHex(colors[Math.floor(Math.random() * colors.length)]);
        self.state.renderer.render(self.state.scene, self.state.camera);
      }
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.state.camera.aspect = window.innerWidth / window.innerHeight;
      this.state.camera.updateProjectionMatrix();
      this.state.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/styles/goodbye.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "webgl-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "magical-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "animated fadeIn magical-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Get things done, make things better.")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/goodbye")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/fx.2.js":
false,

/***/ "./utils/onWindowResize.js":
false,

/***/ "./utils/shaders/fragment_shader.js":
false,

/***/ "./utils/shaders/vertex_shader.js":
false

})
//# sourceMappingURL=goodbye.js.a34b4c3d5bf589cf27f8.hot-update.js.map