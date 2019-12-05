import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {Divider, Icon} from 'react-native-elements';

export default function Pregunta(props){

    const {navigation} = props;
    const {variable} = navigation.state.params.variable.item;
    const preguntas = variable.preguntas;
 
    
    //console.log(variable.preguntas.p01.question);
    console.log(preguntas);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon
                        
                        name='help-box'
                        type='material-community'
                        color='white'
                        size={48}
                    />
                <Text style={styles.description}>contesta todas las preguntas de "{variable.tipo}" para ir guardando tu puntaje.</Text>
            </View>
            <ScrollView>
                <ListPregunta preguntas={preguntas.p01} navigation={navigation} tipo={variable.tipo}  />
                <ListPregunta preguntas={preguntas.p02} navigation={navigation} tipo={variable.tipo}/>
                <ListPregunta preguntas={preguntas.p03} navigation={navigation} tipo={variable.tipo}/>
                <ListPregunta preguntas={preguntas.p04} navigation={navigation} tipo={variable.tipo}/>
                <ListPregunta preguntas={preguntas.p05} navigation={navigation} tipo={variable.tipo}/>
            </ScrollView>
        </View>
        

    );
}

function ListPregunta(props){
    const {preguntas} = props;
    const {tipo} = props;
    const {navigation} = props;

    console.log("las preguntas se estan leyendo");

    return(
        <TouchableOpacity onPress={() => navigation.navigate("Index", {preguntas, tipo},)}>
            <View>
                <Text style={styles.listIndex}>{preguntas.question.substr(0,35)}....</Text>
                 <Divider style={styles.divider} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center"
    },
    description: {
        textAlign: 'center',
        marginBottom: 20
    },
    listIndex:{
        color: "#6870a2",
        padding: 10,
        fontSize: 18
    },
    divider: {
        backgroundColor: 'gray'
    },
    list: {
        padding: 20,
        fontSize: 1.5,
        color: "#00a680"
    },
    header: {
        backgroundColor: '#00a680',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },

});
