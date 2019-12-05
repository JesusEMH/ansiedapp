import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import Loading from '../../components/Loading';
import UserGuest from  './UserGuest';
import UserLogged from './UserLogged';

console.ignoredYellowBox = [
    'Setting a timer'
    ];
    
export default function MyAccount() {

    const [ Login, setLogin ] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
           !user ? setLogin(false) : setLogin(true);

        });

    }, []);

    if(Login === null){
        return <Loading isVisible={true} text="Cargando..." />;
    }


    return Login ? <UserLogged/> : <UserGuest/>;    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});