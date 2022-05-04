import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {TopoBanner} from './src/telas/Rover/TopoBanner'
import {InformacoesRover} from './src/telas/Rover/InformacoesRover'

export default function App() {
  return (
    <View style={styles.container}>
      <TopoBanner/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
