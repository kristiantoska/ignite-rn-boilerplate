import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import AppNavigation from 'navigation';
import StartupActions from 'models/startup';

import * as NavigationUtils from 'utils/navigation';

class RootContainer extends Component {
  componentDidMount() {
    this.props.dispatch(StartupActions.startup());
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />

        <AppNavigation ref={navRef => NavigationUtils.setNavigator(navRef)} />
      </React.Fragment>
    );
  }
}

export default connect()(RootContainer);
