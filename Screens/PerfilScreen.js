import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function PerfilScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{
                        uri: 'https://i.pinimg.com/736x/bb/53/d8/bb53d80246a056e64f3b30e872d8e0f7.jpg',
                    }}
                    style={styles.image}
                />

                <Text style={styles.name}> Maria Eduarda Guimarães</Text>
                <Text style={styles.role}>Dev Mobile Jr</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Sobre mim</Text>
                <Text style={styles.text}>
                    Desenvolvedor mobile em formação, focado no desenvolvimento de aplicações
                    utilizando React Native. Tenho interesse em criar soluções simples, funcionais e
                    bem estruturadas, sempre priorizando a experiência do usuário e a usabilidade da
                    interface. Busco constantemente evoluir minhas habilidades em JavaScript,
                    componentização, estilização e boas práticas de desenvolvimento mobile, com foco
                    em construir aplicativos modernos, leves e responsivos.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
        padding: 16,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 14,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#9c9c9c',
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 50,
        marginBottom: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
    },
    role: {
        color: '#6b7280',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#690026',
        marginBottom: 6,
        alignSelf: 'flex-start',
    },
    text: {
        color: '#374151',
        fontSize: 16,
    },
});
