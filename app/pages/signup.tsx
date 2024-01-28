import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Brand from '../components/Brand';

export default function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleClickLogin = () => {
    console.log('name: ', name);
    console.log('email: ', email);
    console.log('password: ', password);
  }

  return (
    <View style={styles.container}>
      <Brand />
      <Text style={styles.header}>Create an account</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name: </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(val) => setName(val)}
        />
      </View>
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
      <Pressable style={styles.button} onPress={handleClickLogin}>
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    gap: 20,
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
  },
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#2196f3',
    borderRadius: 100,
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  }
});
