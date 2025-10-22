import { SafeAreaView, StyleSheet } from 'react-native';
import GerarRoteiro from './components/GerarRoteiro';


export default function App() {
return (
<SafeAreaView style={styles.safe}>
<GerarRoteiro />
</SafeAreaView>
);
}


const styles = StyleSheet.create({
safe: { flex: 1 },
});