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
            lineNumber: 50
          }
        }, _react2.default.createElement('title', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, 'Goodbye | Franco Rabglia Website'), _react2.default.createElement('meta', { name: 'robots', content: 'Index follow', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }), _react2.default.createElement('meta', { name: 'title', content: 'Franco Rabglia Website', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }), _react2.default.createElement('meta', { name: 'description', content: 'Franco Rabalgia Website', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), _react2.default.createElement('meta', { name: 'keywords', content: 'developer,javascript,fullstack,lead,senior,engineer', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }), _react2.default.createElement('meta', { name: 'author', content: 'Franco Rabalgia', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }), _react2.default.createElement('meta', { name: 'theme-color', content: '#000000', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.json', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico', type: 'image/x-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }), _react2.default.createElement('link', { rel: 'icon', href: '/static/favicon.ico', type: 'image/x-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/styles/normalize.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/styles/goodbye-master.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/styles/index.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/styles/animate.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }));
      } else {
        return _react2.default.createElement(_document.Head, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, _react2.default.createElement('title', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, 'Hi | Franco Rabglia Website'), _react2.default.createElement('meta', { name: 'robots', content: 'Index follow', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }), _react2.default.createElement('meta', { name: 'title', content: 'Franco Rabglia Website', __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }), _react2.default.createElement('meta', { name: 'description', content: 'Franco Rabalgia Website', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), _react2.default.createElement('meta', { name: 'keywords', content: 'developer,javascript,fullstack,lead,senior,engineer', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }), _react2.default.createElement('meta', { name: 'author', content: 'Franco Rabalgia', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }), _react2.default.createElement('meta', { name: 'theme-color', content: '#000000', __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.json', __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico', type: 'image/x-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }), _react2.default.createElement('link', { rel: 'icon', href: '/static/favicon.ico', type: 'image/x-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/styles/normalize.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/styles/master.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/styles/index.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/styles/animate.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }));
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, this.setHeaders(this.props.pathname), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('nav', { id: '__nav', className: 'animated fadeIn', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('div', { className: "button " + this.props.active.home, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', as: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'HOME'))), _react2.default.createElement('div', { className: "button " + this.props.active.contact, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/contact', as: '/contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'SAY HI!'))), _react2.default.createElement('div', { className: "button " + this.props.active.goodbye, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/goodbye', as: '/goodbye', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'GOODBYE')))), _react2.default.createElement(_document.Main, { className: 'full-height', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement('script', { src: '/core.js', defer: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react2.default.createElement('script', { src: '/sw.js', defer: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Rubik:400,700', rel: 'stylesheet', lazyload: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
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
        case "/":
          home = "active";
          break;

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
          home = "active";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIkxpbmsiLCJSb3V0ZXIiLCJNeURvY3VtZW50Iiwic2V0SGVhZGVycyIsInBhdGhuYW1lIiwicHJvcHMiLCJhY3RpdmUiLCJob21lIiwiY29udGFjdCIsImdvb2RieWUiLCJyZW5kZXJQYWdlIiwiaHRtbCIsImhlYWQiLCJlcnJvckh0bWwiLCJjaHVua3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVyxBQUFNLEFBQU07Ozs7QUFDOUIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVjLEE7Ozs7Ozs7Ozs7Ozs7O29OLEFBMENuQixhQUFhLFVBQUEsQUFBQyxVQUFhLEFBQ3pCO1VBQUksYUFBSixBQUFpQixZQUFZLEFBQzNCOytCQUNFLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0U7QUFERjtBQUFBLFNBQUEsa0JBQ0UsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBREYsQUFDRSxBQUNBLDZFQUFNLE1BQU4sQUFBVyxVQUFTLFNBQXBCLEFBQTRCO3NCQUE1Qjt3QkFGRixBQUVFLEFBQ0E7QUFEQTtvREFDTSxNQUFOLEFBQVcsU0FBUSxTQUFuQixBQUEyQjtzQkFBM0I7d0JBSEYsQUFHRSxBQUNBO0FBREE7b0RBQ00sTUFBTixBQUFXLGVBQWMsU0FBekIsQUFBaUM7c0JBQWpDO3dCQUpGLEFBSUUsQUFDQTtBQURBO29EQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO3NCQUE5Qjt3QkFMRixBQUtFLEFBQ0E7QUFEQTtvREFDTSxNQUFOLEFBQVcsVUFBUyxTQUFwQixBQUE0QjtzQkFBNUI7d0JBTkYsQUFNRSxBQUNBO0FBREE7b0RBQ00sTUFBTixBQUFXLGVBQWMsU0FBekIsQUFBaUM7c0JBQWpDO3dCQVBGLEFBT0UsQUFDQTtBQURBO29EQUNNLE1BQU4sQUFBVyxZ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RSxBQUNBO0FBREE7b0RBQ1EsS0FBUixBQUFZLFVBQVMsT0FBckI7b0JBQUE7c0JBckJGLEFBcUJFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcseURBQXdELEtBQW5FLEFBQXVFLGNBQWEsVUFBcEY7b0JBQUE7c0JBekJOLEFBQ0UsQUFFRSxBQXNCRSxBQUlQO0FBSk87Ozs7OzJDQS9HdUM7VUFBdkIsQUFBdUIsaUJBQXZCLEFBQXVCO1VBQWIsQUFBYSxtQkFBYixBQUFhOzt3QkFBQSxBQUNMO1VBREssQUFDdEMsbUJBRHNDLEFBQ3RDO1VBRHNDLEFBQ2hDLG1CQURnQyxBQUNoQztVQURnQyxBQUMxQix3QkFEMEIsQUFDMUI7VUFEMEIsQUFDZixxQkFEZSxBQUNmLEFBQzlCOztVQUFJLE9BQUosQUFBVyxBQUNYO1VBQUksVUFBSixBQUFjLEFBQ2Q7VUFBSSxVQUFKLEFBQWMsQUFFZDs7Y0FBQSxBQUFRLEFBQ047YUFBQSxBQUFLLEFBQ0g7aUJBQUEsQUFBTyxBQUNQO0FBRUY7O2FBQUEsQUFBSyxBQUNIO2lCQUFBLEFBQU8sQUFDUDtBQUVGOzthQUFBLEFBQUssQUFDSDtvQkFBQSxBQUFVLEFBQ1Y7QUFFRjs7YUFBQSxBQUFLLEFBQ0g7b0JBQUEsQUFBVSxBQUNWO0FBQ0Y7QUFDRTtpQkFqQkosQUFpQkksQUFBTyxBQUdYOzs7O2NBQU8sQUFFTDtjQUZLLEFBR0w7bUJBSEssQUFJTDtnQkFKSyxBQUtMOztnQkFBUSxBQUVOO21CQUZNLEFBR047bUJBUkcsQUFLRyxBQUtSO0FBTFEsQUFDTjtrQkFOSixBQUFPLEFBWVI7QUFaUSxBQUNMOzs7OztBQTdCa0MsQTs7a0JBQW5CLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9mcmFuY29hZ3VzdGlucmFiYWdsaWEvRGV2ZWxvcC9OZXh0IGFwcHMvbXktbmV3LXdlYnNpdGUifQ==