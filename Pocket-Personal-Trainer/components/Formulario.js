import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function Formulario({
  nivel, setNivel,
  objetivo, setObjetivo,
  dias, setDias,
  local, setLocal,
  equipamentos, setEquipamentos,
  tempo, setTempo,
  gerarRoteiro
}) {
  return (
    <>
      <View style={formStyles.form}>
        <Text style={formStyles.label}>Qual seu nível de experiência?</Text>
        <TextInput
          placeholder="Ex: iniciante, intermediário, avançado"
          style={formStyles.input}
          value={nivel}
          onChangeText={setNivel}
        />

        <Text style={formStyles.label}>Qual seu principal objetivo?</Text>
        <TextInput
          placeholder="Ex: hipertrofia, emagrecimento ou resistência muscular"
          style={formStyles.input}
          value={objetivo}
          onChangeText={setObjetivo}
        />

        <Text style={formStyles.label}>Quais os dias da semana você pode treinar?</Text>
        <TextInput
          placeholder="Ex: segunda e quarta, segunda a domingo"
          style={formStyles.input}
          value={dias}
          onChangeText={setDias}
        />

        <Text style={formStyles.label}>Onde vai treinar?</Text>
        <TextInput
          placeholder="Ex: academia, em casa ou calistenia"
          style={formStyles.input}
          value={local}
          onChangeText={setLocal}
        />

        <Text style={formStyles.label}>Quais equipamentos tem à sua disposição?</Text>
        <TextInput
          placeholder="Ex: academia completa, somente halteres ou próprio corpo"
          style={formStyles.input}
          value={equipamentos}
          onChangeText={setEquipamentos}
        />

        <Text style={formStyles.label}>Quanto tempo deseja por treino?</Text>
        <TextInput
          placeholder="Ex: 30 minutos, 45 minutos ou 60 minutos"
          style={formStyles.input}
          value={tempo}
          onChangeText={setTempo}
        />
      </View>

      <Pressable style={formStyles.btn} onPress={gerarRoteiro}>
        <Text style={formStyles.btnText}>GERAR TREINO PERSONALIZADO!</Text>
      </Pressable>
    </>
  );
}

const formStyles = {
  form:{
    backgroundColor: '#fff',
    width: '90%',
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 4,
    padding: 10,
    borderColor: "#94a3b8",
    fontSize: 16,
    color:"rgb(77, 75, 75)",
  },
  btn:{
    backgroundColor: "#ff5656",
    width: '80%',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  btnText:{
    color: "#fff",
    fontSize:18,
    fontWeight:'bold',
  },
};
