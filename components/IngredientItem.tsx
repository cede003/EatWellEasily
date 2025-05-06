import { Text, View, StyleSheet } from 'react-native';

export default function IngredientItem({ name }: { name: string }) {
  return (
    <View style={styles.item}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    borderRadius: 4,
  },
});
