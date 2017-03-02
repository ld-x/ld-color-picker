/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import styled from 'styled-components'

export default class extends Component {
  render () {
    return (
      <ColorIcon fill='currentColor' height='24' viewBox='0 0 24 24' width='24'>
        <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
        <path d='M0 0h24v24H0z' fill='transparent' />
      </ColorIcon>
    )
  }
}

const ColorIcon = styled.svg`
  transform: scale(0.8);
`
