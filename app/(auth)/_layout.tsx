import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return <Redirect href={'/(auth)/sign-in'} />;
  }
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="sign-in" />
      <Stack.Screen options={{ headerShown: false }} name="sign-up" />
    </Stack>
  );
};

export default AuthLayout;
