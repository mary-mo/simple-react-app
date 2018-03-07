import React, { Component } from 'react';
import styled from 'styled-components';

const SelectField = styled.select`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #a5a5a5;
  color: #969696;
  padding: 10px;
`;

class Dropdown extends Component {
  render() {
    return (
      <SelectField {...this.props}>
        {this.props.placeholder && (
          <option disabled value={''}>
            {this.props.placeholder}
          </option>
        )}
        {this.props.options.map(option => (
          <option value={option.value} key={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </SelectField>
    );
  }
}

export default Dropdown;
