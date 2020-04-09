/**
 * @format
 */

import React from "react";
import {Text} from "react-native";
import {Navigation} from "react-native-navigation";
import App from "./src/App";

Navigation.events().registerAppLaunchedListener(App);
// AppRegistry.registerComponent('pikkyOnboard', () => App);
