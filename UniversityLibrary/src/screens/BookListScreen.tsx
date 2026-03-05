import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { BookContext } from '../context/BookContext';
import { useNavigation } from '@react-navigation/native';

export default function BookListScreen() {
  const context = useContext(BookContext);
  const navigation = useNavigation<any>();

  if (!context) return null;

  return (
    <FlatList
      data={context.state.books}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', { bookId: item.id })
          }
        >
          <View style={{ padding: 20, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 20 }}>{item.title}</Text>
            <Text>{item.author}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}