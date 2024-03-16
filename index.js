import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Title() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>Resumo Do Projeto</Text>

      <Text style={styles.bolina}>  Neste projeto, será implementado um sistema 
      de controle de entrada e saída de veículos em uma empresa. 
      A principal funcionalidade envolve o registro preciso das 
      pessoas que deixam a empresa com um veículo, documentando tanto
       a hora de saída quanto o horário de retorno. 
       Este sistema visa proporcionar uma gestão eficaz do fluxo de veículos,
        monitorando o tempo de utilização e otimizando a segurança 
      e organização no ambiente corporativo.</Text>

      <Text style={styles.title}>Objetivo</Text>

      <Text style={styles.bolina}>O objetivo do projeto é aprimorar o 
      sistema de gestão de motoristas e carros da empresa, visando aumentar
       sua usabilidade e eficiência operacional. O foco está em ter um 
       controle mais preciso sobre as atividades relacionadas aos motoristas
        e veículos, como registro de multas, abastecimentos, 
      destinos das viagens e tempo de percurso.</Text>

      <Text style={styles.title}>Alcance Esperado</Text>

      <Text style={styles.bolina}>Nosso objetivo é impulsionar o máximo
       desempenho da empresa no controle de motoristas e veículos, 
       fornecendo um aplicativo funcional e intuitivo para o uso diário 
       de todos os funcionários.
Estamos comprometidos em aprimorar a gestão de motoristas e veículos, 
garantindo um controle preciso e eficiente das operações. Nosso aplicativo 
será uma ferramenta fundamental no dia a dia, simplificando tarefas, 
melhorando a comunicação e otimizando a eficiência operacional.
Com essa iniciativa, esperamos não apenas facilitar o controle de 
entrada e saída de veículos, mas também melhorar a segurança, reduzir 
custos e aumentar a produtividade em todas as áreas relacionadas ao
 transporte corporativo.
Estamos ansiosos para oferecer uma solução que atenda às 
necessidades de todos os colaboradores, tornando o processo 
de gestão de motoristas e veículos mais ágil, transparente e 
eficaz.</Text>

    </View>

    </ScrollView>
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

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#FF0000"
  },
  bolina: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Corrigido: sinal de igual e string
  },
});

