import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormLogin from './pages/login';
import Brand from './components/Brand';

export default function App() {
  return (
    <View style={styles.container}>
      <Brand />
      <FormLogin />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  }
});
