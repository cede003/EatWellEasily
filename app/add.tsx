import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useIngredients } from '@/context/IngredientsContext';

export default function Add() {
  const [text, setText] = useState('');
  const { addIngredient } = useIngredients();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter ingredient"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button
        title="Add"
        onPress={() => {
          if (text) {
            addIngredient(text);
            setText('');
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});
