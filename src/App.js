import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from './reducers';
import DrawerContainer from './DrawerContainer';

class App extends Component {

  render() {
    const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk), autoRehydrate()));
    persistStore(store, { storage: AsyncStorage });
    return (
      <Provider store={store}>
        <DrawerContainer />
      </Provider>
    );
  }
}

export default App;
