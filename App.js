import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import LoadingScreen from './src/loading/loading';
 
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  function calcular(){
    const alturaFloat = parseFloat(altura.replace(',', '.')); // Tratamento para vírgula como separador decimal
    const pesoFloat = parseFloat(peso);

     if (isNaN(pesoFloat) || isNaN(alturaFloat) || pesoFloat <= 0 || alturaFloat <= 0) {
      Alert.alert('Atenção', 'Por favor, insira um peso e altura válidos.');
      return;
    }
    const imc = pesoFloat / (alturaFloat * alturaFloat);
    Alert.alert('Resultado', `Seu IMC é: ${imc.toFixed(2)}`)
    setAltura('');
    setPeso('');
  }
  useEffect(() => {
    // Simular um carregamento assíncrono (por exemplo, verificando autenticação, buscando dados, etc.)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Tempo de simulação: 2 segundos
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {isLoading ? (
        <LoadingScreen /> // Exibe a tela de carregamento enquanto isLoading for true
      ) : (
        <View style={styles.container}>
          <StatusBar style='dark'/>
          <View style={styles.logoContainer}>
            <Image
              source={require("./src/imagens/Logo.png")}
            />
          </View>
          <TextInput
            style={styles.inputs}
            placeholder='Altura'
            keyboardType='numeric'
            value={altura}
            onChangeText={setAltura}
          />
          <TextInput
            style={styles.inputs}
            placeholder='Peso'
            keyboardType='numeric'
            value={peso}
            onChangeText={setPeso}
          />
          <TouchableOpacity style={styles.bottao} onPress={calcular}>
            <Text style={{ textAlign: 'center', color: '#F0F3FA' }}>Calcular</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F3FA',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center'
  },
  inputs: {
    width: '80%',
    height: 40,
    borderWidth: 1, 
    borderColor: '#03989E',
    marginBottom: 28,
    borderRadius: 8,
    fontSize: 19,
    padding: 10
  },
  bottao: {
    width: 120,
    height: 38,
    borderRadius: 5,
    backgroundColor: '#03989E',
    justifyContent: 'center'
  }
})