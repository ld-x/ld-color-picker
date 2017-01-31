/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import { EditorBlock } from 'draft-js'

/* TODO: This is just a placeholder */
export default class ImageBlock extends Component {
  render () {
    return (
      <EditorBlock {...this.props} />
    )
  }
}
