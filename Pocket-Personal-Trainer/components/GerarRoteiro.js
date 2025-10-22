import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Alert, Keyboard } from 'react-native';
import { EXPO_PUBLIC_GEMINI_API_KEY } from '@env';
import axios from 'axios';
import Formulario from './Formulario';
import ExibirTreino from './ExibirTreino';

const statusBarHeight = StatusBar.currentHeight;

export default function GerarRoteiro() {
  const [nivel, setNivel] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [dias, setDias] = useState("");
  const [local, setLocal] = useState("");
  const [equipamentos, setEquipamentos] = useState("");
  const [tempo, setTempo] = useState("");

  const [loading, setLoading] = useState(false);
  const [roteiro, setRoteiro] = useState("");
  const [mostrarRoteiro, setMostrarRoteiro] = useState(false);
  const [mostrarLoading, setMostrarLoading] = useState(false);

  async function gerarRoteiro() {
    if (!nivel || !objetivo || !dias || !local || !equipamentos || !tempo) {
      Alert.alert("Atenção", "Preencha todos os campos do formulário!");
      return;
    }

    setRoteiro("");
    setMostrarRoteiro(false);
    setMostrarLoading(true);
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
      setRoteiro(workoutPlan);
      setMostrarLoading(false);
      setMostrarRoteiro(true);

    } catch (error) {
      console.error("Erro na requisição:", error.response?.data || error.message);
      Alert.alert("Erro", "Não foi possível gerar o treino. Verifique sua conexão e tente novamente.");
      setMostrarLoading(false);
    } finally {
      setLoading(false);
    }
  }

  function voltarAoFormulario() {
    setMostrarRoteiro(false);
    setMostrarLoading(false);
    setRoteiro("");
    setNivel("");
    setObjetivo("");
    setDias("");
    setLocal("");
    setEquipamentos("");
    setTempo("");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>Personal Trainer de Bolso</Text>

      {!mostrarRoteiro && !mostrarLoading && (
        <Formulario
          nivel={nivel}
          setNivel={setNivel}
          objetivo={objetivo}
          setObjetivo={setObjetivo}
          dias={dias}
          setDias={setDias}
          local={local}
          setLocal={setLocal}
          equipamentos={equipamentos}
          setEquipamentos={setEquipamentos}
          tempo={tempo}
          setTempo={setTempo}
          gerarRoteiro={gerarRoteiro}
        />
      )}

      {mostrarLoading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Analisando seu perfil e gerando seu treino ideal...</Text>
          <ActivityIndicator color="red" size="large" />
        </View>
      )}

      {mostrarRoteiro && (
        <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>
          <ExibirTreino roteiro={roteiro} voltarAoFormulario={voltarAoFormulario} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9dee2ff',
    alignItems: 'center',
    paddingTop: 60,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 30,
  },
  loadingContainer: {
    backgroundColor: "#fff",
    width: '90%',
    padding: 40,
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  containerScroll:{
    width: '90%',
  },
});