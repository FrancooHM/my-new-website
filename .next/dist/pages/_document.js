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
        (0, _classCallCheck3.default)(this, MyDocument);

        return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
    }

    (0, _createClass3.default)(MyDocument, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('title', null, 'GENOSHA'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/normalize.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/master.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/animate.css' })), _react2.default.createElement('body', null, _react2.default.createElement('nav', null, _react2.default.createElement('div', { className: 'button' }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', as: '/' }, 'HOME')), _react2.default.createElement('div', { className: 'button' }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', as: '/about' }, 'ABOUT')), _react2.default.createElement('div', { className: 'button' }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/blinky', as: '/blinky' }, 'BLINKY'))), _react2.default.createElement(_document.Main, { className: 'full-height' }), _react2.default.createElement(_document.NextScript, null)));
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var req = _ref.req,
                renderPage = _ref.renderPage;

            var _renderPage = renderPage(),
                html = _renderPage.html;

            return req ? {
                host: req.headers['host'],
                html: html
            } : {
                host: navigator.host,
                html: html
            };
        }
    }]);

    return MyDocument;
}(_document2.default);

exports.default = MyDocument;