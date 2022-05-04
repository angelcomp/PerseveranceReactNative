import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import {TopoBanner} from './src/telas/Rover/TopoBanner'
import {InformacoesRover} from './src/telas/Rover/InformacoesRover'

export default function App() {
  return (
    <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        <TopoBanner/>
        <InformacoesRover/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051525',
  },
});
