import {AppRegistry,YellowBox } from 'react-native';
// import App from './App';

import Crypto from './Crypto';
import {name as appName} from './app.json';


// console.log(App);
// ignore specific yellowBox warnings
YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger"]);

AppRegistry.registerComponent(appName, () => Crypto);
