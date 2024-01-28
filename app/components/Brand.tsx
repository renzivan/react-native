import { StyleSheet, Text } from 'react-native';

export default function App() {
  const brand = 'OTENiFY';

  return (
    <Text style={styles.brand}>
      {brand.split('').map((char, index) => (
        <Text key={index} style={char === 'i' ? styles.coloredLetter : null}>
          {char}
        </Text>
      ))}
    </Text>
  );
}

const styles = StyleSheet.create({
  brand: {
    color: '#2196f3',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center'
  },
  coloredLetter: {
    color: '#333',
    fontSize: 40,
    fontWeight: '900',
    fontStyle: 'italic'
  }
});
