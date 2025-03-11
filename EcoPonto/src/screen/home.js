import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function Home() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    EcoPonto
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image
                    source={require('../../assets/img/carrossel/dicas-para-economizar.jpg')}
                    style={styles.mainImage}
                />
                <Text style={styles.text}>
                    Reciclar é um ato de consciência e responsabilidade que contribui diretamente 
                    para a preservação do meio ambiente e para a sustentabilidade do planeta. 
                    A reciclagem consiste no processo de transformar materiais descartados em novos 
                    produtos, evitando o acúmulo de lixo e diminuindo a eliminação de recursos naturais.

                    Diariamente, toneladas de resíduos sólidos são geradas ao redor do mundo, e grande 
                    parte desses materiais poderia ser reciclada, evitando a poluição do solo, da água 
                    e do ar. A prática da reciclagem também reduz a quantidade de lixo enviado para aterros 
                    sanitários e lixões, ajudando a minimizar o impacto ambiental causado pelo descarte inadequado.
                </Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/img/carrossel/dicas-para-economizar.jpg')}
                        style={styles.smallImage}
                    />                    
                    <Image
                        source={require('../../assets/img/carrossel/dicas-para-economizar.jpg')}
                        style={styles.smallImage}
                    />
                    <Image
                        source={require('../../assets/img/carrossel/dicas-para-economizar.jpg')}
                        style={styles.smallImage}
                    />
                </View>
                <Text style={styles.text}>
                    Além dos benefícios ambientais, reciclar também é vantajoso do ponto de vista econômico. 
                    A produção de materiais a partir de resíduos consome muito menos energia do que a produção 
                    a partir de matérias-primas virgens. Por exemplo, a reciclagem de alumínio economiza até 95% 
                    da energia necessária para fabricar o metal a partir da bauxita. Isso representa uma economia 
                    significativa de recursos e redução de emissões de gases poluentes.

                    Outro ponto importante da reciclagem é a promoção da economia circular, que busca transformar 
                    resíduos em novos produtos, prolongando seu ciclo de vida. Essa abordagem reduz o desperdício e 
                    incentiva o consumo consciente, estimulando as pessoas a repensarem seus hábitos e adotarem 
                    práticas mais sustentáveis.
                </Text> 
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/img/carrossel/dicas-para-economizar.jpg')}
                        style={styles.smallImage}
                    />                    
                    <Image
                        source={require('../../assets/img/carrossel/dicas-para-economizar.jpg')}
                        style={styles.smallImage}
                    />
                    <Image
                        source={require('../../assets/img/carrossel/dicas-para-economizar.jpg')}
                        style={styles.smallImage}
                    />
                </View>
                <Text style={styles.text}>
                    Para que a reciclagem ocorra de forma eficiente, é fundamental que cada cidadão faça sua 
                    parte, separando corretamente os resíduos e encaminhando-os para locais adequados. É importante 
                    lavar as embalagens recicláveis ​​antes de descartá-las, para evitar contaminações que prejudicam 
                    o processo de reciclagem.

                    Existem diversos tipos de materiais que podem ser reciclados, como papel, plástico, vidro, metal 
                    e resíduos eletrônicos. Cada um deles requer um tratamento específico para garantir sua reutilização 
                    de forma adequada. Por isso, é essencial conhecer as orientações locais sobre coleta seletiva e 
                    descarte correto.

                    Ao adotar a reciclagem como parte do cotidiano, cada pessoa contribui para um futuro mais limpo 
                    e saudável. Pequenas atitudes fazem uma grande diferença quando praticadas coletivamente. Reciclar 
                    não é apenas um gesto de cuidado com o meio ambiente, mas um compromisso com as próximas gerações.

                    Recicle hoje e faça parte da mudança que o planeta precisa!
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    header: {
        padding: 20,
        backgroundColor: '#6200ee',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    scrollContent: {
        padding: 20,
    },
    mainImage: {
        width: 300,
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
    },
    text: {
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'justify',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    smallImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    videoContainer: {
        width: "100%",
        height: (Dimensions.get("window").width * 9) / 16,
        marginVertical: 10,
    },
    video: {
        flex: 1,
        borderRadius: 10,
    },
});
