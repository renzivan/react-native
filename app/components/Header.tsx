import { StyleSheet, Text } from 'react-native';

interface Props {
  text: string;
}

export default function App({ text }: Props) {
  return(
    <Text style={styles.header}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
  }
});
