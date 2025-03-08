import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialCommunityIcons } from "react-native-vector-icons";

//import Logo from "../../assets/icon.png";

export default function Home() {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Home
                </Text>
            </View>
            <View style={styles.content}>
                 <Image
                    source={require('../../assets/img/carrossel/dicas-para-economizar.jpg')}
                    style={styles.mainImage}
                />
                <Text style={styles.text}>Hoje acordei cedo, contemplei mais uma vez a natureza...</Text>
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
                    <Image
                        source={require('../../assets/img/carrossel/dicas-para-economizar.jpg')}
                        style={styles.smallImage}
                    /> 
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#6200ee',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    content: {
        padding: 20,
    },
    mainImage: {
        width: 300,
        height: 200,
        borderRadius: 10,
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
});
