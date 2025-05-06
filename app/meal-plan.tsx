import { View, Text, FlatList } from 'react-native';
import { useIngredients } from '@/context/IngredientsContext';
import useRecipes from '@/hooks/useRecipes';

export default function MealPlan() {
  const { ingredients } = useIngredients();
  const recipes = useRecipes(ingredients);

  return (
    <View style={{ padding: 20 }}>
      <Text>Recipes:</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>🍽 {item}</Text>}
        ListEmptyComponent={<Text>No recipes available. Add some ingredients!</Text>}
      />
    </View>
  );
}
