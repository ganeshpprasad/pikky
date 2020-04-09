/**
 * @format
 */

import {Navigation} from "react-native-navigation";
import App from "./src/App";

console.disableYellowBox = true;

Navigation.events().registerAppLaunchedListener(App);
// AppRegistry.registerComponent('pikkyOnboard', () => App);
