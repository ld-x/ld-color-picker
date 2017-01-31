import React, { Component } from 'react'
import styled from 'styled-components'
import {colors} from './colors'

export default class extends Component {
  handleColorChange (e) {
    let color = e.target.getAttribute('color')
    this.props.onColorChange(color)
  }

  render() {
    return (
      <Wrapper>
        <ColorPickerWrapper>
          <ColorWrapper>
            {
              colors.map((c, i) => {
                return <ColorSpan key={i} color={c} onClick={::this.handleColorChange} />
              })
            }
          </ColorWrapper>
        </ColorPickerWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 1rem;
`

const ColorPickerWrapper = styled.div`
  display: flex;
  height: 14rem;
  padding: 1rem;
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
