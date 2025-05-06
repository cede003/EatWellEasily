import React, { createContext, useState, useContext } from 'react';

const IngredientsContext = createContext(null);

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const addIngredient = (ingredient: string) => {
    setIngredients((prev) => [...prev, ingredient]);
  };

  const clearIngredients = () => setIngredients([]);

  return (
    <IngredientsContext.Provider value={{ ingredients, addIngredient, clearIngredients }}>
      {children}
    </IngredientsContext.Provider>
  );
};

export const useIngredients = () => useContext(IngredientsContext);
