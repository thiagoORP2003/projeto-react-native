import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Title from './Text';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://img.freepik.com/vetores-premium/servico-de-entrega-com-carro_138905-61.jpg', // Substitua pela URL da imagem desejada
        }}
        style={styles.photo}
      />
      <Title/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  photo: {
    width: 300,
    height: 200,
    margin: 20,
  },
});
