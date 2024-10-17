import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const App = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');

  const choices: string[] = ['Pedra', 'Papel', 'Tesoura'];

  // Definimos que userSelection é uma string
  const playGame = (userSelection: string) => {
    const randomIndex = Math.floor(Math.random() * 3); // Gera um número aleatório entre 0 e 2
    const computerSelection = choices[randomIndex];

    setUserChoice(userSelection);
    setComputerChoice(computerSelection);
    determineWinner(userSelection, computerSelection);
  };

  const determineWinner = (user: string, computer: string) => {
    if (user === computer) {
      setResult('Empate!');
    } else if (
      (user === 'Pedra' && computer === 'Tesoura') ||
      (user === 'Tesoura' && computer === 'Papel') ||
      (user === 'Papel' && computer === 'Pedra')
    ) {
      setResult('Você venceu!');
    } else {
      setResult('Você perdeu!');
    }
  };

  return (
    <View style={styles.outerContainer}>
    <View style={styles.container}>
      <View style={styles.titulocontainer}>
        <Text style={styles.title}>           Jogo de               Pedra,Papel e Tesoura</Text>
      </View>
      <View style={styles.escolha}>
        <View style={styles.pedra}>
          <Image 
          source={require('./img/pedra.png')}
          style={styles.image}
          />
          <Button title="Pedra" onPress={() => playGame('Pedra')} />
        </View>  
        <View style={styles.pedra}>
          <Image 
          source={require('./img/papel.png')}
          style={styles.image}
          />
          <Button title="Papel" onPress={() => playGame('Papel')} />
        </View> 
        <View style={styles.pedra}>
          <Image 
          source={require('./img/tesoura.png')}
          style={styles.image}
          />
          <Button title="Tesoura" onPress={() => playGame('Tesoura')} />  
        </View> 
      </View>
      <View style={styles.resultado}>
        {userChoice && <Text>Você escolheu: {userChoice}</Text>}
        {computerChoice && <Text>Computador escolheu: {computerChoice}</Text>}
      </View>
      <Text style={styles.resultText}>{result}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#32b9be',
    padding: 30,
  },
  titulocontainer:{
    alignItems: 'center',
    borderColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    borderColor: '#000000',
  },
  escolha: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
  pedra: {
  },
  resultado: {
    marginVertical: 20,
    alignItems: 'center',
    fontWeight: 'bold',
    borderWidth: 5,
    borderColor: '#000000',

  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;
