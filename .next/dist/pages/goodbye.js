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

var _fx = require('../utils/fx.2');

var _fx2 = _interopRequireDefault(_fx);

var _onWindowResize = require('../utils/onWindowResize');

var _onWindowResize2 = _interopRequireDefault(_onWindowResize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/goodbye.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.onWindowResize = (0, _onWindowResize2.default)(this, window);
      this.fx = (0, _fx2.default)(this, window, document);
      this.init();
    }
  }, {
    key: 'init',
    value: function init() {
      this.fx();
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet',
        type: 'text/css',
        href: '/static/styles/goodbye.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), _react2.default.createElement('div', { id: 'webgl-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, ' '), _react2.default.createElement('div', { className: 'magical-text-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('h1', { className: 'animated fadeIn magical-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, ' Get things done, make things better. ')));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dvb2RieWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiZngiLCJvbldpbmRvd1Jlc2l6ZSIsInByb3BzIiwid2luZG93IiwiZG9jdW1lbnQiLCJpbml0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFvQjs7Ozs7Ozs7OztrQ0FJekI7O2tCQUFBLEFBQVksT0FBTzt3Q0FBQTs7aUlBQUEsQUFDWCxBQUNQOzs7Ozt3Q0FFbUIsQUFDbEI7V0FBQSxBQUFLLGlCQUFpQiw4QkFBQSxBQUFlLE1BQXJDLEFBQXNCLEFBQXFCLEFBQzNDO1dBQUEsQUFBSyxLQUFLLGtCQUFBLEFBQUcsTUFBSCxBQUFTLFFBQW5CLEFBQVUsQUFBaUIsQUFDM0I7V0FBQSxBQUFLLEFBQ047Ozs7MkJBRU0sQUFDTDtXQUFBLEFBQUssQUFDTjs7Ozs2QkFFUSxBQUVQOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLEtBQU4sQUFBVSxBQUNSO2NBREYsQUFDTyxBQUNMO2NBRkYsQUFFTztvQkFGUDtzQkFGSixBQUNFLEFBQ0UsQUFJRjtBQUpFOzJCQUlGLGNBQUEsU0FBSyxJQUFMLEFBQVE7b0JBQVI7c0JBQUE7QUFBQTtTQU5GLEFBTUUsQUFDQSxzQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FUTixBQUNFLEFBT0UsQUFDRSxBQUlQOzs7OztFQS9CMEIsZ0JBQU0sQSIsImZpbGUiOiJnb29kYnllLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mcmFuY29hZ3VzdGlucmFiYWdsaWEvRGV2ZWxvcC9OZXh0IGFwcHMvbXktbmV3LXdlYnNpdGUifQ==