import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Slot } from 'expo-router';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export function ProtectedRoute() {
  const { isSignedIn, isLoaded } = useAuth();
  console.log('isSignedIn', isSignedIn);
  // Show a loading indicator while the auth state is being loaded
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // If the user is not signed in or isSignedIn is undefined, redirect to the sign-in page
  if (isSignedIn === false || isSignedIn === undefined) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  // If the user is signed in, render the protected content
  return <Slot />;
}
