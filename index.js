import { AppRegistry } from 'react-native';
import setup from './js/setup';
import { Sentry } from 'react-native-sentry';
Sentry.config('ADD_SENTRY_CLIENT_KEY').install();

AppRegistry.registerComponent('ReactNativeInit', setup);
