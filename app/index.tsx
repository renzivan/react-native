import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Brand, Button } from './components'
import { router } from 'expo-router';

export default function App() {
  const handleClick = (val: string) => {
    router.push(`/pages/${val}`)
  }

  return (
    <View style={styles.container}>
      <Brand />
      <View style={styles.buttons}>
        <Button customStyle={{ flex: 1 }} text="Login" onPress={() => handleClick('login')} />
        <Button customStyle={{ flex: 1 }} bgColor="#198754" text="Signup" onPress={() => handleClick('signup')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10
  }
});
