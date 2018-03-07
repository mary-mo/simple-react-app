import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #a5a5a5;
  color: #969696;
`;

class TextField extends Component {
  render() {
    return <Item {...this.props} />;
  }
}

export default TextField;
