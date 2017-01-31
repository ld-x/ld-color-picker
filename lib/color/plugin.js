'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ColorButton = require('./ColorButton');

var _ColorButton2 = _interopRequireDefault(_ColorButton);

var _ColorBlock = require('./ColorBlock');

var _ColorBlock2 = _interopRequireDefault(_ColorBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

exports.default = {
  type: 'color-picker',
  button: _ColorButton2.default,
  block: _ColorBlock2.default
};