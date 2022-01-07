import React from 'react';
import { View } from 'react-native';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  // Caso as fontes não forem carregadas ele fica ainda na tela de Splash
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View>

    </View>
  );
}
