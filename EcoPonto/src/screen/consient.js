import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Consient() {    
    return (
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Consientização
                </Text>
            </View>
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
});