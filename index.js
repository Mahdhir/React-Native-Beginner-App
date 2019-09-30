import {AppRegistry} from 'react-native';
// import App from './App';

import Crypto from './Crypto';
import {name as appName} from './app.json';


// console.log(App);

AppRegistry.registerComponent(appName, () => Crypto);
