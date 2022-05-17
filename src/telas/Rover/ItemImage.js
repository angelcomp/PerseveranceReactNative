import { SafeAreaView, Image, Text, StyleSheet, Dimensions} from 'react-native'

const width = Dimensions.get('screen').width;

export default function ItemImages( {item:{sol, data, camera, img}}) {
    return <SafeAreaView style={styles.view}>
        <Text style={styles.sol}> {sol} </Text>
        <Image style={styles.img} source={img}/>
        <Text style={styles.camera}> {camera} </Text>
        <Text style={styles.data}> {data} </Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    view:{
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#0B2C4D',
        paddingVertical: 15,
        alignItems: 'center'
    },
    sol: {
        bottom: 0,
        width: "100%",
        padding: 4,
        fontSize: 15,
        color: "yellow",
        fontWeight: "bold",
        lineHeight: 40,
    },
    camera: {
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        lineHeight: 40,
    },
    data: {
        fontSize: 12,
        color: "white",
        lineHeight: 40,
    },
    img: {
        height: 900/509 * width /2,
        width:"100%",
    }
})