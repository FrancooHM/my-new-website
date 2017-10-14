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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).call.apply(_ref, [this].concat(args))), _this), _this.setHeaders = function (pathname) {
      if (pathname === "/goodbye") {
        return _react2.default.createElement(_document.Head, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, _react2.default.createElement('title', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, 'Goodbye | Franco Rabglia Website'), _react2.default.createElement('meta', { name: 'robots', content: 'Index follow', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }), _react2.default.createElement('meta', { name: 'title', content: 'Franco Rabglia Website', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }), _react2.default.createElement('meta', { name: 'description', content: 'Franco Rabalgia Website', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }), _react2.default.createElement('meta', { name: 'keywords', content: 'developer,javascript,fullstack,lead,senior,engineer', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }), _react2.default.createElement('meta', { name: 'author', content: 'Franco Rabalgia', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), _react2.default.createElement('link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Rubik:400,700', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/normalize.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/goodbye-master.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/index.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/animate.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }), _react2.default.createElement('script', { src: '/static/core.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }), _react2.default.createElement('script', { src: '/static/sw.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }));
      } else {
        return _react2.default.createElement(_document.Head, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, _react2.default.createElement('title', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, 'Hi | Franco Rabglia Website'), _react2.default.createElement('meta', { name: 'robots', content: 'Index follow', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }), _react2.default.createElement('meta', { name: 'title', content: 'Franco Rabglia Website', __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }), _react2.default.createElement('meta', { name: 'description', content: 'Franco Rabalgia Website', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }), _react2.default.createElement('meta', { name: 'keywords', content: 'developer,javascript,fullstack,lead,senior,engineer', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }), _react2.default.createElement('meta', { name: 'author', content: 'Franco Rabalgia', __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }), _react2.default.createElement('link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Rubik:400,700', rel: 'stylesheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/normalize.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/master.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/index.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/animate.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }), _react2.default.createElement('script', { src: '/static/core.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }), _react2.default.createElement('script', { src: '/static/sw.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 83
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
          lineNumber: 92
        }
      }, this.setHeaders(this.props.pathname), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('nav', { id: '__nav', className: 'animated fadeIn', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('div', { className: "button " + this.props.active.home, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', as: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'HOME'))), _react2.default.createElement('div', { className: "button " + this.props.active.contact, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/contact', as: '/contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'SAY HI!'))), _react2.default.createElement('div', { className: "button " + this.props.active.goodbye, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/goodbye', as: '/goodbye', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, 'GOODBYE')))), _react2.default.createElement(_document.Main, { className: 'full-height', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref2) {
      var pathname = _ref2.pathname,
          renderPage = _ref2.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

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
        head: head,
        errorHtml: errorHtml,
        chunks: chunks,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIkxpbmsiLCJSb3V0ZXIiLCJNeURvY3VtZW50Iiwic2V0SGVhZGVycyIsInBhdGhuYW1lIiwicHJvcHMiLCJhY3RpdmUiLCJob21lIiwiY29udGFjdCIsImdvb2RieWUiLCJyZW5kZXJQYWdlIiwiaHRtbCIsImhlYWQiLCJlcnJvckh0bWwiLCJjaHVua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVyxBQUFNLEFBQU07Ozs7QUFDOUIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJLEFBRWM7Ozs7Ozs7Ozs7Ozs7O29OLEFBc0NuQixhQUFhLFVBQUEsQUFBQyxVQUFhLEFBQ3pCO1VBQUksYUFBSixBQUFpQixZQUFZLEFBQzNCOytCQUNFLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0U7QUFERjtBQUFBLFNBQUEsa0JBQ0UsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBREYsQUFDRSxBQUNBLDZFQUFNLE1BQU4sQUFBVyxVQUFTLFNBQXBCLEFBQTRCO3NCQUE1Qjt3QkFGRixBQUVFLEFBQ0E7QUFEQTtvREFDTSxNQUFOLEFBQVcsU0FBUSxTQUFuQixBQUEyQjtzQkFBM0I7d0JBSEYsQUFHRSxBQUNBO0FBREE7b0RBQ00sTUFBTixBQUFXLGVBQWMsU0FBekIsQUFBaUM7c0JBQWpDO3dCQUpGLEFBSUUsQUFDQTtBQURBO29EQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO3NCQUE5Qjt3QkFMRixBQUtFLEFBQ0E7QUFEQTtvREFDTSxNQUFOLEFBQVcsVUFBUyxTQUFwQixBQUE0QjtzQkFBNUI7d0JBTkYsQUFNRSxBQUNBO0FBREE7b0RBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7c0JBQTlCO3dCQVBGLEFBT0UsQUFDQTtBQURBO29EQUNNLEtBQU4sQUFBVSxp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QUpPO0FBQUE7Ozs7MkNBMUd1QztVQUF2QixBQUF1QixpQkFBdkIsQUFBdUI7VUFBYixBQUFhLG1CQUFiLEFBQWE7O3dCQUFBLEFBQ0w7VUFESyxBQUN0QyxtQkFEc0MsQUFDdEM7VUFEc0MsQUFDaEMsbUJBRGdDLEFBQ2hDO1VBRGdDLEFBQzFCLHdCQUQwQixBQUMxQjtVQUQwQixBQUNmLHFCQURlLEFBQ2YsQUFDOUI7O1VBQUksT0FBSixBQUFXLEFBQ1g7VUFBSSxVQUFKLEFBQWMsQUFDZDtVQUFJLFVBQUosQUFBYyxBQUVkOztjQUFBLEFBQVEsQUFDTjthQUFBLEFBQUssQUFDSDtpQkFBQSxBQUFPLEFBQ1A7QUFFRjs7YUFBQSxBQUFLLEFBQ0g7b0JBQUEsQUFBVSxBQUNWO0FBRUY7O2FBQUEsQUFBSyxBQUNIO29CQUFBLEFBQVUsQUFDVjtBQUNGO0FBQ0U7aUJBYkosQUFhSSxBQUFPLEFBR1g7Ozs7Y0FBTyxBQUVMO2NBRkssQUFHTDttQkFISyxBQUlMO2dCQUpLLEFBS0w7O2dCQUFRLEFBRU47bUJBRk0sQUFHTjttQkFSRyxBQUtHLEFBS1I7QUFMUSxBQUNOO2tCQU5KLEFBQU8sQUFZUjtBQVpRLEFBQ0w7Ozs7O0FBekJrQyxBOztrQkFBbkIsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyYW5jb2FndXN0aW5yYWJhZ2xpYS9EZXZlbG9wL05leHQgYXBwcy9teS1uZXctd2Vic2l0ZSJ9