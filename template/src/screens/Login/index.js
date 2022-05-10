import {observer} from 'mobx-react-lite';
import React from 'react';
import {View, Button} from 'react-native';
import {useAuthStore} from '../../models/Auth.store';

const LoginWrapperStyles = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export const LoginScreen = observer(() => {
  const authStore = useAuthStore();

  const handleLogin = () => {
    authStore.setToken('secret-token');
  };

  return (
    <View style={LoginWrapperStyles}>
      <Button onPress={handleLogin} title="Log in" />
    </View>
  );
});
