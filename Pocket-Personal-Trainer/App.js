import { SafeAreaView, StyleSheet, View } from 'react-native';
import GerarRoteiro from './components/GerarRoteiro';


export default function App() {
return (
<View style={styles.safe}>
<GerarRoteiro />
</View>
);
}


const styles = StyleSheet.create({
safe: { flex: 1 },
});