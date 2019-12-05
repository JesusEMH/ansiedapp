import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Icon} from 'react-native-elements';

export default function Home() {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>ANSIEDAD!</Text>
            <Icon
                    reverse
                    name='cellphone-iphone'
                    type='material-community'
                    color='#517fa4'
                    size={32}
                />
            <Text style={styles.text}>La ansiedad es un mecanismo de supervivencia del cuerpo humano para adaptarnos a situaciones nuevas.</Text>
            <Text style={styles.text}>La ansiedad en Exceso ya no es saludable y suele ser perjudicial y genera un "Trastorno de ansiedad".</Text>
            <Text style={styles.text}>en algunos casos, este mecanismo funciona de forma alterada, es decir, produce problemas de salud y, en lugar de ayudarnos, nos incapacita.</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#517fa4',
        marginBottom: 10
    },
    text: {
        textAlign: 'center',
        marginBottom: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00a680",
        marginTop: 20
    }
});
