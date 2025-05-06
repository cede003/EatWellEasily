import { View, FlatList, Text, Button } from 'react-native';
import { useIngredients } from '@/context/IngredientsContext';
import IngredientItem from '@/components/IngredientItem';

export default function Ingredients() {
  const { ingredients, clearIngredients } = useIngredients();

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <IngredientItem name={item} />}
        ListEmptyComponent={<Text>No ingredients added.</Text>}
      />
      <Button title="Clear All" onPress={clearIngredients} />
    </View>
  );
}
