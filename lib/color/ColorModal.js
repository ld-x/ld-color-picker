'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  background-color: inherit;\n'], ['\n  position: relative;\n  background-color: inherit;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _draftJs = require('draft-js');

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
    key: 'setColor',
    value: function setColor(color) {
      var _props = this.props,
          editorState = _props.editorState,
          onChange = _props.onChange;


      var currentStyle = editorState.getCurrentInlineStyle();
      if (!currentStyle.has(color)) {
        var safeName = color.replace('#', '');
        var newState = _draftJs.RichUtils.toggleInlineStyle(editorState, 'color-' + safeName);
        onChange(newState);
        this.props.closeModal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Wrapper,
        { style: { width: '350px', left: '0px' } },
        _react2.default.createElement(_Picker2.default, { onSelected: this.setColor.bind(this), closeModal: this.props.closeModal })
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;


var Wrapper = _styledComponents2.default.div(_templateObject);