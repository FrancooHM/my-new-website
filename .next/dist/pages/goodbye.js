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

      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/goodbye.css' })), _react2.default.createElement('div', { id: 'webgl-wrapper' }), _react2.default.createElement('div', { className: 'magical-text-wrapper' }, _react2.default.createElement('h1', { className: 'animated fadeIn magical-text' }, 'Get things done, make things better.')));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;