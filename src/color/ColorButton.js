/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import ColorPicker from './ColorPicker'
import {RichUtils} from 'draft-js'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = { showModal: false }
  }

  onColorButtonClick (e) {
    e.preventDefault()
    this.setState({ showModal: true })
  }

  onCloseButtonClick (e) {
    e.preventDefault()
    this.setState({ showModal: false })
  }

  onColorChange (color) {
    const { editorState, onChange } = this.props

    const currentStyle = editorState.getCurrentInlineStyle()
    if (!currentStyle.has(color)) {
      console.log(color)
      const newState = RichUtils.toggleInlineStyle(editorState, `color-${color}`)
      onChange(newState)
      this.setState({ showModal: false })
    }
  }

  renderColorModal() {
    return (
      <ColorModal onClick={this.stopPropagation} className='ld-Color-modal'>
        <ColorCloseIcon onClick={::this.onCloseButtonClick} className='ld-Color-close-icon'>
          <svg width='24' height='24' viewBox='0 0 24 24' className='ld-button-close'>
            <g fill='currentColor' fillRule='evenodd'>
              <path d='M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' />
              <path d='M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' />
            </g>
          </svg>
        </ColorCloseIcon>
        <ColorPicker onColorChange={(color) => this.onColorChange(color)}/>
      </ColorModal>
    )
  }

  render () {
    const { showModal } = this.state

    return (
      <div>
        <ColorIcon onClick={::this.onColorButtonClick} fill='currentColor' height='24' viewBox='0 0 24 24' width='24' className='ld-button-Color'>
          <path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' />
          <path d='M0 0h24v24H0z' fill='transparent' />
        </ColorIcon>
        {showModal ? this.renderColorModal() : undefined}
      </div>
    )
  }
}

const ColorModal = styled.div`
  position: absolute;
  left: 4rem;
  margin-top: -2.4rem;
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  border: 1px solid #F1F1F1;
  border-radius: 2px;
  z-index: 100;
  background: white;
  box-shadow: 3px 3px 5px #BFBDBD;
`

const Color = styled.span`
  margin: 2.5px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColorCloseIcon = styled.span`
  cursor: pointer;
  color: black;
  position: absolute;
  right: 0;
  top: 0;
  transform: scale(0.8);
`

const ColorIcon = styled.svg`
  transform: scale(0.8);
`
