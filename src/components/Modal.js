import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  background-color: rgba(250, 250, 250, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 350px;
  border: 1px solid #a5a5a5;
  background-color: #fff;
  color: #969696;
  font-size: 18px;
  padding: 30px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

class Modal extends Component {
  render() {
    return (
      <Container>
        <Content>
          {this.props.children}
          <ButtonContainer>
            <Button type="button" label="Close" onClick={this.props.onClose} />
          </ButtonContainer>
        </Content>
      </Container>
    );
  }
}

export default Modal;
