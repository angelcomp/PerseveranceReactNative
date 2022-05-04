
import { Image, Text, StyleSheet, View } from 'react-native'

import logoNasa from '../../../assets/nasa.png'

const sobreString = 'O antecessor do Perseverance foi o robô Curiosity, que confirmou que existiram condições de vida em Marte, já o Perseverance que tem o tamanho de um carro e pesa cerca de uma tonelada, conta com novos instrumentos, cerca de 20 câmeras, um helicóptero e até microfones, vai agora dar o próximo passo e tentar responder uma das grandes questões da astrobiologia: há sinais concretos de vida microbiana passada em Marte? A cratera Jezero que foi o local de pouso, já foi, há 3,5 bilhões de anos, permeada por rios e lagos, os quais podem ter abrigado vida. Por esse motivo, Perseverance foi desenvolvido para analisar rochas e o solo da região em busca de sinais de vida antiga, ele coletará amostras que serão trazidas à Terra no futuro e testará tecnologias pioneiras para uma eventual presença humana no planeta vermelho.'
//const sobreString = 'O antecessor do Perseverance foi o robô Curiosity, que confirmou que existiram condições de vida em Marte, já o Perseverance que tem o tamanho de um carro e pesa cerca de uma tonelada, conta com novos instrumentos, cerca de 20 câmeras, um helicóptero e até microfones, vai agora dar o próximo passo e tentar responder uma das grandes questões da astrobiologia: há sinais concretos de vida microbiana passada em Marte? A cratera Jezero que foi o local de pouso, já foi, há 3,5 bilhões de anos, permeada por rios e lagos, os quais podem ter abrigado vida. Por esse motivo, Perseverance foi desenvolvido para analisar rochas e o solo da região em busca de sinais de vida antiga, ele coletará amostras que serão trazidas à Terra no futuro e testará tecnologias pioneiras para uma eventual presença humana no planeta vermelho.'

export function InformacoesRover() {
    return <View style={styles.container}>
        <Text style={styles.tituloInfoSobre}>Sobre</Text>
        <Text style={styles.infoSobre}>{sobreString}</Text>
        
        <View style={styles.row}>
            <View style={styles.containerInfos}>
                <Text style={styles.tituloInfoEsq}>Missão</Text>
                <Text style={styles.infoEsq}>Mars 2020</Text>
            </View>

            <View style={styles.containerInfos}>
                <Text style={styles.tituloInfoDir}>Dimensões</Text>
                <Text style={styles.infoDir}>2,2m x 2,7m x 3m</Text>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.containerInfos}>
                <Text style={styles.tituloInfoEsq}>Lançamento</Text>
                <Text style={styles.infoEsq}>30 de julho de 2020</Text>
            </View>

            <View style={styles.containerInfos}>
                <Text style={styles.tituloInfoDir}>Aterrissagem</Text>
                <Text style={styles.infoDir}>18 de fevereiro de 2021</Text>
            </View>
        </View>

        <View style={styles.containerNasa}>
            <Text style={styles.siteNasa}>nasa.gov</Text>
            <Image style={styles.logoNasa} source={logoNasa}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    containerInfos: {

    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        marginVertical: 8
    },
    tituloInfoSobre: {
        fontWeight: "bold",
        fontSize: 17,
        color: "yellow"
    },
    infoSobre: {
        color: "#FAFAFAFA",
        fontSize: 14,
        textAlign: 'justify'
    },
    tituloInfoEsq: {
        fontWeight: "bold",
        fontSize: 17,
        color: "yellow"
    },
    infoEsq: {
        color: "#FAFAFAFA",
        fontSize: 14,
    },
    tituloInfoDir: {
        fontWeight: "bold",
        fontSize: 17,
        color: "yellow",
        textAlign: 'right'
    },
    infoDir: {
        color: "#FAFAFAFA",
        fontSize: 14,
        textAlign: 'right'
    },
    containerNasa:{
        padding: 30,
        width:'100%',
        bottom: 0,
    },
    siteNasa:{
        color: "#FAFAFAFA",
        fontSize: 14,
        textAlign: 'center'
    },
    logoNasa:{
        alignSelf: 'center',
    }
})