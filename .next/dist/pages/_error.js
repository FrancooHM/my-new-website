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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/_error.js?entry';


var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);

    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, this.props.statusCode ? 'An error ' + this.props.statusCode + ' occurred on server' : 'An error occurred on client');
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          jsonPageRes = _ref.jsonPageRes;

      var statusCode = res ? res.statusCode : jsonPageRes ? jsonPageRes.status : null;
      return { statusCode: statusCode };
    }
  }]);

  return Error;
}(_react2.default.Component);

exports.default = Error;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkVycm9yIiwicHJvcHMiLCJzdGF0dXNDb2RlIiwicmVzIiwianNvblBhZ2VSZXMiLCJzdGF0dXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0ksQUFDYzs7Ozs7Ozs7Ozs7NkJBTVQsQUFDUjs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLE9BQ0UsQUFBSyxNQUFMLEFBQVcsMkJBQ0csS0FBQSxBQUFLLE1BRG5CLEFBQ3lCLHFDQUg3QixBQUNFLEFBR0ksQUFHUDs7OzswQ0FiNkM7VUFBcEIsQUFBb0IsV0FBcEIsQUFBb0I7VUFBZixBQUFlLG1CQUFmLEFBQWUsQUFDNUM7O1VBQU0sYUFBYSxNQUFNLElBQU4sQUFBVSxhQUFjLGNBQWMsWUFBZCxBQUEwQixTQUFyRSxBQUE4RSxBQUM5RTthQUFPLEVBQUUsWUFBVCxBQUFPLEFBQ1I7Ozs7O0VBSmdDLGdCQUFNLEE7O2tCQUFwQixBIiwiZmlsZSI6Il9lcnJvci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZnJhbmNvYWd1c3RpbnJhYmFnbGlhL0RldmVsb3AvTmV4dCBhcHBzL215LW5ldy13ZWJzaXRlIn0=