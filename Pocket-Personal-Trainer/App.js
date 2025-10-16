import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Platform, Pressable, ScrollView, ActivityIndicator, Alert, Keyboard} from 'react-native';
import {useState} from 'react'
import { EXPO_PUBLIC_GEMINI_API_KEY } from '@env';
import axios  from 'axios';



const statusBarHeight = StatusBar.currentHeight

export default function App() {

  const [nivel, setNivel] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [dias, setDias] = useState("");
  const [local, setLocal] = useState("");
  const [equipamentos, setEquipamentos] = useState("");
  const [tempo, setTempo] = useState("");


  const [loading,setLoading] = useState(false);
  const [roteiro, setRoteiro] = useState("");

 async function gerarRoteiro() {
  if (!nivel || !objetivo || !dias || !local || !equipamentos || !tempo) {
    Alert.alert("Atenção", "Preencha todos os campos do formulário!");
    return;
  }

  setRoteiro("");
  setLoading(true);
  Keyboard.dismiss();

  const prompt = `
    Aja como um personal trainer profissional e especialista em musculação. 
    Crie uma rotina de treino detalhada com base nas seguintes especificações:
    - Objetivo Principal: ${objetivo}
    - Nível de Experiência: ${nivel}
    - Frequência Semanal: ${dias} dias
    - Local do Treino: ${local}
    - Equipamentos Disponíveis: ${equipamentos}
    - Duração da Sessão: ${tempo} minutos

    Organize a rotina dividindo os treinos por dia (ex: Treino A, B, C...). 
    Para cada exercício, forneça o nome, o número de séries e o intervalo de repetições (ex: 3x8-12), 
    e o tempo de descanso recomendado. Use nomes de exercícios comuns no Brasil.
    A resposta deve ser apenas o plano de treino, de forma bem estruturada e pronta para ser exibida.
  `;

  const API_KEY = {EXPO_PUBLIC_GEMINI_API_KEY};
  const API_URL = "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";

  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gemini-2.5-flash",
        messages: [
          { role: "system", content: "Você é um personal trainer profissional." },
          { role: "user", content: prompt },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${EXPO_PUBLIC_GEMINI_API_KEY}`, 
        },
      }
);


    const workoutPlan = response.data.choices[0].message.content;
    console.log(workoutPlan);
    setRoteiro(workoutPlan);

  } catch (error) {
    console.error("Erro na requisição:", error.response?.data || error.message);
    Alert.alert("Erro", "Não foi possível gerar o treino. Verifique sua conexão e tente novamente.");
  } finally {
    setLoading(false);
  }
}


  return (


    <View style={styles.container}>

        <StatusBar style="auto" />

        <Text style={styles.heading}>Personal Trainer de Bolso</Text>

      <View style={styles.form}>

        <Text style={styles.label}>Qual seu nível de experiência?</Text>
        <TextInput
          placeholder="Ex: iniciante, intermediário, avançado"
          style={styles.input}
          value= {nivel}
          onChangeText={(text) => setNivel(text)}
        />

        <Text style={styles.label}>Qual seu principal objetivo?</Text>
        <TextInput
          placeholder="Ex: hipertrofia, emagrecimento ou resistência muscular"
          style={styles.input}
          value= {objetivo}
          onChangeText={(text) => setObjetivo(text)}
        />

        <Text style={styles.label}>Quais os dias da semana você pode treinar?</Text>
        <TextInput
          placeholder="Ex: segunda e quarta, segunda a domingo"
          style={styles.input}
          value= {dias}
          onChangeText={(text) => setDias(text)}
        />

        <Text style={styles.label}>Onde vai treinar?</Text>
        <TextInput
          placeholder="Ex: academia, em casa ou calistenia"
          style={styles.input}
          value= {local}
          onChangeText={(text) => setLocal(text)}
        />

        <Text style={styles.label}>Quais equipamentos tem à sua disposição?</Text>
        <TextInput
          placeholder="Ex: academia completa, somente halteres ou próprio corpo"
          style={styles.input}
          value= {equipamentos}
          onChangeText={(text) => setEquipamentos(text)}
        />

        <Text style={styles.label}>Quanto tempo deseja por treino?</Text>
        <TextInput
          placeholder="Ex: 30 minutos, 45 minutos ou 60 minutos"
          style={styles.input}
          value= {tempo}
          onChangeText={(text) => setTempo(text)}
        />

      </View>

      <Pressable style={styles.btn} onPress={gerarRoteiro}>
        <Text style={styles.btnText}>GERAR TREINO PERSONALIZADO!</Text>
      </Pressable>

      <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>

        {loading && (
          <View style={styles.content}>
          <Text style={styles.roteiro}> Analisando seu perfil e gerando seu treino ideal</Text>
          <ActivityIndicator color="red" size="large" />
        </View>
        )}

        {roteiro && (
          <View style={styles.content}>
          <Text style={styles.titleOne}>Roteiro do seu treino </Text>
          <Text style={styles.roteiro}> {roteiro} </Text>
        </View>
        )}
      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9dee2ff',
    alignItems: 'center',
    paddingTop: 20
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    padding: Platform.OS === 'android' ? statusBarHeight: 54
  },

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
    color:"rgba(74, 74, 74, 0.27)",
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

  content:{
    backgroundColor: "#fff",
    width: '100%',
    padding: 16,
    marginTop: 20,
    borderRadius: 10,
  },

  containerScroll:{
    width: '90%',
  },

  titleOne:{
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  roteiro:{
    textAlign:"center",
    fontSize: 16,
    marginBottom: 10,
  },
});
