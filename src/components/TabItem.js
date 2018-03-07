import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Element = styled.li`
  flex: 1;
  height: 50px;
  background-color: #e8e8e8;
  list-style: none;
  text-transform: uppercase;
  color: #a5a5a5;
  font-size: 20px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  ${props =>
    props.active
      ? css`
          background-color: #275293;
          color: #fff;
        `
      : css`
          &:hover {
            cursor: pointer;
            background-color: #a5a5a5;
            color: #fff;
          }
        `};
`;

const Link = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 50px;
`;

class TabItem extends Component {
  handleClick = () => {
    this.props.onTabChange(this.props.index);
  };

  render() {
    return (
      <Element active={this.props.active}>
        <Link onClick={this.handleClick}>{this.props.label}</Link>
      </Element>
    );
  }
}

export default TabItem;
