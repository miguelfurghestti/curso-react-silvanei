import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
      style={{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
      }}
      >Miguel Furghestti</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9e3c3c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
