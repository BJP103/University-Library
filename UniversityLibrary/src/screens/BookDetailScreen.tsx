import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { BookContext } from '../context/BookContext';

export default function BookDetailScreen({ route }: any) {
  const { bookId } = route.params;
  const context = useContext(BookContext);

  if (!context) return null;
  const book = context.state.books.find((b) => b.id === bookId);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{book?.title}</Text>
      <Text>Status: {book?.isCheckedOut ? 'Checked Out' : 'Available'}</Text>
      <Button 
        title="Toggle Status" 
        onPress={() => { /* TODO: Dispatch the toggle action here */ }} 
      />
    </View>
  );
}