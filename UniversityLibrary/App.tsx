import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';

import { RootNavigator } from './src/navigation/RootNavigator';
import { BookProvider } from './src/context/BookContext';

export default function App() {
  return (
    <BookProvider>
      <NavigationContainer>
        <Suspense
          fallback={
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
          }
        >
          <RootNavigator />
        </Suspense>
      </NavigationContainer>
    </BookProvider>
  );
}