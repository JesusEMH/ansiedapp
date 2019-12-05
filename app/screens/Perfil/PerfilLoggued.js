import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

import { firebaseApp } from '../../utils/FireBase';
import firebase from 'firebase/app';
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);

console.ignoredYellowBox = [
    'Setting a timer'
    ];

function PerfilLoggued(props) {
    const { navigation } = props;
    const [userInfo, setUserInfo] = useState("");
    const [stats, setStats] = useState("");


    useEffect(() => {
        const user = firebase.auth().currentUser;
        user.providerData.forEach(userInfo => {
            setUserInfo(userInfo);
            console.log(userInfo.email);


            var docRef = db.collection("puntuaciones").doc(userInfo.email);

            docRef.get().then(function (doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    setStats(doc.data());
                    console.log(stats);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
        });

    });




    return (
        <View style={styles.viewBody} centerContent={true}>
            <View style={styles.header}>
                <Icon
                    reverse
                    name='emoticon-happy'
                    type='material-community'
                    color='#517fa4'
                    size={26}
                />
                <Text style={styles.description}>{userInfo.email}</Text>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.subtitle}>RESULTADOS</Text>
                    <Stats nombre="Apetito" stats={stats.apetito} />
                    <Stats nombre="Consumo de sustancias" stats={stats.consumo_de_sustancias} />
                    <Stats nombre="Depresion" stats={stats.depresion} />
                    <Stats nombre="Falta de concentracion" stats={stats.falta_de_concentracion} />
                    <Stats nombre="Falta de energia" stats={stats.falta_de_energia} />
                    <Stats nombre="Fatiga" stats={stats.fatiga} />
                    <Stats nombre="Inseguridad" stats={stats.inseguridad} />
                    <Stats nombre="Llamadas" stats={stats.llamadas} />
                    <Stats nombre="Llanto" stats={stats.llanto} />
                    <Stats nombre="Miedo irracional" stats={stats.miedo_irracional} />
                    <Stats nombre="Nerviosismo" stats={stats.nerviosismo} />
                    <Stats nombre="Preocupacion" stats={stats.preocupacion} />
                    <Stats nombre="Problemas cardiacos" stats={stats.problemas_de_salud} />
                    <Stats nombre="Trastornos de sueno" stats={stats.trastorno_de_sueño} />
                    <Stats nombre="Uso de aplicaciones" stats={stats.uso_del_celular} />

                    <Divider style={styles.divider} />
                    <View style={styles.icon}>
                        <Icon
                            name='chart-bar'
                            type='material-community'
                            color='#517fa4'
                            size={32}
                        />
                    </View>
                    <Text style={styles.megatitle}>PUNTAJE TOTAL: {stats.total} </Text>

                    {stats.total >= 300 ? (
                        <View style={styles.ansioso}>
                            <Text>CUIDADO, TIENES ANSIEDAD</Text>
                        </View>
                    ) : (
                            <View style={styles.resultado}>
                                <Text style={styles.center}>FELICIDADES! NO TIENES ANSIEDAD!</Text>
                            </View>

                        )}

                </View>
            </ScrollView>

        </View>

    );
}

function Stats(props) {
    const { nombre, stats } = props;

    return (
        <View style={styles.box}>
            <Text style={styles.subtitle}>{nombre}: </Text>
            <Text style={styles.description}>has obtenido <Text style={styles.stat}>{stats}</Text> puntos de 30 posibles. </Text>
        </View>
    );

}

export default withNavigation(PerfilLoggued);

const styles = StyleSheet.create({

    viewBody: {
        flex: 1,

    },
    header: {
        backgroundColor: '#00a680',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
        alignItems: 'center',
        color: 'white'

    },
    megatitle: {
        fontSize: 22,
        marginBottom: 15,
        textAlign: "center",
        alignItems: 'center',
        color: '#6870a2'

    },
    subtitle: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
        color: "#6870a2"
    },
    description: {
        marginBottom: 20,
        fontSize: 16
    },
    divider: {
        backgroundColor: 'gray',
        marginTop: 20,
        marginBottom: 20
    },
    resultado: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    ansioso: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        color: "red"
    },
    box: {
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        padding: 5,
        backgroundColor: "transparent",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#6870a2'
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    stat: {
        fontWeight: 'bold',
        color: '#00a680'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }

});