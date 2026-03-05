import React, { lazy } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Catalog: undefined;
  Details: { bookId: string }; // Reminder: ONLY pass the ID here!
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BookListScreen = lazy(() => import('../screens/BookListScreen'));
const BookDetailScreen = lazy(() => import('../screens/BookDetailScreen'));

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Catalog" component={BookListScreen} />
      <Stack.Screen name="Details" component={BookDetailScreen} />
    </Stack.Navigator>
  );
}