import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const skills = [
    { name: 'React Native', icon: 'react' },
    { name: 'JavaScript', icon: 'language-javascript' },
    { name: 'Git', icon: 'git' },
    { name: 'Expo', icon: 'chevron-up' },
    { name: 'UI Basics', icon: 'cellphone-text' },
];

export default function HabilidadesScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.grid}>
                {skills.map((item, i) => (
                    <View key={i} style={styles.card}>
                        <MaterialCommunityIcons name={item.icon} size={60} color="#ececec" />
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f8fafc',
        padding: 24,
        alignItems: 'center',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
        maxWidth: 1400,
    },
    card: {
        backgroundColor: '#690026',
        width: 260,
        height: 260,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    text: {
        color: '#ececec',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 12,
    },
});
