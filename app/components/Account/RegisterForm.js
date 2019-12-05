import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import { validateEmail } from '../../utils/Validation';
//import * as firebase from 'firebase';
import { firebaseApp} from '../../utils/FireBase';
import firebase from 'firebase/app'; 
import "firebase/firestore";

import Loading from '../Loading';
import {withNavigation} from 'react-navigation';
const db = firebase.firestore(firebaseApp);

function RegisterForm(props){

    const {toastRef, navigation} = props;

    const [HidePassword, setHidePassword] = useState(true);
    const [HideRepeatPassword, setHideRepeatPassword] = useState(true);

    const [isVisibleLoading, setIsVisibleLoading] = useState(false);

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [RepeatPassword, setRepeatPassword] = useState("");

    const register = async () => {
        setIsVisibleLoading(true);

        if(!Email || !Password || !RepeatPassword){
            toastRef.current.show("Todos los campos son obligatorios");
        }else{
            if(!validateEmail(Email)){
                toastRef.current.show("El email no es correcto");
            }else{
                if(Password !== RepeatPassword){
                    toastRef.current.show("Las contrasenas no son iguales");
                }else{
                    await firebase.auth().createUserWithEmailAndPassword(Email, Password).then(() => {
                        db.collection("puntuaciones").doc(Email).set({
                            apetito: 0,
                            consumo_de_sustancias: 0,
                            depresion: 0,
                            falta_de_energia: 0,
                            falta_de_concentracion: 0,
                            fatiga: 0,
                            inseguridad: 0,
                            llamadas: 0,
                            llanto: 0,
                            miedo_irracional: 0,
                            nerviosismo: 0,
                            preocupacion: 0,
                            problemas_de_salud: 0,
                            trastorno_de_sueño: 0,
                            uso_del_celular: 0,
                            total: 0,
                            usuario: Email

                        })
                        .then(function() {
                            console.log("Document successfully written!");
                        })
                        .catch(function(error) {
                            console.error("Error writing document: ", error);
                        });
                        navigation.navigate("MyAccount");
                    })
                    .catch(() => {
                        toastRef.current.show("Error al crear la cuenta, intentelo mas tarde");
                    });
                }
            }
        }
        setIsVisibleLoading(false);

    
    };
 

    return(
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo Electronico"
                containerStyle={styles.inputForm}
                onChange={e => setEmail(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconForm}
                     />
                }
                 />
            <Input
                placeholder="Contrasena"
                password={true}
                secureTextEntry={HidePassword}
                containerStyle={styles.inputForm}
                onChange={e => setPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={HidePassword ? "eye-outline" : "eye-off-outline"}
                        iconStyle={styles.iconForm}
                        onPress={() => setHidePassword(!HidePassword)}
                     />
                }
                 />   
            <Input
                placeholder="Repetir Contrasena"
                password={true}
                secureTextEntry={HideRepeatPassword}
                containerStyle={styles.inputForm}
                onChange={e => setRepeatPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={HideRepeatPassword ? "eye-outline" : "eye-off-outline"}
                        iconStyle={styles.iconForm}
                        onPress={() => setHideRepeatPassword(!HideRepeatPassword)}
                     />
                }
                 />  
            <Button
                title="Unirse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={register} />  
            <Loading text="creando cuenta" isVisible={isVisibleLoading} />     
        </View>
    );
}
export default withNavigation(RegisterForm);
const styles = StyleSheet.create({
    formContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    iconForm: {
        color: "#c1c1c1"
    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    btnContainerRegister: {
        marginTop: 20,
        width: "95%"
    },
    btnRegister: {
        backgroundColor: "#00a680"
    }
});