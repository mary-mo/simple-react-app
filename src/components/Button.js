import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Item = styled.button`
  background-color: #275293;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  text-transform: uppercase;
  padding: 15px 50px;
  margin: 35px 0;
  cursor: pointer;
  ${props =>
    props.disabled &&
    css`
      background-color: #ccc;
      cursor: not-allowed;
    `};
`;

class Button extends Component {
  render() {
    return <Item {...this.props}>{this.props.label}</Item>;
  }
}

export default Button;
