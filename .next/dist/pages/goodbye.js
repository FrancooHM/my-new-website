'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _three = require('three');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dvb2RieWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiVEhSRUUiLCJjb2xvcnMiLCJwcm9wcyIsImluaXQiLCJzZWxmIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzY2VuZSIsIlNjZW5lIiwiaWNvc2FlZHJvbkdlb21ldHJ5MSIsIkljb3NhaGVkcm9uR2VvbWV0cnkiLCJpY29zYWVkcm9uR2VvbWV0cnkyIiwibGluZVNlZ21lbnRzR2VvbWV0cnkxIiwiRWRnZXNHZW9tZXRyeSIsImxpbmVTZWdtZW50c0dlb21ldHJ5MiIsImxpbmVTZWdtZW50c01hdGVyaWFsIiwiTGluZUJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsImxpbmV3aWR0aCIsIm1lc2gxIiwiTGluZVNlZ21lbnRzIiwibWVzaDIiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJwb3NpdGlvbiIsInoiLCJhZGQiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uV2luZG93UmVzaXplIiwic2V0U3RhdGUiLCJhbmltYXRlIiwidCIsInJvdGF0aW9uYW5nbGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGF0ZSIsInF1YXRlcm5pb24iLCJzZXRGcm9tRXVsZXIiLCJFdWxlciIsIngiLCJNYXRoIiwic2luIiwieSIsIm1hdGVyaWFsIiwic2V0SGV4IiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJyZW5kZXIiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFB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SyxNQUFNLEtBQUEsQUFBSyxXQUFTLE9BQXZFLEFBQXVDLEFBQU8sQUFBZ0MsQUFDOUU7YUFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFdBQWpCLEFBQTRCLGFBQWEsSUFBSSxNQUFKLEFBQVUsTUFBVixBQUFnQixlQUFlLGdCQUEvQixBQUErQyxHQUF4RixBQUF5QyxBQUFrRCxBQUMzRjthQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBakIsQUFBMEIsSUFBSSxNQUFNLEtBQUEsQUFBSyxJQUFJLENBQTdDLEFBQW9DLEFBQVUsQUFDOUM7YUFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFNBQWpCLEFBQTBCLElBQUksTUFBTSxLQUFBLEFBQUssSUFBSSxnQkFBN0MsQUFBb0MsQUFBdUIsQUFDM0Q7YUFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFNBQWpCLEFBQTBCLElBQUksTUFBTSxLQUFBLEFBQUssSUFBSSxDQUFBLEFBQUMsZ0JBQTlDLEFBQW9DLEFBQXdCLEFBQzVEO2FBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixTQUFqQixBQUEwQixNQUExQixBQUFnQyxPQUFPLE9BQU8sS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLFdBQVMsT0FBdkUsQUFBdUMsQUFBTyxBQUFnQyxBQUM5RTthQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsT0FBTyxLQUFBLEFBQUssTUFBaEMsQUFBc0MsT0FBTyxLQUFBLEFBQUssTUFBbEQsQUFBd0QsQUFDekQ7QUFFRjs7OztxQ0FFZ0IsQUFDZjtXQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsU0FBUyxPQUFBLEFBQU8sYUFBYSxPQUEvQyxBQUFzRCxBQUN0RDtXQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsQUFDbEI7V0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLFFBQVEsT0FBNUIsQUFBbUMsWUFBWSxPQUEvQyxBQUFzRCxBQUN2RDs7Ozs2QkFFUSxBQUVQOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLFlBQVcsTUFBdkMsQUFBNEM7b0JBQTVDO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7a0RBRUcsSUFBTCxBQUFRO29CQUFSO3NCQUpGLEFBSUUsQUFDQTtBQURBOzBCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQVBOLEFBQ0UsQUFLRSxBQUNFLEFBSVA7Ozs7O0VBM0YwQixnQkFBTSxBIiwiZmlsZSI6Imdvb2RieWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyYW5jb2FndXN0aW5yYWJhZ2xpYS9EZXZlbG9wL05leHQgYXBwcy9teS1uZXctd2Vic2l0ZSJ9