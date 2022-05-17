import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, FlatList, View} from 'react-native';
import {TopoBanner} from './src/telas/Rover/TopoBanner'
import {InformacoesRover} from './src/telas/Rover/InformacoesRover'
import PerseveranceData from './src/mocks/perseveranceImageMockData'
import RoversData from './src/mocks/roversMockData'
import ItemImages from './src/telas/Rover/ItemImage';
import ItemRover from './src/telas/Rover/ItemRover';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={PerseveranceData.data.lista}
        renderItem={ItemImages}
        keyExtractor={ ({sol}) => sol }
        ListHeaderComponent={
          () => {
            return <>
              <StatusBar style="auto" />
              <TopoBanner/>
              <InformacoesRover/>
              <View style={styles.divider}/>
              <Text style={styles.titulo}> {PerseveranceData.data.titulo} </Text>
            </>
          }
        }
        ListFooterComponent= {
          () => {
            return <FlatList
            data={RoversData.data.lista}
            renderItem={ItemRover}
            keyExtractor={ ({nome}) => nome }
            ListHeaderComponent={
              () => {
                return <>
                  {/* <View style={styles.divider}/> */}
                  <Text style={styles.titulo}> {RoversData.data.titulo} </Text>
                </>
              }
            }
            />
          }
        }
      />
      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051525',
  },
  titulo:{
    color: 'yellow',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  },
  divider:{
    borderTopWidth: 1,
    borderTopColor: '#0B2C4D',
    marginBottom: 20,
    alignItems: 'center'
  }
});
