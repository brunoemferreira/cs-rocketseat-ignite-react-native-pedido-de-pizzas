import React from 'react';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import AppLoading from 'expo-app-loading';
import StatusBar from 'expo-status-bar/build/ExpoStatusBar';

import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';

import { SignIn } from './src/screens/SignIn';

import { AuthProvider } from './src/hooks/auth';

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
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent backgroundColor='transparent' />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </ThemeProvider>
  );
}
