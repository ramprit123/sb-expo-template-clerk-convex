import { ProtectedRoute } from '@/components/auth/protected-route';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import Constants from 'expo-constants';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Get the Convex URL from environment variables
const convexUrl = process.env.EXPO_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  throw new Error('EXPO_PUBLIC_CONVEX_URL is not set in environment variables');
}

const convex = new ConvexReactClient(convexUrl);

export default function RootLayout() {
  useFrameworkReady();

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY as string}>
      <ConvexProvider client={convex}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <ProtectedRoute />
        <StatusBar style="auto" />
      </ConvexProvider>
    </ClerkProvider>
  );
}
