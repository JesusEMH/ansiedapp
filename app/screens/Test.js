import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Loading from '../components/Loading';
import TestGuest from './Test/TestGuest';
import TiposList from './Test/TiposList';

import { firebaseApp} from '../utils/FireBase'; 
import firebase from 'firebase/app'; 
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);

export default function Test(props) {

    const { navigation } = props;
    const [ Login, setLogin ] = useState(null);
    const [variables, setVariables] = useState([]);
    const [startVariables, setStartVariables] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [totalVariables, setTotalVariables] = useState(0);
    const limitVariables = 15;

    console.log(variables);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
           !user ? setLogin(false) : setLogin(true);

        });

    }, []);

    useEffect(() => {
        db.collection("variables").get().then(snap => {
           setTotalVariables(snap.size);
           console.log(snap.size);

        });

        (async () => {
            const resultVariables = [];
            const variables = db.collection('variables').orderBy("tipo", "asc").limit(limitVariables);

            await variables.get().then(response => {
                setStartVariables(response.docs[response.docs.length -1]);

                response.forEach(doc => {
                    let variable = doc.data();
                    variable.id = doc.id;
                    resultVariables.push({ variable });
                });
                setVariables(resultVariables);
            });
        })();
        

    }, []);

    const LoadMore = async () => {
        const resultVariables = [];
        variables.length < totalVariables && setIsLoading(true);

        const variablesDb = db.collection("variables").orderBy("tipo","asc").startAfter(startVariables)
                              .limit(limitVariables);

        await variablesDb.get().then(response => {
            if(response.docs.length > 0){
                setStartVariables(response.docs[response.docs.length -1]);
            }else{
                setIsLoading(false);
            }

            response.forEach(doc => {
                let variable = doc.data();
                variable.id = doc.id;
                resultVariables.push({ variable });
            });
            setVariables([...variables, ...resultVariables]);
        });
    };

    if(Login === null){
        return <Loading isVisible={true} text="Cargando..." />;
    }


    return Login ? <TiposList variables={variables} isLoading={isLoading} loadMore={LoadMore} /> : <TestGuest/>;    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});