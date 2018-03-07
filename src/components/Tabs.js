import React, { Component } from 'react';
import styled from 'styled-components';

import TabItem from './TabItem';

const TabsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  border: 0.5px solid #a5a5a5;
  padding: 10px;
`;

class Tabs extends Component {
  state = { activeTabIndex: 0 };

  handleTabChange = activeTabIndex => {
    this.setState({ activeTabIndex });
  };

  render() {
    const activeTab = this.props.tabs[this.state.activeTabIndex];

    return (
      <div>
        <TabsList>
          {this.props.tabs.map((tab, index) => (
            <TabItem
              key={index}
              label={tab.label}
              index={index}
              onTabChange={this.handleTabChange}
              active={this.state.activeTabIndex === index}
            />
          ))}
        </TabsList>
        <Content>{activeTab.component}</Content>
      </div>
    );
  }
}

export default Tabs;
