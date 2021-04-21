import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { ButtonAv } from '../components/ButtonAv';

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}suas plantas{'\n'} de forma fácil.
            </Text>

            <Image source={wateringImg} style={styles.image} />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <ButtonAv title="Avançar" />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 50
    },
    subtitle: {
        fontSize: 16,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.heading,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        paddingHorizontal: 10
    },
    image: {
        width: 252,
        height: 244
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
})