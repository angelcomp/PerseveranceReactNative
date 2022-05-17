import { SafeAreaView, Image, Text, StyleSheet, Dimensions, View } from 'react-native'

const width = Dimensions.get('screen').width;

export default function ItemRover( {item:{nome, missao, img}}) {
    return <SafeAreaView style={styles.view}>
        <Image style={styles.img} source={img}/>
        <View>
            <Text style={styles.nome}> {nome} </Text>
            <Text style={styles.missao}> {missao} </Text>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    view:{
        padding: 8,
        // borderBottomWidth: 1,
        // borderBottomColor: '#0B2C4D',
        // paddingVertical: 15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    nome: {
        bottom: 0,
        width: "100%",
        fontSize: 15,
        color: "yellow",
        fontWeight: "bold",
        lineHeight: 40,
    },
    missao: {
        fontSize: 13,
        color: "white",
        fontWeight: "bold",
        lineHeight: 40,
    },
    img: {
        height: 100,
        width: 100,
        marginRight: 10
    }
})