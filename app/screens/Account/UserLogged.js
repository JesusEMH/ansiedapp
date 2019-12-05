import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import * as firebase from 'firebase';

console.ignoredYellowBox = [
    'Setting a timer'
];

export default function UserLogged() {
    return (
        <View style={styles.container}>
            <Icon

                name='apple-icloud'
                type='material-community'
                color='#517fa4'
                size={60}
            />
            <Text style={styles.text}>Ahora estas logueado!</Text>
            <Text style={styles.text}>Ahora puedes realizar encuestas y obtener estadisticas!</Text>
            <Button
                title="cerrar sesion" buttonStyle={styles.button} onPress={() => firebase.auth().signOut()} />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 20
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00a680",
        marginTop: 20
    }
});