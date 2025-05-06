import { Stack } from 'expo-router';
import { IngredientsProvider } from '@/context/IngredientsContext';

export default function RootLayout() {
  return (
    <IngredientsProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </IngredientsProvider>
  );
}
