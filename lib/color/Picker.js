'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  margin-top: 1rem;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background-color: inherit;\n  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);\n  margin-top: -3rem;\n  display: flex;\n  height: 15rem;\n  padding: 1.5rem;\n  padding-top: 1.8rem;\n  z-index: 100;\n'], ['\n  position: absolute;\n  margin-top: 1rem;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background-color: inherit;\n  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);\n  margin-top: -3rem;\n  display: flex;\n  height: 15rem;\n  padding: 1.5rem;\n  padding-top: 1.8rem;\n  z-index: 100;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  width: 1rem;\n  flex: 1 0 10%;\n  margin: 0.1rem;\n  border-radius: 2px;\n  background-color: ', ';\n  border-color: ', ';\n'], ['\n  cursor: pointer;\n  width: 1rem;\n  flex: 1 0 10%;\n  margin: 0.1rem;\n  border-radius: 2px;\n  background-color: ', ';\n  border-color: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0.2rem;\n  right: 0.1rem;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  color: #ccc;\n\n  &:hover {\n    color: #9d1d20;\n  }\n'], ['\n  position: absolute;\n  top: 0.2rem;\n  right: 0.1rem;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  color: #ccc;\n\n  &:hover {\n    color: #9d1d20;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: block;\n  margin: 0 0 0 auto;\n'], ['\n  display: block;\n  margin: 0 0 0 auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('./colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'handleColorChange',
    value: function handleColorChange(color) {
      this.props.onSelected(color);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        ColorPickerWrapper,
        null,
        _react2.default.createElement(
          CloseWrapper,
          { className: 'ld-emoji-close-button', onClick: this.props.closeModal },
          _react2.default.createElement(
            Close,
            { width: '24', height: '24', viewBox: '0 0 24 24', className: 'ld-button-close' },
            _react2.default.createElement(
              'g',
              { fill: 'currentColor', fillRule: 'evenodd' },
              _react2.default.createElement('path', { d: 'M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' }),
              _react2.default.createElement('path', { d: 'M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' })
            )
          )
        ),
        _react2.default.createElement(
          ColorWrapper,
          null,
          _colors.colors.map(function (c, i) {
            return _react2.default.createElement(ColorSpan, { key: i, color: c, onClick: function onClick() {
                return _this2.handleColorChange(c);
              } });
          })
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;


var ColorPickerWrapper = _styledComponents2.default.div(_templateObject);

var ColorWrapper = _styledComponents2.default.div(_templateObject2);

var ColorSpan = _styledComponents2.default.span(_templateObject3, function (props) {
  return props.color;
}, function (props) {
  return props.color;
});

var CloseWrapper = _styledComponents2.default.div(_templateObject4);

var Close = _styledComponents2.default.svg(_templateObject5);