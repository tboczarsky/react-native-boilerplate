import React from 'react';
import './src/i18n';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigators/app-navigator';
import {I18nextProvider} from 'react-i18next';
import {AuthStoreProvider} from './src/models/Auth.store';
import {AppToast} from './src/components/AppToast/AppToast';

const SafeAreaViewStyle = {flex: 1};

const App = () => {
  return (
    <AuthStoreProvider>
      <I18nextProvider>
        <StatusBar />
        <SafeAreaView style={SafeAreaViewStyle}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaView>
        <AppToast />
      </I18nextProvider>
    </AuthStoreProvider>
  );
};

export default App;
