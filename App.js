import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){
  const [peso, setPeso] = useState(''); //armazena o peso
  const [altura, setAltura] = useState(''); //armazena o peso

  function executarCalculos(){
    const alt = altura/100;
    const imc = peso / (alt * alt);
    
    if (imc < 18.6){
      alert("Você esta abaixo do peso - IMC = " + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert("Voce esta com o peso ideal - IMC = " + imc.toFixed(2));
    }else if(imc >=  24.9 && imc < 34.9){
      alert("Voce esta levemente acima do peso = IMC = " + imc.toFixed(2));
    }else if (imc >= 34.9){
      alert("Voce esta acima do peso - IMC = " + imc.toFixed(2));
    }
     setPeso  ('');
     setAltura ('');
     }
  return (
    <View style={estilo.container}>
      <Text style={estilo.title}> Calcule seu IMC</Text>

      <TextInput 
        style={estilo.input}
        value={peso} //Valor dentro do componente
        onChangeText = {(peso) => setPeso(peso)} //Toda vez que o campo mudar ele é salvo
        placeholder = "Peso (Kg)"
        keyboardType = "numeric"
      />

      <TextInput 
        style={estilo.input}
        value={altura} //Valor dentro do componente
        onChangeText = {(altura) => setAltura(altura)} //Toda vez que o campo mudar ele é salvo
        placeholder = "Altura (cm)"
        keyboardType = "numeric"
      />

      <TouchableOpacity style={estilo.botao}
      onPress={executarCalculos}>
        <Text style={estilo.textoBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>

  );
}
const estilo = StyleSheet.create({
  container:{
     flex:1
  },
  title: {
    color: '#220862',
    textAlign: 'center',
    marginTop: 25,
    fontSize:30
  },
  input:{
    backgroundColor: '#DCB0FF',
    borderRadius: 10,
    margin:15,
    padding:10,
    color: '#220862',
    fontSize:23
  },
  botao:{
    justifyContent:'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FACCFF',
    padding:10,

  },
  textoBotao:{
    color:  '#220862',
    fontSize: 25,
  }


});