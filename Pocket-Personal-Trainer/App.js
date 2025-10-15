import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Platform, Pressable, ScrollView} from 'react-native';
import {useState} from 'react'

const statusBarHeight = StatusBar.currentHeight

export default function App() {

  const [loading,setLoading] = useState(true);
  
  return (


    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text style={styles.heading}>Personal Trainer de Bolso</Text>

      <View style={styles.form}>

        <Text style={styles.label}>Qual seu principal objetivo?</Text>
        <TextInput
          placeholder="Ex: hipertrofia, emagrecimento ou resistência muscular"
          style={styles.input}
        />

        <Text style={styles.label}>Quais os dias da semana você pode treinar?</Text>
        <TextInput
          placeholder="Ex: segunda e quarta, segunda a domingo"
          style={styles.input}
        />

        <Text style={styles.label}>Onde vai treinar?</Text>
        <TextInput
          placeholder="Ex: academia, em casa ou calistenia"
          style={styles.input}
        />

        <Text style={styles.label}>Quais equipamentos tem à sua disposição?</Text>
        <TextInput
          placeholder="Ex: academia completa, somente halteres ou próprio corpo"
          style={styles.input}
        />

        <Text style={styles.label}>Quanto tempo deseja por treino?</Text>
        <TextInput
          placeholder="Ex: 30 minutos, 45 minutos ou 60 minutos"
          style={styles.input}
        />

      </View>

      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>GERAR TREINO PERSONALIZADO!</Text>
      </Pressable>

      <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>

          <Text style={styles.titleOne}>Roteiro do seu treino </Text>

          <Text style={styles.roteiro}> aqui aparece o treino </Text>

        </View>
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
  },
});
