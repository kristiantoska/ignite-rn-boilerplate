import React from 'react';
import { UIManager } from 'react-native';
import { Provider } from 'react-redux';

import createStore from './redux';
import RootContainer from './RootContainer';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

// create our store
const store = createStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
