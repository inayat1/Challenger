import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Home from './src/components/pages/home';
  const App = () => {
    return (
        <Provider store={store}>
          <Home />
        </Provider>
    );
  };


export default App;
