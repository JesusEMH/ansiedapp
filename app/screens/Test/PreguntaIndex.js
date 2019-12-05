import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Divider, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import { firebaseApp } from '../../utils/FireBase';
import firebase from 'firebase/app';
import "firebase/firestore";
import { __values } from 'tslib';
const db = firebase.firestore(firebaseApp);

export default function PreguntaIndex(props) {

    const { navigation } = props;
    const { preguntas } = navigation.state.params;
    const { tipo } = navigation.state.params;

    const [Contestada, setContestada] = useState(false);
    const [userInfo, setUserInfo] = useState("");
    const [Puntaje, setPuntaje] = useState(0);
    console.log(tipo);
    console.log(Puntaje);

    const Click = async (number) => {
        setPuntaje(Puntaje + 1);
        setContestada(true);

        const user = firebase.auth().currentUser;
        await user.providerData.forEach(userInfo => {
            setUserInfo(userInfo);
            console.log(userInfo.email);

            switch (tipo) {
                case 'apetito':
                    db.collection("puntuaciones").doc(userInfo.email).update({
                        total: firebase.firestore.FieldValue.increment(number),
                        apetito: firebase.firestore.FieldValue.increment(number)
                    })
                        .then(function () {
                            console.log("Document successfully updated!");
                        });
                    break;
                case 'inseguridad':
                    db.collection("puntuaciones").doc(userInfo.email).update({
                        total: firebase.firestore.FieldValue.increment(number),
                        inseguridad: firebase.firestore.FieldValue.increment(number)
                    })
                        .then(function () {
                            console.log("Document successfully updated!");
                        });
                    break;
                case 'fatiga':
                    db.collection("puntuaciones").doc(userInfo.email).update({
                        total: firebase.firestore.FieldValue.increment(number),
                        fatiga: firebase.firestore.FieldValue.increment(number)
                    })
                        .then(function () {
                            console.log("Document successfully updated!");
                        });
                    break;
                case 'uso del celular':
                    db.collection("puntuaciones").doc(userInfo.email).update({
                        total: firebase.firestore.FieldValue.increment(number),
                        uso_del_celular: firebase.firestore.FieldValue.increment(number)
                    })
                        .then(function () {
                            console.log("Document successfully updated!");
                        });
                    break;
                case 'nerviosismo':
                    db.collection("puntuaciones").doc(userInfo.email).update({
                        total: firebase.firestore.FieldValue.increment(number),
                        nerviosismo: firebase.firestore.FieldValue.increment(number)
                    })
                        .then(function () {
                            console.log("Document successfully updated!");
                        });
                    break;
                case 'trastorno de sueño':
                    db.collection("puntuaciones").doc(userInfo.email).update({
                        total: firebase.firestore.FieldValue.increment(number),
                        trastorno_de_sueño: firebase.firestore.FieldValue.increment(number)
                    })
                        .then(function () {
                            console.log("Document successfully updated!");
                        });
                    break;
                case 'depresion':
                    db.collection("puntuaciones").doc(userInfo.email).update({
                        total: firebase.firestore.FieldValue.increment(number),
                        depresion: firebase.firestore.FieldValue.increment(number)
                    })
                        .then(function () {
                            console.log("Document successfully updated!");
                        });
                    break;

                case 'llanto':
                        db.collection("puntuaciones").doc(userInfo.email).update({
                            total: firebase.firestore.FieldValue.increment(number),
                            llanto: firebase.firestore.FieldValue.increment(number)
                        })
                            .then(function () {
                                console.log("Document successfully updated!");
                            });
                    break;
                 case 'miedo irracional':
                        db.collection("puntuaciones").doc(userInfo.email).update({
                            total: firebase.firestore.FieldValue.increment(number),
                            miedo_irracional: firebase.firestore.FieldValue.increment(number)
                        })
                            .then(function () {
                                console.log("Document successfully updated!");
                            });
                    break;
                case 'problemas de salud':
                        db.collection("puntuaciones").doc(userInfo.email).update({
                            total: firebase.firestore.FieldValue.increment(number),
                            problemas_de_salud: firebase.firestore.FieldValue.increment(number)
                        })
                            .then(function () {
                                console.log("Document successfully updated!");
                            });
                    break;
                case 'llamadas':
                        db.collection("puntuaciones").doc(userInfo.email).update({
                            total: firebase.firestore.FieldValue.increment(number),
                            llamadas: firebase.firestore.FieldValue.increment(number)
                        })
                            .then(function () {
                                console.log("Document successfully updated!");
                            });
                    break;
                case 'falta de concentracion':
                        db.collection("puntuaciones").doc(userInfo.email).update({
                            total: firebase.firestore.FieldValue.increment(number),
                            falta_de_concentracion: firebase.firestore.FieldValue.increment(number)
                        })
                            .then(function () {
                                console.log("Document successfully updated!");
                            });
                    break;
                    case 'consumo de sustancias':
                        db.collection("puntuaciones").doc(userInfo.email).update({
                            total: firebase.firestore.FieldValue.increment(number),
                            consumo_de_sustancias: firebase.firestore.FieldValue.increment(number)
                        })
                            .then(function () {
                                console.log("Document successfully updated!");
                            });
                    break;
                    case 'falta de energia':
                            db.collection("puntuaciones").doc(userInfo.email).update({
                                total: firebase.firestore.FieldValue.increment(number),
                                falta_de_energia: firebase.firestore.FieldValue.increment(number)
                            })
                                .then(function () {
                                    console.log("Document successfully updated!");
                                });
                        break;
                    case 'preocupacion':
                                db.collection("puntuaciones").doc(userInfo.email).update({
                                    total: firebase.firestore.FieldValue.increment(number),
                                    preocupacion: firebase.firestore.FieldValue.increment(number)
                                })
                                    .then(function () {
                                        console.log("Document successfully updated!");
                                    });
                        break;
                    

                default:
                
                    console.log("error");

            }


            /*if (tipo === "apetito") {
                db.collection("puntuaciones").doc(userInfo.email).update({
                    total: firebase.firestore.FieldValue.increment(number),
                    apetito: firebase.firestore.FieldValue.increment(number)
                })
                    .then(function () {
                        console.log("Document successfully updated!");
                    });
            }
            
            */



        });
    };



    if (Contestada === false) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{preguntas.question}</Text>
                </View>

                <ScrollView>
                    <View style={styles.Respuestas}>
                        <TouchableOpacity onPress={() => Click(1)}>
                            <Text style={styles.opcion}>{preguntas.resp01}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Click(2)}>
                            <Text style={styles.opcion}>{preguntas.resp02}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Click(3)}>
                            <Text style={styles.opcion}>{preguntas.resp03}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Click(4)}>
                            <Text style={styles.opcion}>{preguntas.resp04}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Click(5)}>
                            <Text style={styles.opcion}>{preguntas.resp05}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Click(6)}>
                            <Text style={styles.opcion}>{preguntas.resp06}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        );

    } else {
        return (
            <View style={styles.containerDos}>
                <Icon

                    name='check'
                    type='material-community'
                    color='white'
                    size={48}
                />
                <Text style={styles.description}>pregunta contestada con exito! haz click aqui para volver</Text>
                <Button
                    title="VOLVER"
                    containerStyle={styles.btnContainerLogin}
                    buttonStyle={styles.btnLogin}
                    onPress={() => navigation.navigate("Pregunta")}
                />
            </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    containerDos: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "#00a680"
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 10,
        textAlign: "center",
        color: 'white'
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center"
    },
    description: {
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10

    },
    opcion: {
        backgroundColor: 'transparent',
        color: "black",
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#6870a2',
        borderRadius: 20,
        textAlign: 'center'
    },
    btnContainerLogo: {
        marginTop: 40,
        width: "95%"
    },
    btnLogin: {
        backgroundColor: "#00a680"
    },
    header: {
        backgroundColor: '#00a680',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    Respuestas: {
        marginBottom: 60
    }
});
