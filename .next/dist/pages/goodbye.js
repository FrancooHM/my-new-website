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

var _jsxFileName = '/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/goodbye.js?entry';


var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

        _this.updateDimensions = function () {
            if (_this.state.height === window.innerHeight && _this.state.width === window.innerWidth) {
                return;
            } else {
                _this.setState({ width: window.innerWidth, height: window.innerHeight });
                _this.destroyWebGL();
                _this.renderWebGL();
                console.log(_this.state);
            }
        };

        _this.destroyWebGL = function () {
            console.debug("destroying");
            document.getElementById('webgl-wrapper').removeChild(document.getElementById('three-box'));
        };

        _this.renderWebGL = function () {

            var divWrapper = document.createElement('div');
            divWrapper.id = 'three-box';
            document.getElementById("webgl-wrapper").appendChild(divWrapper);

            var MeshFactory = _react2.default.createFactory(_reactThree2.default.Mesh);
            var LineSegmentsFactory = _react2.default.createFactory(_reactThree2.default.LineSegments);

            var icosaedronGeometry1 = new THREE.IcosahedronGeometry(200, 0);
            var icosaedronGeometry2 = new THREE.IcosahedronGeometry(200, 2);

            var lineSegmentsGeometry1 = new THREE.EdgesGeometry(icosaedronGeometry1); // or WireframeGeometry( geometry )
            var lineSegmentsGeometry2 = new THREE.EdgesGeometry(icosaedronGeometry2); // or WireframeGeometry( geometry )
            var lineSegmentsMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 0.5 });

            var Cupcake1 = _react2.default.createClass({
                displayName: 'Cupcake1',
                propTypes: {
                    position: _react2.default.PropTypes.instanceOf(THREE.Vector3),
                    quaternion: _react2.default.PropTypes.instanceOf(THREE.Quaternion).isRequired
                },
                render: function render() {
                    /* You can stack ReactTHREE childrens on this createElement */
                    return _react2.default.createElement(_reactThree2.default.Object3D, {
                        quaternion: this.props.quaternion,
                        position: this.props.position || new THREE.Vector3(0, 0, 0)
                    }, LineSegmentsFactory({
                        position: new THREE.Vector3(0, 100, 0),
                        geometry: lineSegmentsGeometry1,
                        material: lineSegmentsMaterial
                    }));
                }
            });

            var Cupcake2 = _react2.default.createClass({
                displayName: 'Cupcake2',
                propTypes: {
                    position: _react2.default.PropTypes.instanceOf(THREE.Vector3),
                    quaternion: _react2.default.PropTypes.instanceOf(THREE.Quaternion).isRequired
                },
                render: function render() {
                    /* You can stack ReactTHREE childrens on this createElement */
                    return _react2.default.createElement(_reactThree2.default.Object3D, {
                        quaternion: this.props.quaternion,
                        position: this.props.position || new THREE.Vector3(0, 0, 0)
                    }, LineSegmentsFactory({
                        position: new THREE.Vector3(0, 100, 0),
                        geometry: lineSegmentsGeometry2,
                        material: lineSegmentsMaterial
                    }));
                }
            });

            var _state = _this.state;
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

                    return _react2.default.createElement(_state.webGlRenderer, {
                        width: this.props.width,
                        height: this.props.height,
                        background: 0x000000
                    }, _react2.default.createElement(_reactThree2.default.Scene, {
                        width: this.props.width,
                        height: this.props.height,
                        camera: 'maincamera'
                    }, MainCameraElement, _react2.default.createElement(Cupcake1, this.props.icosaedron)), _react2.default.createElement(_reactThree2.default.Scene, {
                        width: this.props.width,
                        height: this.props.height,
                        camera: 'maincamera'
                    }, MainCameraElement, _react2.default.createElement(Cupcake2, this.props.icosaedron2)));
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
        };

        _this.state = {
            webGlRenderer: _reactThree2.default.Renderer
        };
        return _this;
    }

    (0, _createClass3.default)(_class, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({ width: 0, height: 0 });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderWebGL();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/goodbye.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            })), _react2.default.createElement('div', { id: 'webgl-wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                }
            }), _react2.default.createElement('div', { className: 'magical-text-wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                }
            }, _react2.default.createElement('h1', { className: 'animated fadeIn magical-text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            }, 'Get things done, make things better.')));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;