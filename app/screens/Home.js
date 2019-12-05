import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Icon} from 'react-native-elements';

export default function Home(props) {
    const {navigation} = props;
    return(
        <View style={styles.container}>
            <Text style={styles.title}>DETECTA TU NIVEL DE ANSIEDAD!</Text>
            <Icon
                    reverse
                    name='cellphone-iphone'
                    type='material-community'
                    color='#517fa4'
                    size={32}
                />
            <Text style={styles.text}>Realiza una serie de preguntas para que puedas logran saber tu nivel!</Text>
            <Button
                title="Saber mas sobre ansiedad"
                buttonStyle={styles.button}
                onPress={() => navigation.navigate("Info")}
            />
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
        textAlign: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00a680",
        marginTop: 20
    }
});
