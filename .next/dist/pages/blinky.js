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

var _reactThree = require('react-three');

var _reactThree2 = _interopRequireDefault(_reactThree);

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            var MeshFactory = _react2.default.createFactory(_reactThree2.default.Mesh);
            var LineSegmentsFactory = _react2.default.createFactory(_reactThree2.default.LineSegments);

            var icosaedronGeometry = new THREE.IcosahedronGeometry(200, 0);

            var lineSegmentsGeometry = new THREE.EdgesGeometry(icosaedronGeometry); // or WireframeGeometry( geometry )
            var lineSegmentsMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 0.5 });

            var Cupcake = _react2.default.createClass({
                displayName: 'Cupcake',

                render: function render() {
                    /* You can stack ReactTHREE childrens on this createElement */
                    return _react2.default.createElement(_reactThree2.default.Object3D, {
                        quaternion: this.props.quaternion,
                        position: this.props.position || new THREE.Vector3(0, 0, 0)
                    }, LineSegmentsFactory({
                        position: new THREE.Vector3(0, 100, 0),
                        geometry: lineSegmentsGeometry,
                        material: lineSegmentsMaterial
                    }));
                }
            });

            var scene = _react2.default.createClass({
                displayName: 'scene',
                render: function render() {
                    var MainCameraElement = _react2.default.createElement(_reactThree2.default.PerspectiveCamera, {
                        name: 'maincamera',
                        fov: '75',
                        aspect: this.props.width / this.props.height,
                        near: 1,
                        far: 5000,
                        position: new THREE.Vector3(0, 0, 600),
                        lookat: new THREE.Vector3(0, 0, 0)
                    });

                    return _react2.default.createElement(_reactThree2.default.Renderer, {
                        width: this.props.width,
                        height: this.props.height,
                        background: 0x000000
                    }, _react2.default.createElement(_reactThree2.default.Scene, {
                        width: this.props.width,
                        height: this.props.height,
                        camera: 'maincamera'
                    }, MainCameraElement, _react2.default.createElement(Cupcake, this.props.icosaedron)), _react2.default.createElement(_reactThree2.default.Scene, {
                        width: this.props.width,
                        height: this.props.height,
                        camera: 'maincamera'
                    }, MainCameraElement, _react2.default.createElement(Cupcake, this.props.icosaedron2)));
                }
            });

            var renderelement = document.getElementById("three-box");

            var w = window.innerWidth;
            var h = window.innerHeight;

            var sceneProps = {
                width: w,
                height: h,
                icosaedron: {
                    position: new THREE.Vector3(0, 0, 0),
                    quaternion: new THREE.Quaternion()
                },
                icosaedron2: {
                    position: new THREE.Vector3(0, 0, 0),
                    quaternion: new THREE.Quaternion()
                }
            };
            var icosaedronProps = sceneProps.icosaedron;
            var icosaedronProps2 = sceneProps.icosaedron2;
            var rotationangle = 0;

            _reactThree2.default.render(_react2.default.createElement(scene, sceneProps), renderelement);

            function spinIcosaedrons(t) {
                rotationangle = t * 0.001;
                icosaedronProps.quaternion.setFromEuler(new THREE.Euler(rotationangle, rotationangle * 3, 0));
                icosaedronProps.position.x = 300 * Math.sin(rotationangle);
                icosaedronProps2.quaternion.setFromEuler(new THREE.Euler(rotationangle, rotationangle * 3, 0));
                icosaedronProps2.position.x = 300 * Math.sin(-rotationangle);

                _reactThree2.default.render(_react2.default.createElement(scene, sceneProps), renderelement);

                requestAnimationFrame(spinIcosaedrons);
            }

            spinIcosaedrons();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/blinky.css' })), _react2.default.createElement('div', { id: 'three-box' }));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;