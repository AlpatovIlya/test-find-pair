import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {RootNavigator} from './src/navigators';
import store from './src/redux/store';
import {mainTheme} from './src/themes';

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
