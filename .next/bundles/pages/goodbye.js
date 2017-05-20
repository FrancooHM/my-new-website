
          window.__NEXT_REGISTER_PAGE('/goodbye', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(428);

var _head2 = _interopRequireDefault(_head);

var _reactThree = __webpack_require__(565);

var _reactThree2 = _interopRequireDefault(_reactThree);

var _three = __webpack_require__(563);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/goodbye.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/goodbye.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
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
    })(module.exports.default || module.exports, "/goodbye")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(564);


/***/ })

},[566]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9nb29kYnllLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ29vZGJ5ZS5qcz8xZTFkYjIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdFRIUkVFLCB7UmVuZGVyZXIsIFNjZW5lLCBQZXJzcGVjdGl2ZUNhbWVyYX0gZnJvbSAncmVhY3QtdGhyZWUnXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3ZWJHbFJlbmRlcmVyOiBSZWFjdFRIUkVFLlJlbmRlcmVyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJXZWJHTCgpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVEaW1lbnNpb25zID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgPT09IHdpbmRvdy5pbm5lckhlaWdodCAmJiB0aGlzLnN0YXRlLndpZHRoID09PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0fSk7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lXZWJHTCgpXG4gICAgICAgICAgICB0aGlzLnJlbmRlcldlYkdMKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveVdlYkdMID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiZGVzdHJveWluZ1wiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLXdyYXBwZXInKS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhyZWUtYm94JykpXG5cbiAgICB9XG4gICAgcmVuZGVyV2ViR0wgPSAoKSA9PiB7XG5cbiAgICAgICAgdmFyIGRpdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXZXcmFwcGVyLmlkID0gJ3RocmVlLWJveCdcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWJnbC13cmFwcGVyXCIpLmFwcGVuZENoaWxkKGRpdldyYXBwZXIpXG5cbiAgICAgICAgdmFyIE1lc2hGYWN0b3J5ID0gUmVhY3QuY3JlYXRlRmFjdG9yeShSZWFjdFRIUkVFLk1lc2gpXG4gICAgICAgIHZhciBMaW5lU2VnbWVudHNGYWN0b3J5ID0gUmVhY3QuY3JlYXRlRmFjdG9yeShSZWFjdFRIUkVFLkxpbmVTZWdtZW50cylcblxuICAgICAgICB2YXIgaWNvc2FlZHJvbkdlb21ldHJ5MSA9IG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KDIwMCwgMClcbiAgICAgICAgdmFyIGljb3NhZWRyb25HZW9tZXRyeTIgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSgyMDAsIDIpXG5cbiAgICAgICAgdmFyIGxpbmVTZWdtZW50c0dlb21ldHJ5MSA9IG5ldyBUSFJFRS5FZGdlc0dlb21ldHJ5KGljb3NhZWRyb25HZW9tZXRyeTEpOyAvLyBvciBXaXJlZnJhbWVHZW9tZXRyeSggZ2VvbWV0cnkgKVxuICAgICAgICB2YXIgbGluZVNlZ21lbnRzR2VvbWV0cnkyID0gbmV3IFRIUkVFLkVkZ2VzR2VvbWV0cnkoaWNvc2FlZHJvbkdlb21ldHJ5Mik7IC8vIG9yIFdpcmVmcmFtZUdlb21ldHJ5KCBnZW9tZXRyeSApXG4gICAgICAgIHZhciBsaW5lU2VnbWVudHNNYXRlcmlhbCA9IG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4ZmZmZmZmLCBsaW5ld2lkdGg6IDAuNX0pO1xuXG4gICAgICAgIHZhciBDdXBjYWtlMSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnQ3VwY2FrZTEnLFxuICAgICAgICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRIUkVFLlZlY3RvcjMpLFxuICAgICAgICAgICAgICAgIHF1YXRlcm5pb246IFJlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKFRIUkVFLlF1YXRlcm5pb24pLmlzUmVxdWlyZWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8qIFlvdSBjYW4gc3RhY2sgUmVhY3RUSFJFRSBjaGlsZHJlbnMgb24gdGhpcyBjcmVhdGVFbGVtZW50ICovXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUSFJFRS5PYmplY3QzRCwge1xuICAgICAgICAgICAgICAgICAgICBxdWF0ZXJuaW9uOiB0aGlzLnByb3BzLnF1YXRlcm5pb24sXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnByb3BzLnBvc2l0aW9uIHx8IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApXG4gICAgICAgICAgICAgICAgfSwgTGluZVNlZ21lbnRzRmFjdG9yeSh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAxMDAsIDApLFxuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbGluZVNlZ21lbnRzR2VvbWV0cnkxLFxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogbGluZVNlZ21lbnRzTWF0ZXJpYWxcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgQ3VwY2FrZTIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0N1cGNha2UyJyxcbiAgICAgICAgICAgIHByb3BUeXBlczoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUSFJFRS5WZWN0b3IzKSxcbiAgICAgICAgICAgICAgICBxdWF0ZXJuaW9uOiBSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihUSFJFRS5RdWF0ZXJuaW9uKS5pc1JlcXVpcmVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvKiBZb3UgY2FuIHN0YWNrIFJlYWN0VEhSRUUgY2hpbGRyZW5zIG9uIHRoaXMgY3JlYXRlRWxlbWVudCAqL1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0VEhSRUUuT2JqZWN0M0QsIHtcbiAgICAgICAgICAgICAgICAgICAgcXVhdGVybmlvbjogdGhpcy5wcm9wcy5xdWF0ZXJuaW9uLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wcm9wcy5wb3NpdGlvbiB8fCBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKVxuICAgICAgICAgICAgICAgIH0sIExpbmVTZWdtZW50c0ZhY3Rvcnkoe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMTAwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IGxpbmVTZWdtZW50c0dlb21ldHJ5MixcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWw6IGxpbmVTZWdtZW50c01hdGVyaWFsXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGVcbiAgICAgICAgdmFyIHNjZW5lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICdzY2VuZScsXG4gICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBNYWluQ2FtZXJhRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbWFpbmNhbWVyYScsXG4gICAgICAgICAgICAgICAgICAgIGZvdjogJzc1JyxcbiAgICAgICAgICAgICAgICAgICAgYXNwZWN0OiB0aGlzLnByb3BzLndpZHRoIC8gdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIG5lYXI6IDEsXG4gICAgICAgICAgICAgICAgICAgIGZhcjogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDYwMCksXG4gICAgICAgICAgICAgICAgICAgIGxvb2thdDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KF9zdGF0ZS53ZWJHbFJlbmRlcmVyLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAweDAwMDAwMFxuICAgICAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUSFJFRS5TY2VuZSwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhOiAnbWFpbmNhbWVyYSdcbiAgICAgICAgICAgICAgICB9LCBNYWluQ2FtZXJhRWxlbWVudCwgUmVhY3QuY3JlYXRlRWxlbWVudChDdXBjYWtlMSwgdGhpcy5wcm9wcy5pY29zYWVkcm9uKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUSFJFRS5TY2VuZSwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhOiAnbWFpbmNhbWVyYSdcbiAgICAgICAgICAgICAgICB9LCBNYWluQ2FtZXJhRWxlbWVudCwgUmVhY3QuY3JlYXRlRWxlbWVudChDdXBjYWtlMiwgdGhpcy5wcm9wcy5pY29zYWVkcm9uMikpKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgcmVuZGVyZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhyZWUtYm94XCIpXG5cbiAgICAgICAgdmFyIHcgPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICB2YXIgaCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICAgIHZhciBzY2VuZVByb3BzID0ge1xuICAgICAgICAgICAgd2lkdGg6IHcsXG4gICAgICAgICAgICBoZWlnaHQ6IGgsXG4gICAgICAgICAgICBpY29zYWVkcm9uOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApLFxuICAgICAgICAgICAgICAgIHF1YXRlcm5pb246IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29zYWVkcm9uMjoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSxcbiAgICAgICAgICAgICAgICBxdWF0ZXJuaW9uOiBuZXcgVEhSRUUuUXVhdGVybmlvbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGljb3NhZWRyb25Qcm9wcyA9IHNjZW5lUHJvcHMuaWNvc2FlZHJvblxuICAgICAgICB2YXIgaWNvc2FlZHJvblByb3BzMiA9IHNjZW5lUHJvcHMuaWNvc2FlZHJvbjJcbiAgICAgICAgdmFyIHJvdGF0aW9uYW5nbGUgPSAwXG5cbiAgICAgICAgUmVhY3RUSFJFRS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChzY2VuZSwgc2NlbmVQcm9wcyksIHJlbmRlcmVsZW1lbnQpXG5cbiAgICAgICAgZnVuY3Rpb24gc3Bpbkljb3NhZWRyb25zKHQpIHtcbiAgICAgICAgICAgIHJvdGF0aW9uYW5nbGUgPSB0ICogMC4wMDFcbiAgICAgICAgICAgIGljb3NhZWRyb25Qcm9wcy5xdWF0ZXJuaW9uLnNldEZyb21FdWxlcihuZXcgVEhSRUUuRXVsZXIocm90YXRpb25hbmdsZSwgcm90YXRpb25hbmdsZSAqIDMsIDApKVxuICAgICAgICAgICAgaWNvc2FlZHJvblByb3BzLnBvc2l0aW9uLnggPSAzMDAgKiBNYXRoLnNpbihyb3RhdGlvbmFuZ2xlKVxuICAgICAgICAgICAgaWNvc2FlZHJvblByb3BzMi5xdWF0ZXJuaW9uLnNldEZyb21FdWxlcihuZXcgVEhSRUUuRXVsZXIocm90YXRpb25hbmdsZSwgcm90YXRpb25hbmdsZSAqIDMsIDApKVxuICAgICAgICAgICAgaWNvc2FlZHJvblByb3BzMi5wb3NpdGlvbi54ID0gMzAwICogTWF0aC5zaW4oLXJvdGF0aW9uYW5nbGUpXG5cbiAgICAgICAgICAgIFJlYWN0VEhSRUUucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoc2NlbmUsIHNjZW5lUHJvcHMpLCByZW5kZXJlbGVtZW50KVxuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3Bpbkljb3NhZWRyb25zKVxuICAgICAgICB9XG5cbiAgICAgICAgc3Bpbkljb3NhZWRyb25zKClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9nb29kYnllLmNzc1wiLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIndlYmdsLXdyYXBwZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hZ2ljYWwtdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbmltYXRlZCBmYWRlSW4gbWFnaWNhbC10ZXh0XCI+R2V0IHRoaW5ncyBkb25lLCBtYWtlIHRoaW5ncyBiZXR0ZXIuPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZ29vZGJ5ZS5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQWlCQTtBQUNBO0FBRUE7QUFGQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUE1QkE7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7QUFoQ0E7QUFDQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUVBO0FBSkE7QUFPQTtBQWxCQTtBQUNBO0FBaUJBO0FBRUE7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUVBO0FBSkE7QUFPQTtBQWxCQTtBQUNBO0FBaUJBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBNUJBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTtBQURBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQXpKQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBR0E7QUFBQTs7OztBQUlBO0FBQ0E7Ozs7QUFJQTs7O0FBOElBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7OztBQTVLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        