import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { Brand, Button, Header } from '../components';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickLogin = () => {
    console.log('email: ', email);
    console.log('password: ', password);
  }

  return (
    <View style={styles.container}>
      <Brand />
      <Header text="Login to your account" />
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email: </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(val) => setEmail(val)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <Button text="Login" onPress={handleClickLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  header: {
    fontSize: 20,
    textAlign: 'center'
  },
  inputGroup: {
    gap: 5
  },
  label: {
    color: '#333',
  },
  input: {
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10
  }
});
