import React, { Component } from 'react';
import styled from 'styled-components';

import TextField from './TextField';
import Dropdown from './Dropdown';
import Button from './Button';
import Modal from './Modal';

const StyledTextField = styled(TextField)`
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

class Form extends Component {
  state = {
    openModal: false,
    username: '',
    email: '',
    gender: '',
  };

  handleOpen = () => {
    this.setState({
      openModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      openModal: false,
    });
  };

  handleTextChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleGenderSelect = e => {
    this.setState({
      gender: e.target.value,
    });
  };

  render() {
    const { openModal, username, email, gender } = this.state;

    return (
      <div>
        <StyledTextField
          type="text"
          placeholder="username"
          name="username"
          onChange={this.handleTextChange}
          value={username}
        />
        <StyledTextField
          type="text"
          placeholder="email"
          name="email"
          onChange={this.handleTextChange}
          value={email}
        />
        <Dropdown
          options={[
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
            { label: 'unspecified', value: 'unspecified' },
          ]}
          placeholder="gender"
          onChange={this.handleGenderSelect}
          value={gender}
        />
        <ButtonContainer>
          <Button
            type="submit"
            label="Show Results"
            onClick={this.handleOpen}
            disabled={!username || !email || !gender}
          />
        </ButtonContainer>
        {openModal && (
          <Modal onClose={this.handleClose}>
            <div>
              Username is: <b>{username}</b>
            </div>
            <div>
              Email is: <b>{email}</b>
            </div>
            <div>
              Gender is: <b>{gender}</b>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Form;
