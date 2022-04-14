import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from "../../Constants/Colors";
// import { pixelNormalize } from "../constants/Size";

export const TextBullet = ({ children }) => (
    <View style={styles.container}>
        {/*<Text style={{color:'gray'}}> {(index+1)}</Text>*/}
        <Text style={styles.label}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        padding: pixelNormalize(2),
        borderWidth: pixelNormalize(1),
        borderColor: Colors.primary,
        borderRadius: pixelNormalize(4)
    },
    label: {
        color: Colors.primary,
        fontSize: 16,
    },
});
