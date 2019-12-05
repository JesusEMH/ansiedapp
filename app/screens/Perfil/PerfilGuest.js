import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function PerfilGuest() {

    return (
        <View style={styles.viewBody} centerContent={true}>
            <Icon
                name='google-analytics'
                type='material-community'
                color='#517fa4'
                size={60}
            />
            <Text style={styles.title}>NO HAY ESTADISTICAS!</Text>
            <Text style={styles.description}>Inicia sesion y realiza las pruebas para que puedas tener estadisticas en esta seccion!</Text>

        </View>

    );
}


const styles = StyleSheet.create({

    viewBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
        color: "#517fa4"
    },
    description: {
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 20
    }

});