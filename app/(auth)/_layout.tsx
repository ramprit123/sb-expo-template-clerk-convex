import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
  console.log('AuthLayout');
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
    </Stack>
  );
};

export default AuthLayout;
