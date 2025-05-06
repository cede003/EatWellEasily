import { useState } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Platform, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState<string[]>([]);

  const handleSend = () => {
    if (!input.trim()) return;
    // In a real app, you'd send `input` to your chatbot or API
    setChatLog((prev) => [...prev, `🗣️ You: ${input}`, `🤖 Bot: Nah I'm not in the mood to help!`]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <ScrollView contentContainerStyle={styles.chatSection}>
        <Text style={styles.title}>How can I help today?</Text>
        <Text style={styles.subtext}>Try: "What can I make with eggs?" or "How can I make pancakes?"</Text>

        {chatLog.map((msg, index) => (
          <Text key={index} style={styles.chatMessage}>
            {msg}
          </Text>
        ))}
      </ScrollView>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Type your question..."
        style={styles.input}
        onSubmitEditing={handleSend}
        returnKeyType="send"
      />

      <View style={styles.buttonSection}>
        <Button title="Add Ingredient" onPress={() => router.push('/add')} />
        <Button title="View Ingredients" onPress={() => router.push('/ingredients')} />
        <Button title="Generate Meal Plan" onPress={() => router.push('/meal-plan')} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  chatSection: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  chatMessage: {
    fontSize: 16,
    marginVertical: 4,
    backgroundColor: '#f1f1f1',
    padding: 8,
    borderRadius: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
  buttonSection: {
    gap: 10,
  },
});
