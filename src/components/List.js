import React, { Component } from 'react';
import styled from 'styled-components';

import TextField from './TextField';
import ListItem from './ListItem';
import userPic from '../images/userpic.svg';

const StyledTextField = styled(TextField)`
  margin-bottom: 15px;
`;

const Text = styled.div`
  text-align: center;
  color: #a5a5a5;
`;

class List extends Component {
  state = {
    search: '',
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;

    const items = [
      {
        image: userPic,
        name: 'John Doe',
        description: 'Graphic Designer',
        age: 25,
      },
      {
        image: userPic,
        name: 'Merrill Trost',
        description: 'UI/UX Designer',
        age: 32,
      },
      {
        image: userPic,
        name: 'Sheri Lennox',
        description: 'React Engineer',
        age: 18,
      },
      {
        image: userPic,
        name: 'Emmy Junker',
        description: 'Web Developer',
        age: 44,
      },
    ];

    const filteredItems = items.filter(
      item =>
        item.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(search.toLowerCase().trim()) ||
        item.age.toString() === search.trim()
    );

    return (
      <div>
        <StyledTextField type="text" placeholder="Enter keyword..." onChange={this.handleSearch} />
        {filteredItems.length===0 && <Text>No Results...</Text>}
        {filteredItems.map(item => (
          <ListItem item={item} key={item.name}/>
        ))}
      </div>
    );
  }
}

export default List;
