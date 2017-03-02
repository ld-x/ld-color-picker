import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Picker from './Picker'
import {RichUtils} from 'draft-js'

export default class extends Component {
  setColor (color) {
    const { editorState, onChange } = this.props

    const currentStyle = editorState.getCurrentInlineStyle()
    if (!currentStyle.has(color)) {
      const safeName = color.replace('#', '');
      const newState = RichUtils.toggleInlineStyle(editorState, `color-${safeName}`);
      onChange(newState)
      this.props.closeModal()
    }
  }

  render () {
    return (
      <Wrapper style={{ width: `350px`, left: `0px` }}>
        <Picker onSelected={::this.setColor} closeModal={this.props.closeModal} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  background-color: inherit;
`
