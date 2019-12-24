"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Hamburger(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isHamburger = _useState2[0],
      setIsHamburger = _useState2[1];

  var handleClick = function handleClick() {
    if (props.alsoRun) {
      props.alsoRun(!isHamburger);
    }

    setIsHamburger(!isHamburger);
  };

  var lineThickness = props.size / 12;
  var shiftLines = props.size / 2 - lineThickness;
  return _react.default.createElement("div", {
    style: {
      width: "".concat(props.size, "px"),
      height: "".concat(props.size, "px"),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      padding: "0"
    },
    onClick: handleClick
  }, _react.default.createElement("hr", {
    style: {
      margin: "0",
      border: "solid ".concat(lineThickness, "px"),
      borderRadius: "calc(5px + 5%)",
      borderColor: isHamburger ? props.colors[0] : props.colors[1],
      padding: "0",
      width: "100%",
      transform: isHamburger ? "none" : "translate(0, ".concat(shiftLines, "px) rotate(45deg)"),
      transformOrigin: "50% 50%",
      transition: "all ".concat(props.delay)
    }
  }), _react.default.createElement("hr", {
    style: {
      margin: "0",
      border: "solid ".concat(lineThickness, "px"),
      borderRadius: "calc(5px + 5%)",
      borderColor: isHamburger ? props.colors[0] : props.colors[1],
      padding: "0",
      width: isHamburger ? "100%" : "0",
      opacity: isHamburger ? "100%" : "0",
      transition: "all ".concat(props.delay)
    }
  }), _react.default.createElement("hr", {
    style: {
      margin: "0",
      border: "solid ".concat(lineThickness, "px"),
      borderRadius: "calc(5px + 5%)",
      borderColor: isHamburger ? props.colors[0] : props.colors[1],
      padding: "0",
      width: "100%",
      transform: isHamburger ? "none" : "translate(0, -".concat(shiftLines, "px) rotate(-45deg)"),
      transformOrigin: "50% 50%",
      transition: "all ".concat(props.delay)
    }
  }));
}

var _default = Hamburger;
exports.default = _default;

//# sourceMappingURL=hamburger.js.map