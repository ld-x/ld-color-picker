'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  margin-top: 0.6rem;\n  display: flex;\n  flex-wrap: wrap;\n  width: 245px;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  z-index: 100;\n  background-color: ', ';\n  box-shadow: 3px 3px 5px #BFBDBD;\n'], ['\n  position: absolute;\n  margin-top: 0.6rem;\n  display: flex;\n  flex-wrap: wrap;\n  width: 245px;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  z-index: 100;\n  background-color: ', ';\n  box-shadow: 3px 3px 5px #BFBDBD;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 2.5px;\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  font-size: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'], ['\n  margin: 2.5px;\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  font-size: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  color: black;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0.8);\n'], ['\n  cursor: pointer;\n  color: black;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0.8);\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  transform: scale(0.8);\n'], ['\n  transform: scale(0.8);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ColorPicker = require('./ColorPicker');

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.state = { showModal: false };
    return _this;
  }

  _createClass(_default, [{
    key: 'onColorButtonClick',
    value: function onColorButtonClick(e) {
      e.preventDefault();
      this.setState({ showModal: true });
    }
  }, {
    key: 'onCloseButtonClick',
    value: function onCloseButtonClick(e) {
      e.preventDefault();
      this.setState({ showModal: false });
    }
  }, {
    key: 'onColorChange',
    value: function onColorChange(color) {
      var _props = this.props,
          editorState = _props.editorState,
          onChange = _props.onChange;


      var currentStyle = editorState.getCurrentInlineStyle();
      if (!currentStyle.has(color)) {
        var safeName = color.replace('#', '');
        var newState = _draftJs.RichUtils.toggleInlineStyle(editorState, 'color-' + safeName);
        onChange(newState);
        this.setState({ showModal: false });
      }
    }
  }, {
    key: 'renderColorModal',
    value: function renderColorModal() {
      var _this2 = this;

      return _react2.default.createElement(
        ColorModal,
        { onClick: this.stopPropagation, className: 'ld-Color-modal', theme: this.props.theme },
        _react2.default.createElement(
          ColorCloseIcon,
          { onClick: this.onCloseButtonClick.bind(this), className: 'ld-Color-close-icon' },
          _react2.default.createElement(
            'svg',
            { width: '24', height: '24', viewBox: '0 0 24 24', className: 'ld-button-close' },
            _react2.default.createElement(
              'g',
              { fill: 'currentColor', fillRule: 'evenodd' },
              _react2.default.createElement('path', { d: 'M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' }),
              _react2.default.createElement('path', { d: 'M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' })
            )
          )
        ),
        _react2.default.createElement(_ColorPicker2.default, { onColorChange: function onColorChange(color) {
            return _this2.onColorChange(color);
          } })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var showModal = this.state.showModal;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          ColorIcon,
          { onClick: this.onColorButtonClick.bind(this), fill: 'currentColor', height: '24', viewBox: '0 0 24 24', width: '24', className: 'ld-button-Color' },
          _react2.default.createElement('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' }),
          _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'transparent' })
        ),
        showModal ? this.renderColorModal() : undefined
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;


var ColorModal = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.backgroundColor;
});

var Color = _styledComponents2.default.span(_templateObject2);

var ColorCloseIcon = _styledComponents2.default.span(_templateObject3);

var ColorIcon = _styledComponents2.default.svg(_templateObject4);