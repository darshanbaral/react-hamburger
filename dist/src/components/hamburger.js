"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Hamburger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hamburger, _React$Component);

  function Hamburger() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Hamburger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Hamburger)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isHamburger: true
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      if (_this.props.alsoRun) {
        _this.props.alsoRun(!_this.state.isHamburger);
      }

      _this.setState({
        isHamburger: !_this.state.isHamburger
      });
    });

    return _this;
  }

  _createClass(Hamburger, [{
    key: "render",
    value: function render() {
      var delay = this.props.delay ? this.props.delay : "0.25s";
      var colors = this.props.colors ? this.props.colors : {
        hamburger: "black",
        cross: "black"
      };
      var size = this.props.size ? this.props.size : 25;
      var lineThickness = size / 12;
      var shiftLines = size / 2 - lineThickness;
      return _react.default.createElement("div", {
        style: {
          width: "".concat(size, "px"),
          height: "".concat(size, "px"),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          padding: "0"
        },
        onClick: this.handleClick
      }, _react.default.createElement("hr", {
        style: {
          margin: "0",
          border: "solid ".concat(lineThickness, "px"),
          borderRadius: "calc(5px + 5%)",
          backgroundColor: this.state.isHamburger ? colors.hamburger : colors.cross,
          borderColor: this.state.isHamburger ? colors.hamburger : colors.cross,
          padding: "0",
          width: "100%",
          transform: this.state.isHamburger ? "none" : "translate(0, ".concat(shiftLines, "px) rotate(45deg)"),
          transformOrigin: "50% 50%",
          transition: "all ".concat(delay)
        }
      }), _react.default.createElement("hr", {
        style: {
          margin: "0",
          border: "solid ".concat(lineThickness, "px"),
          borderRadius: "calc(5px + 5%)",
          borderColor: colors.hamburger,
          backgroundColor: colors.hamburger,
          padding: "0",
          width: this.state.isHamburger ? "100%" : "0",
          opacity: this.state.isHamburger ? "1" : "0",
          transition: "all ".concat(delay)
        }
      }), _react.default.createElement("hr", {
        style: {
          margin: "0",
          border: "solid ".concat(lineThickness, "px"),
          borderRadius: "calc(5px + 5%)",
          backgroundColor: this.state.isHamburger ? colors.hamburger : colors.cross,
          borderColor: this.state.isHamburger ? colors.hamburger : colors.cross,
          padding: "0",
          width: "100%",
          transform: this.state.isHamburger ? "none" : "translate(0, -".concat(shiftLines, "px) rotate(-45deg)"),
          transformOrigin: "50% 50%",
          transition: "all ".concat(delay)
        }
      }));
    }
  }]);

  return Hamburger;
}(_react.default.Component);

var _default = Hamburger;
exports.default = _default;

//# sourceMappingURL=hamburger.js.map