/**
 * @format
 */

import React from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import {
    Welcome,
    TransactionBook
} from './screens'
import App from './src/navigation/App'

AppRegistry.registerComponent(appName, () => () => <App />);
