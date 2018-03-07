import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Content = styled.div`
  padding: 10px;
  box-sizing: border-box;
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border: 1px solid #000;
`;

const Text = styled.div`
  color: #636363;
  line-height: 1.4;
  ${props =>
    !props.main &&
    css`
      font-size: 12px;
      line-height: 1.2;
    `};
`;

class ListItem extends Component {
  render() {
    const item = this.props.item;

    return (
      <Content key={item.name}>
        <Image src={item.image} />
        <div>
          <Text main>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>{`${item.age} years old`}</Text>
        </div>
      </Content>
    );
  }
}

export default ListItem;
