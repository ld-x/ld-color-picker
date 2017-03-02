import React, { Component } from 'react'
import styled from 'styled-components'
import {colors} from './colors'

export default class extends Component {
  handleColorChange (color) {
    this.props.onSelected(color)
  }

  render() {
    return (
      <ColorPickerWrapper>
        <CloseWrapper className='ld-emoji-close-button' onClick={this.props.closeModal}>
          <Close width='24' height='24' viewBox='0 0 24 24' className='ld-button-close'>
            <g fill='currentColor' fillRule='evenodd'>
              <path d='M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' />
              <path d='M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' />
            </g>
          </Close>
        </CloseWrapper>

        <ColorWrapper>
          {
            colors.map((c, i) => {
              return <ColorSpan key={i} color={c} onClick={() => this.handleColorChange(c)} />
            })
          }
        </ColorWrapper>
      </ColorPickerWrapper>
    )
  }
}


const ColorPickerWrapper = styled.div`
  position: absolute;
  margin-top: 1rem;
  border: 1px solid #F1F1F1;
  border-radius: 2px;
  background-color: inherit;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);
  margin-top: -3rem;
  display: flex;
  height: 14rem;
  padding: 1rem;
  z-index: 100;
`

const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.8rem;
`

const ColorSpan = styled.span`
  cursor: pointer;
  width: 1rem;
  flex: 1 0 10%;
  margin: 0.1rem;
  border-radius: 2px;
  background-color: ${props => props.color};
  border-color: ${props => props.color};
`

const CloseWrapper = styled.div`
  padding: 0;
  cursor: pointer;
  border: 0;
  background: transparent;
  color: #ccc;

  &:hover {
    color: #9d1d20;
  }
`

const Close = styled.svg`
  display: block;
  margin: 0 0 0 auto;
`
