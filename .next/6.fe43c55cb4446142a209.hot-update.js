webpackHotUpdate(6,{

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(29);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(31);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(360);

var _head2 = _interopRequireDefault(_head);

var _three = __webpack_require__(401);

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/goodbye.js?entry';

var colors = [0x0000ff, 0x00ff00, 0xff0000, 0xf0f000, 0x00f0f0];

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: 'init',
    value: function init() {
      // SETTING UP SCENE AND PERSPECTIVE MATRIX
      var self = this;
      var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
      var scene = new THREE.Scene();

      // SETTING UP GEOMETRY AND MATERIAL
      var icosaedronGeometry1 = new THREE.IcosahedronGeometry(200, 0);
      var icosaedronGeometry2 = new THREE.IcosahedronGeometry(200, 2);
      var lineSegmentsGeometry1 = new THREE.EdgesGeometry(icosaedronGeometry1);
      var lineSegmentsGeometry2 = new THREE.EdgesGeometry(icosaedronGeometry2);
      var lineSegmentsMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 0.5 });
      var mesh1 = new THREE.LineSegments(lineSegmentsGeometry1, lineSegmentsMaterial);
      var mesh2 = new THREE.LineSegments(lineSegmentsGeometry2, lineSegmentsMaterial);

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
      window.addEventListener('resize', this.onWindowResize, false);

      //ATTACHING ELEMENTS TO THE STATE SCOPE AND RUNING FIRST ANIMATION FRAME
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
        self.state.mesh1.quaternion.setFromEuler(new THREE.Euler(rotationangle, rotationangle * 3, 0));
        self.state.mesh1.position.x = 250 * Math.sin(rotationangle);
        self.state.mesh1.position.y = 250 * Math.sin(-rotationangle * 2);
        self.state.mesh1.position.z = 200 * Math.sin(rotationangle * 2.5);
        self.state.mesh1.material.color.setHex(colors[Math.floor(Math.random() * colors.length)]);
        self.state.mesh2.quaternion.setFromEuler(new THREE.Euler(rotationangle, rotationangle * 3, 0));
        self.state.mesh2.position.x = 250 * Math.sin(-rotationangle);
        self.state.mesh2.position.y = 250 * Math.sin(rotationangle * 2);
        self.state.mesh2.position.z = 200 * Math.sin(-rotationangle * 2.5);
        self.state.mesh2.material.color.setHex(colors[Math.floor(Math.random() * colors.length)]);
        self.state.renderer.render(self.state.scene, self.state.camera);
      }
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      this.state.camera.aspect = window.innerWidth / window.innerHeight;
      this.state.camera.updateProjectionMatrix();
      this.state.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/goodbye.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })), _react2.default.createElement('div', { id: 'webgl-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement('div', { className: 'magical-text-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('h1', { className: 'animated fadeIn magical-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Get things done, make things better.')));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dvb2RieWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiVEhSRUUiLCJjb2xvcnMiLCJwcm9wcyIsImluaXQiLCJzZWxmIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzY2VuZSIsIlNjZW5lIiwiaWNvc2FlZHJvbkdlb21ldHJ5MSIsIkljb3NhaGVkcm9uR2VvbWV0cnkiLCJpY29zYWVkcm9uR2VvbWV0cnkyIiwibGluZVNlZ21lbnRzR2VvbWV0cnkxIiwiRWRnZXNHZW9tZXRyeSIsImxpbmVTZWdtZW50c0dlb21ldHJ5MiIsImxpbmVTZWdtZW50c01hdGVyaWFsIiwiTGluZUJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsImxpbmV3aWR0aCIsIm1lc2gxIiwiTGluZVNlZ21lbnRzIiwibWVzaDIiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJwb3NpdGlvbiIsInoiLCJhZGQiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uV2luZG93UmVzaXplIiwic2V0U3RhdGUiLCJhbmltYXRlIiwidCIsInJvdGF0aW9uYW5nbGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGF0ZSIsInF1YXRlcm5pb24iLCJzZXRGcm9tRXVsZXIiLCJFdWxlciIsIngiLCJNYXRoIiwic2luIiwieSIsIm1hdGVyaWFsIiwic2V0SGV4IiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJyZW5kZXIiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7SUFBUCxBQUFZOzs7Ozs7OztBQUNaLElBQU0sU0FBUyxDQUFBLEFBQUMsVUFBRCxBQUFVLFVBQVYsQUFBbUIsVUFBbkIsQUFBNEIsVUFBM0MsQUFBZSxBQUFxQzs7O2tDQUlsRDs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztpSUFBQSxBQUNYLEFBQ1A7Ozs7O3dDQUVtQixBQUNsQjtXQUFBLEFBQUssQUFDTjs7OzsyQkFFTSxBQUNMO0FBQ0E7VUFBTSxPQUFOLEFBQWEsQUFDYjtVQUFNLFNBQVMsSUFBSSxNQUFKLEFBQVUsa0JBQVYsQUFBNEIsSUFBSSxPQUFBLEFBQU8sYUFBYSxPQUFwRCxBQUEyRCxhQUEzRCxBQUF3RSxHQUF2RixBQUFlLEFBQTJFLEFBQzFGO1VBQU0sUUFBUSxJQUFJLE1BQWxCLEFBQWMsQUFBVSxBQUV4Qjs7QUFDQTtVQUFNLHNCQUFzQixJQUFJLE1BQUosQUFBVSxvQkFBVixBQUE4QixLQUExRCxBQUE0QixBQUFtQyxBQUMvRDtVQUFNLHNCQUFzQixJQUFJLE1BQUosQUFBVSxvQkFBVixBQUE4QixLQUExRCxBQUE0QixBQUFtQyxBQUMvRDtVQUFNLHdCQUF3QixJQUFJLE1BQUosQUFBVSxjQUF4QyxBQUE4QixBQUF3QixBQUN0RDtVQUFNLHdCQUF3QixJQUFJLE1BQUosQUFBVSxjQUF4QyxBQUE4QixBQUF3QixBQUN0RDtVQUFNLHVCQUF1QixJQUFJLE1BQUosQUFBVSxrQkFBa0IsRUFBQyxPQUFELEFBQVEsVUFBVSxXQUEzRSxBQUE2QixBQUE0QixBQUE2QixBQUN0RjtVQUFNLFFBQVEsSUFBSSxNQUFKLEFBQVUsYUFBVixBQUF1Qix1QkFBckMsQUFBYyxBQUE4QyxBQUM1RDtVQUFNLFFBQVEsSUFBSSxNQUFKLEFBQVUsYUFBVixBQUF1Qix1QkFBckMsQUFBYyxBQUE4QyxBQUU1RDs7QUFDQTtVQUFNLFdBQVcsSUFBSSxNQUFyQixBQUFpQixBQUFVLEFBRTNCOztBQUNBO2FBQUEsQUFBTyxTQUFQLEFBQWdCLElBQWhCLEFBQW9CLEFBRXBCOztBQUNBO1lBQUEsQUFBTSxJQUFOLEFBQVUsQUFDVjtZQUFBLEFBQU0sSUFBTixBQUFVLEFBRVY7O0FBQ0E7ZUFBQSxBQUFTLGNBQWMsT0FBdkIsQUFBOEIsQUFDOUI7ZUFBQSxBQUFTLFFBQVEsT0FBakIsQUFBd0IsWUFBWSxPQUFwQyxBQUEyQyxBQUUzQzs7QUFDQTtlQUFBLEFBQVMsZUFBVCxBQUF3QixpQkFBeEIsQUFBeUMsWUFBWSxTQUFyRCxBQUE4RCxBQUU5RDs7QUFDQTthQUFBLEFBQU8saUJBQVAsQUFBd0IsVUFBVSxLQUFsQyxBQUF1QyxnQkFBdkMsQUFBdUQsQUFFdkQ7O0FBQ0E7V0FBQSxBQUFLO2dCQUFTLEFBRVo7ZUFGWSxBQUdaO2tCQUhZLEFBSVo7ZUFKWSxBQUtaO2VBTEYsQUFBYztBQUFBLEFBQ1osU0FERixBQU1HLEFBRUg7O2VBQUEsQUFBUyxRQUFULEFBQWlCLEdBQUcsQUFDbEI7WUFBSSxnQkFBZ0IsSUFBcEIsQUFBd0IsQUFDeEI7OEJBQUEsQUFBc0IsQUFDdEI7YUFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFdBQWpCLEFBQTRCLGFBQWEsSUFBSSxNQUFKLEFBQVUsTUFBVixBQUFnQixlQUFlLGdCQUEvQixBQUErQyxHQUF4RixBQUF5QyxBQUFrRCxBQUMzRjthQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBakIsQUFBMEIsSUFBSSxNQUFNLEtBQUEsQUFBSyxJQUF6QyxBQUFvQyxBQUFTLEFBQzdDO2FBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixTQUFqQixBQUEwQixJQUFJLE1BQU0sS0FBQSxBQUFLLElBQUksQ0FBQSxBQUFDLGdCQUE5QyxBQUFvQyxBQUF3QixBQUM1RDthQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBakIsQUFBMEIsSUFBSSxNQUFNLEtBQUEsQUFBSyxJQUFJLGdCQUE3QyxBQUFvQyxBQUF1QixBQUMzRDthQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBakIsQUFBMEIsTUFBMUIsQUFBZ0MsT0FBTyxPQUFPLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUFTLE9BQXZFLEFBQXVDLEFBQU8sQUFBZ0MsQUFDOUU7YUFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFdBQWpCLEFBQTRCLGFBQWEsSUFBSSxNQUFKLEFBQVUsTUFBVixBQUFnQixlQUFlLGdCQUEvQixBQUErQyxHQUF4RixBQUF5QyxBQUFrRCxBQUMzRjthQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBakIsQUFBMEIsSUFBSSxNQUFNLEtBQUEsQUFBSyxJQUFJLENBQTdDLEFBQW9DLEFBQVUsQUFDOUM7YUFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFNBQWpCLEFBQTBCLElBQUksTUFBTSxLQUFBLEFBQUssSUFBSSxnQkFBN0MsQUFBb0MsQUFBdUIsQUFDM0Q7YUFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFNBQWpCLEFBQTBCLElBQUksTUFBTSxLQUFBLEFBQUssSUFBSSxDQUFBLEFBQUMsZ0JBQTlDLEFBQW9DLEFBQXdCLEFBQzVEO2FBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixTQUFqQixBQUEwQixNQUExQixBQUFnQyxPQUFPLE9BQU8sS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQVMsT0FBdkUsQUFBdUMsQUFBTyxBQUFnQyxBQUM5RTthQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsT0FBTyxLQUFBLEFBQUssTUFBaEMsQUFBc0MsT0FBTyxLQUFBLEFBQUssTUFBbEQsQUFBd0QsQUFDekQ7QUFFRjs7OztxQ0FFZ0IsQUFDZjtXQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsU0FBUyxPQUFBLEFBQU8sYUFBYSxPQUEvQyxBQUFzRCxBQUN0RDtXQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsQUFDbEI7V0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLFFBQVEsT0FBNUIsQUFBbUMsWUFBWSxPQUEvQyxBQUFzRCxBQUN2RDs7Ozs2QkFFUSxBQUVQOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLFlBQVcsTUFBdkMsQUFBNEM7b0JBQTVDO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7a0RBRUcsSUFBTCxBQUFRO29CQUFSO3NCQUpGLEFBSUUsQUFDQTtBQURBOzBCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQVBOLEFBQ0UsQUFLRSxBQUNFLEFBSVA7Ozs7O0VBM0YwQixnQkFBTSxBIiwiZmlsZSI6Imdvb2RieWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyYW5jb2FndXN0aW5yYWJhZ2xpYS9EZXZlbG9wL05leHQgYXBwcy9teS1uZXctd2Vic2l0ZSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/goodbye.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/goodbye.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(71)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

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
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mZTQzYzU1Y2I0NDQ2MTQyYTIwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ29vZGJ5ZS5qcz85NzkyNjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuY29uc3QgY29sb3JzID0gWzB4MDAwMGZmLDB4MDBmZjAwLDB4ZmYwMDAwLDB4ZjBmMDAwLDB4MDBmMGYwXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIFNFVFRJTkcgVVAgU0NFTkUgQU5EIFBFUlNQRUNUSVZFIE1BVFJJWFxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDcwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMTAwMClcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXG5cbiAgICAvLyBTRVRUSU5HIFVQIEdFT01FVFJZIEFORCBNQVRFUklBTFxuICAgIGNvbnN0IGljb3NhZWRyb25HZW9tZXRyeTEgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSgyMDAsIDApXG4gICAgY29uc3QgaWNvc2FlZHJvbkdlb21ldHJ5MiA9IG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KDIwMCwgMilcbiAgICBjb25zdCBsaW5lU2VnbWVudHNHZW9tZXRyeTEgPSBuZXcgVEhSRUUuRWRnZXNHZW9tZXRyeShpY29zYWVkcm9uR2VvbWV0cnkxKTtcbiAgICBjb25zdCBsaW5lU2VnbWVudHNHZW9tZXRyeTIgPSBuZXcgVEhSRUUuRWRnZXNHZW9tZXRyeShpY29zYWVkcm9uR2VvbWV0cnkyKTtcbiAgICBjb25zdCBsaW5lU2VnbWVudHNNYXRlcmlhbCA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4ZmZmZmZmLCBsaW5ld2lkdGg6IDAuNX0pO1xuICAgIGNvbnN0IG1lc2gxID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhsaW5lU2VnbWVudHNHZW9tZXRyeTEsIGxpbmVTZWdtZW50c01hdGVyaWFsKVxuICAgIGNvbnN0IG1lc2gyID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhsaW5lU2VnbWVudHNHZW9tZXRyeTIsIGxpbmVTZWdtZW50c01hdGVyaWFsKVxuXG4gICAgLy9TRVRUSU5HIFVQIFRIRSBSRU5ERVJFUlxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKVxuXG4gICAgLy9TRVRUSU5HIFVQIENBTUVSQSBQT1NJSU9OXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA2MDBcblxuICAgIC8vQURESU5HIEVMRU1FTlRTIFRPIFRIRSBTQ0VORVxuICAgIHNjZW5lLmFkZChtZXNoMSlcbiAgICBzY2VuZS5hZGQobWVzaDIpXG5cbiAgICAvLyBTRVRUSU5HIFVQIFBJWEVMIFJBVElPIEFORCBDQU5WQVMgU0laRVxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG4gICAgLy9BUFBFTkRJTkcgQ0FOQVMgVE8gVEhFIERPTVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJnbC13cmFwcGVyJykuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcblxuICAgIC8vQURESU5HIFdJTkRPV1MgUkVTSVpFIEVWRU5UXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUsIGZhbHNlKVxuXG4gICAgLy9BVFRBQ0hJTkcgRUxFTUVOVFMgVE8gVEhFIFNUQVRFIFNDT1BFIEFORCBSVU5JTkcgRklSU1QgQU5JTUFUSU9OIEZSQU1FXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjYW1lcmEsXG4gICAgICBzY2VuZSxcbiAgICAgIHJlbmRlcmVyLFxuICAgICAgbWVzaDEsXG4gICAgICBtZXNoMlxuICAgIH0sIGFuaW1hdGUpXG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKHQpIHtcbiAgICAgIGxldCByb3RhdGlvbmFuZ2xlID0gdCAqIDAuMDAxXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgIHNlbGYuc3RhdGUubWVzaDEucXVhdGVybmlvbi5zZXRGcm9tRXVsZXIobmV3IFRIUkVFLkV1bGVyKHJvdGF0aW9uYW5nbGUsIHJvdGF0aW9uYW5nbGUgKiAzLCAwKSlcbiAgICAgIHNlbGYuc3RhdGUubWVzaDEucG9zaXRpb24ueCA9IDI1MCAqIE1hdGguc2luKHJvdGF0aW9uYW5nbGUpXG4gICAgICBzZWxmLnN0YXRlLm1lc2gxLnBvc2l0aW9uLnkgPSAyNTAgKiBNYXRoLnNpbigtcm90YXRpb25hbmdsZSoyKVxuICAgICAgc2VsZi5zdGF0ZS5tZXNoMS5wb3NpdGlvbi56ID0gMjAwICogTWF0aC5zaW4ocm90YXRpb25hbmdsZSoyLjUpXG4gICAgICBzZWxmLnN0YXRlLm1lc2gxLm1hdGVyaWFsLmNvbG9yLnNldEhleChjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmNvbG9ycy5sZW5ndGgpXSlcbiAgICAgIHNlbGYuc3RhdGUubWVzaDIucXVhdGVybmlvbi5zZXRGcm9tRXVsZXIobmV3IFRIUkVFLkV1bGVyKHJvdGF0aW9uYW5nbGUsIHJvdGF0aW9uYW5nbGUgKiAzLCAwKSlcbiAgICAgIHNlbGYuc3RhdGUubWVzaDIucG9zaXRpb24ueCA9IDI1MCAqIE1hdGguc2luKC1yb3RhdGlvbmFuZ2xlKVxuICAgICAgc2VsZi5zdGF0ZS5tZXNoMi5wb3NpdGlvbi55ID0gMjUwICogTWF0aC5zaW4ocm90YXRpb25hbmdsZSoyKVxuICAgICAgc2VsZi5zdGF0ZS5tZXNoMi5wb3NpdGlvbi56ID0gMjAwICogTWF0aC5zaW4oLXJvdGF0aW9uYW5nbGUqMi41KVxuICAgICAgc2VsZi5zdGF0ZS5tZXNoMi5tYXRlcmlhbC5jb2xvci5zZXRIZXgoY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpjb2xvcnMubGVuZ3RoKV0pXG4gICAgICBzZWxmLnN0YXRlLnJlbmRlcmVyLnJlbmRlcihzZWxmLnN0YXRlLnNjZW5lLCBzZWxmLnN0YXRlLmNhbWVyYSlcbiAgICB9XG5cbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMuc3RhdGUuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy5zdGF0ZS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXG4gICAgdGhpcy5zdGF0ZS5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2dvb2RieWUuY3NzXCIvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgaWQ9XCJ3ZWJnbC13cmFwcGVyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFnaWNhbC10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluIG1hZ2ljYWwtdGV4dFwiPkdldCB0aGluZ3MgZG9uZSwgbWFrZSB0aGluZ3MgYmV0dGVyLjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9nb29kYnllLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7O0FBQUE7QUFDQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUtBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7OztBQTNGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9