export default function useRecipes(ingredients: string[]) {
    if (!ingredients.length) return [];

    // Mocked example logic
    const allRecipes = [
      { name: 'Pasta', needs: ['tomato', 'pasta', 'cheese'] },
      { name: 'Salad', needs: ['lettuce', 'tomato', 'cucumber'] },
      { name: 'Omelette', needs: ['egg', 'cheese'] },
    ];

    return allRecipes
      .filter((recipe) =>
        recipe.needs.every((need) =>
          ingredients.some((input) => input.toLowerCase().includes(need))
        )
      )
      .map((r) => r.name);
  }
  