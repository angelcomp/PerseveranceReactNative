
import { SafeAreaView, Image, Text, StyleSheet, Dimensions} from 'react-native'

import perseverance from '../../../assets/perseverance.jpg'

const width = Dimensions.get('screen').width;

export function TopoBanner() {
    return <SafeAreaView style={styles.container}>
            <Image style={styles.banner} source={perseverance}/>
            <Text style={styles.titulo}>Perseverance</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
container: {
    marginTop: 35,
        width: width
    },

    image: {
        height: 900/509 * width,
        position: "absolute"
    },
    titulo: {
        position:"absolute",
        textAlign: "left",
        bottom: 0,
        width: "100%",
        padding: 10,
        fontSize: 30,
        color: "yellow",
        fontWeight: "bold",
        lineHeight: 40,
    },
})