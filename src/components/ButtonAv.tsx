import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from '../styles/colors';

interface ButtonProps {
    title: string;
}

export function ButtonAv({ title }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.3}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        paddingHorizontal: 10
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
})