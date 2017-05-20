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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/_document.js?entry';


var MyDocument = function (_Document) {
    (0, _inherits3.default)(MyDocument, _Document);

    function MyDocument() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MyDocument);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).call.apply(_ref, [this].concat(args))), _this), _this.setCSSHeaders = function (pathname) {
            if (pathname === "/goodbye") {
                return _react2.default.createElement(_document.Head, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }, _react2.default.createElement('title', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }, 'Franco Rabglia Website'), _react2.default.createElement('meta', { name: 'robots', content: 'Index follow', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                }), _react2.default.createElement('meta', { name: 'title', content: 'Franco Rabglia Website', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }), _react2.default.createElement('meta', { name: 'description', content: 'Franco Rabalgia Website.', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }), _react2.default.createElement('meta', { name: 'keywords', content: 'developer,javascript,fullstack,lead,senior,engineer', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }), _react2.default.createElement('meta', { name: 'author', content: 'Franco Rabalgia', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Rubik:400,700', rel: 'stylesheet', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/normalize.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/goodbye-master.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/index.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/animate.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                }));
            } else {
                return _react2.default.createElement(_document.Head, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }, _react2.default.createElement('title', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                }, 'Franco Rabglia Website'), _react2.default.createElement('meta', { name: 'robots', content: 'Index follow', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                }), _react2.default.createElement('meta', { name: 'title', content: 'Franco Rabglia Website', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }), _react2.default.createElement('meta', { name: 'description', content: 'Franco Rabalgia Website', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }), _react2.default.createElement('meta', { name: 'keywords', content: 'developer,javascript,fullstack,lead,senior,engineer', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }), _react2.default.createElement('meta', { name: 'author', content: 'Franco Rabalgia', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Rubik:400,700', rel: 'stylesheet', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/normalize.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/master.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/index.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/animate.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                }));
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MyDocument, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('html', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, this.setCSSHeaders(this.props.pathname), _react2.default.createElement('body', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('nav', { id: '__nav', className: 'animated fadeIn', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement('div', { className: "button " + this.props.active.home, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', as: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, 'HOME'))), _react2.default.createElement('div', { className: "button " + this.props.active.contact, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/contact', as: '/contact', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, 'SAY HI!'))), _react2.default.createElement('div', { className: "button " + this.props.active.goodbye, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/goodbye', as: '/goodbye', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'GOODBYE')))), _react2.default.createElement(_document.Main, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }), _react2.default.createElement(_document.NextScript, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref2) {
            var pathname = _ref2.pathname,
                renderPage = _ref2.renderPage;

            var _renderPage = renderPage(),
                html = _renderPage.html;

            var home = "";
            var contact = "";
            var goodbye = "";

            switch (pathname) {
                case "/index":
                    home = "active";
                    break;

                case "/contact":
                    contact = "active";
                    break;

                case "/goodbye":
                    goodbye = "active";
                    break;
                default:
                    home = true;
            }

            return {
                html: html,
                active: {
                    home: home,
                    contact: contact,
                    goodbye: goodbye
                },
                pathname: pathname
            };
        }
    }]);

    return MyDocument;
}(_document2.default);

exports.default = MyDocument;