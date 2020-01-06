import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';

import storeConfig from './src/store/storeConfig';
import Navigator from './src/Navigator';

axios.defaults.baseURL = 'https://lambe-4017e.firebaseio.com/';

const store = storeConfig();
const Redux = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
