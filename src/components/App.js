import React, { Component } from 'react';
import styled from 'styled-components';

import Tabs from './Tabs';
import List from './List';
import Form from './Form';

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    const tabs = [
      {
        label: 'List',
        component: <List />,
      },
      {
        label: 'Form',
        component: <Form />,
      },
    ];
    return (
      <Container>
        <Tabs tabs={tabs} />
      </Container>
    );
  }
}

export default App;
