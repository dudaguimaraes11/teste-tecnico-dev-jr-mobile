import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import PerfilScreen from './Screens/PerfilScreen';
import HabilidadesScreen from './Screens/HabilidadesScreen';
import ProjetosScreen from './Screens/ProjetosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerStyle: {
                        backgroundColor: '#690026',
                    },
                    headerTintColor: '#ececec',

                    tabBarActiveTintColor: '#690026',
                    tabBarInactiveTintColor: '#9ca3af',

                    tabBarStyle: {
                        backgroundColor: '#ffffff',
                        borderTopColor: '#e5e7eb',
                    },

                    tabBarIcon: ({ color, size }) => {
                        let icon;

                        if (route.name === 'Perfil') icon = 'person';
                        else if (route.name === 'Habilidades') icon = 'sparkles';
                        else icon = 'briefcase';

                        return <Ionicons name={icon} size={size} color={color} />;
                    },
                })}>
                <Tab.Screen name="Perfil" component={PerfilScreen} />
                <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
                <Tab.Screen name="Projetos" component={ProjetosScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
