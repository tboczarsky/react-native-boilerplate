import {observer} from 'mobx-react-lite';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Button} from 'react-native';
import {useAuthStore} from '../../models/Auth.store';

const HomeWrapperStyles = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

const HiMomStyles = {
  padding: 16,
};

export const HomeScreen = observer(() => {
  const authStore = useAuthStore();
  const {t} = useTranslation();

  const handleLogout = () => {
    authStore.clearSession();
  };

  return (
    <View style={HomeWrapperStyles}>
      <Text style={HiMomStyles}>{t('hi.mom', {ns: 'common'})}</Text>
      <Button onPress={handleLogout} title="Log out" />
    </View>
  );
});
