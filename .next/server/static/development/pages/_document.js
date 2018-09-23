module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/francoagustinrabaglia/Develop/Next apps/my-new-website/pages/_document.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MyDocument);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyDocument)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setHeaders", function (pathname) {
      if (pathname === "/goodbye") {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "Goodbye | Franco Rabglia Website"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "robots",
          content: "Index follow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "title",
          content: "Franco Rabglia Website",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "description",
          content: "Franco Rabalgia Website",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "keywords",
          content: "developer,javascript,fullstack,lead,senior,engineer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "author",
          content: "Franco Rabalgia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "theme-color",
          content: "#000000",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "manifest",
          href: "/static/manifest.json",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "shortcut icon",
          href: "/static/favicon.ico",
          type: "image/x-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "icon",
          href: "/static/favicon.ico",
          type: "image/x-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "/static/styles/normalize.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "/static/styles/goodbye-master.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "/static/styles/index.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "/static/styles/animate.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, "Hi | Franco Rabglia Website"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "robots",
          content: "Index follow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "title",
          content: "Franco Rabglia Website",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "description",
          content: "Franco Rabalgia Website",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "keywords",
          content: "developer,javascript,fullstack,lead,senior,engineer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "author",
          content: "Franco Rabalgia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "theme-color",
          content: "#000000",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "manifest",
          href: "/static/manifest.json",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "shortcut icon",
          href: "/static/favicon.ico",
          type: "image/x-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "icon",
          href: "/static/favicon.ico",
          type: "image/x-icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "/static/styles/normalize.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "/static/styles/master.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "/static/styles/index.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "stylesheet",
          type: "text/css",
          href: "/static/styles/animate.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }));
      }
    });

    return _this;
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
        lang: "en",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, this.setHeaders(this.props.pathname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        id: "__nav",
        className: "animated fadeIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button " + this.props.active.home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/",
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "HOME"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button " + this.props.active.contact,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/contact",
        as: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "SAY HI!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button " + this.props.active.goodbye,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/goodbye",
        as: "/goodbye",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "GOODBYE")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
        className: "full-height",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/core.js",
        defer: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/sw.js",
        defer: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Rubik:400,700",
        rel: "stylesheet",
        lazyload: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var pathname = _ref.pathname,
          renderPage = _ref.renderPage;

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
}(next_document__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./pages/_document.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map