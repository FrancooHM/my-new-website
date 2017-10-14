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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);

        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('section', { className: 'main' }, _react2.default.createElement('span', { className: 'fluid-center' }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/index.css' })), _react2.default.createElement('h1', null, 'See my work on'), _react2.default.createElement('a', { href: 'https://www.github.com/francoohm', target: '_blank' }, _react2.default.createElement('h3', null, 'Github')), _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/francorabaglia/', target: '_blank' }, _react2.default.createElement('h3', null, 'Linkedin')), _react2.default.createElement('h1', null, 'Say me hi on'), _react2.default.createElement('a', { href: 'https://www.twitter.com/franco_rabaglia/', target: '_blank' }, _react2.default.createElement('h3', null, 'Twitter'))));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;