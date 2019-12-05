import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import Loading from '../components/Loading';
import PerfilGuest from './Perfil/PerfilGuest';
import PerfilLoggued from './Perfil/PerfilLoggued';
import { YellowBox } from 'react-native';
import _ from 'lodash';



YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default function Perfil() {

    const [ Login, setLogin ] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
           !user ? setLogin(false) : setLogin(true);

        });

    }, []);

    if(Login === null){
        return <Loading isVisible={true} text="Cargando..." />;
    }


    return Login ? <PerfilLoggued/> : <PerfilGuest/>;    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});