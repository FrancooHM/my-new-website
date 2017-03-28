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
                return _react2.default.createElement(_document.Head, null, _react2.default.createElement('title', null, 'Franco Rabglia Website'), _react2.default.createElement('meta', { name: 'robots', content: 'Index follow' }), _react2.default.createElement('meta', { name: 'title', content: 'Franco Rabglia Website' }), _react2.default.createElement('meta', { name: 'description', content: 'Franco Rabalgia Website' }), _react2.default.createElement('meta', { name: 'keywords', content: 'developer,javascript,fullstack,lead,senior,engineer' }), _react2.default.createElement('meta', { name: 'author', content: 'Franco Rabalgia' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Rubik:400,700', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/normalize.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/goodbye-master.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/index.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/animate.css' }));
            } else {
                return _react2.default.createElement(_document.Head, null, _react2.default.createElement('title', null, 'Franco Rabglia Website'), _react2.default.createElement('meta', { name: 'robots', content: 'Index follow' }), _react2.default.createElement('meta', { name: 'title', content: 'Franco Rabglia Website' }), _react2.default.createElement('meta', { name: 'description', content: 'Franco Rabalgia Website' }), _react2.default.createElement('meta', { name: 'keywords', content: 'developer,javascript,fullstack,lead,senior,engineer' }), _react2.default.createElement('meta', { name: 'author', content: 'Franco Rabalgia' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Rubik:400,700', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/normalize.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/master.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/index.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/animate.css' }));
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MyDocument, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('html', null, this.setCSSHeaders(this.props.pathname), _react2.default.createElement('body', null, _react2.default.createElement('nav', { id: '__nav', className: 'animated fadeIn' }, _react2.default.createElement('div', { className: "button " + this.props.active.home }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', as: '/' }, 'HOME')), _react2.default.createElement('div', { className: "button " + this.props.active.contact }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/contact', as: '/contact' }, 'SAY HI!')), _react2.default.createElement('div', { className: "button " + this.props.active.goodbye }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/goodbye', as: '/goodbye' }, 'GOODBYE'))), _react2.default.createElement(_document.Main, { className: 'full-height' }), _react2.default.createElement(_document.NextScript, null)));
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