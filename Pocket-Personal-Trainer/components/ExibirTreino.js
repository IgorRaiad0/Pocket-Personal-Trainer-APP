import { View, Text, Pressable } from 'react-native';
import Markdown from 'react-native-markdown-display';

const markdownStyles = { }

export default function ExibirTreino({ roteiro, voltarAoFormulario }) {
  return (
    <View style={displayStyles.content}>
      <Text style={displayStyles.titleOne}>Roteiro do seu treino</Text>
      <Markdown style={markdownStyles}>
        {roteiro}
      </Markdown>
      <Pressable style={displayStyles.btnVoltar} onPress={voltarAoFormulario}>
        <Text style={displayStyles.btnText}>GERAR NOVO TREINO</Text>
      </Pressable>
    </View>
  );
}

const displayStyles = {
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
  btnVoltar: {
    backgroundColor: "#4CAF50",
    width: '100%',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
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
