import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function TestGuest() {

    return (
        <View style={styles.viewBody} centerContent={true}>
            <Icon
                name='emoticon-sad'
                type='material-community'
                color='#517fa4'
                size={60}
            />
            <Text style={styles.title}>CASI ESTAS LISTO!</Text>
            <Text style={styles.description}>Inicia sesion para que podamos medir tu nivel de ansiedad! entra ya!</Text>

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
        justifyContent: 'center',
        alignItems: 'center',
        color: '#517fa4'
    },
    description: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20
    }

});