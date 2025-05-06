import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function SettingsScreen() {
  const handleLogout = () => {
    Alert.alert('Logout', 'This is just a placeholder for logout functionality.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
