import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const projects = [
    {
        tile: 'App Loja Completa',
        description: 'App mobile com react native.',
        githubUrl: 'https://github.com/dudaguimaraes11/mobile-react-cheri',
    },
    {
        tile: 'Cine Ranker App',
        description: 'Desenvolvimento de um site que rankeia filmes em Front-End.',
        githubUrl: 'https://github.com/dudaguimaraes11/cine-ranker-app.git',
    },
    {
        tile: 'Clube do Livro',
        description: 'Desenvolvimento de um Clube do Livro digital em Front-End.',
        githubUrl: 'https://github.com/dudaguimaraes11/front-clube-do-livro.git',
    },
];

export default function ProjetosScreen() {
    const [msg, setMsg] = useState('');

    const abrirGitHub = (url) => {
        Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
    };

    return (
        <ScrollView style={styles.container}>
            {projects.map((project, i) => (
                <View key={i} style={styles.card}>
                    <Text style={styles.title}>{project.title}</Text>
                    <Text style={styles.text}>{project.description}</Text>

                    <TouchableOpacity
                        style={styles.githubLinkContainer}
                        onPress={() => abrirGitHub(project.githubUrl)}>
                        <MaterialCommunityIcons name="github" size={22} color="#680146" />

                        <Text style={styles.linkText}>Acessar repositório</Text>
                    </TouchableOpacity>
                </View>
            ))}

            <View style={styles.cardContato}>
                <Text style={styles.title}>Contato</Text>

                <TextInput
                    placeholder="Digite sua mensagem"
                    placeholderTextColor="#9ca3af"
                    style={styles.input}
                    value={msg}
                    onChangeText={setMsg}
                />

                <TouchableOpacity style={styles.button} onPress={() => setMsg('')}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6', // Fundo cinza claro moderno
        padding: 16,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        // Sombra para dar profundidade aos cards no iOS e Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        color: '#4b5563',
        marginBottom: 12,
        lineHeight: 20,
    },
    githubLinkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3e8ff', // Fundo roxo bem clarinho para combinar com o ícone
        padding: 10,
        borderRadius: 8,
    },
    linkText: {
        fontSize: 14,
        color: '#690026',
        fontWeight: '600',
        marginLeft: 8,
    },
    cardContato: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 32, // Margem maior no final para não sumir no ScrollView
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        color: '#1f2937',
        backgroundColor: '#f9fafb',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#690026', // Roxo escuro combinando com os links
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});