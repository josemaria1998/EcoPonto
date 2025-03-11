import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from 'react-native-webview';

export default function Consient() {    
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Consientização
                </Text>
            </View>
            <View style={styles.videoContainer}>
                <WebView
                    style={styles.video}
                    source={{ uri: "https://youtu.be/hwxIoW3cj4U?si=YEg5J0wAuRer8zBC" }}
                    allowsFullscreenVideo={true}
                />
            </View>
                <Text style={styles.text}>
                Reciclar é o processo de transformar materiais descartados em novos produtos, reduzindo 
                a quantidade de resíduos e o consumo de recursos naturais. Isso ajuda a diminuir o impacto 
                ambiental e a poluição causada pelo acúmulo de lixo.

                Existem diversos materiais que podem ser reciclados, como papel, plástico, vidro, metais e resíduos 
                eletrônicos. Cada tipo de material passa por processos específicos para ser reutilizado, como descarte, 
                trituração ou processamento químico.
                </Text>
            
            
                {/* Benefícios da Reciclagem */}
                <View style={styles.section}>
                    <Text style={styles.title}>Benefícios da Reciclagem</Text>
                    <Text style={styles.text}>🌱 <Text style={{ fontWeight: 'bold' }}>Preservação Ambiental:</Text> Reduz a extração de recursos naturais.</Text>
                    <Text style={styles.text}>⚡ <Text style={{ fontWeight: 'bold' }}>Economia de Energia:</Text> Produção com menos energia que matérias-primas virgens.</Text>
                    <Text style={styles.text}>💼 <Text style={{ fontWeight: 'bold' }}>Geração de Empregos:</Text> Criação de empregos na indústria da reciclagem.</Text>
                    <Text style={styles.text}>🌍 <Text style={{ fontWeight: 'bold' }}>Redução de Resíduos:</Text> Menos lixo enviado para aterros e lixões.</Text>
                </View>

                {/* Como Praticar a Reciclagem */}
                <View style={styles.section}>
                    <Text style={styles.title}>Como Praticar a Reciclagem</Text>
                    <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>1.</Text> Separe corretamente os resíduos em categorias: papel, plástico, vidro, etc.</Text>
                    <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>2.</Text> Lave os materiais recicláveis antes de descartá-los para evitar contaminação.</Text>
                    <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>3.</Text> Utilize pontos de coleta seletiva ou centros de reciclagem.</Text>
                </View>
            </ScrollView>
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
    videoContainer: {
        marginBottom: 20,
    },
    video: {
        height: 200,
        marginBottom: 10,
    },
    scrollContent: {
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'justify',
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
