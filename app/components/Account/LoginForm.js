import React, {useState} from 'react';
import {StyleSheet, View } from 'react-native';
import {Input, Icon, Button } from 'react-native-elements';
import { validateEmail } from '../../utils/Validation';
import * as firebase from 'firebase';
import Loading from '../Loading';
import {withNavigation} from 'react-navigation';


function LoginForm(props){

    const {toastRef, navigation} = props;
    const [ HidePassword, setHidePassword ] = useState(true);
    const [ Email, setEmail ] = useState("");
    const [ Password, setPassword ] = useState("");
    const [isVisibleLoading, setIsVisibleLoading] = useState(false);


    const login = async () => {
        setIsVisibleLoading(true);

        if(!Email || !Password){
            toastRef.current.show("Todos los campos son obligatorios");
        }else{
            if(!validateEmail(Email)){
                toastRef.current.show("El email no es correcto");
            }else{
                await firebase.auth().signInWithEmailAndPassword(Email, Password).then(() => {
                    navigation.navigate("MyAccount");
                })
                .catch(() => {
                    toastRef.current.show("Email o contrasena incorrecta");
                });
        }
    }

        setIsVisibleLoading(false);
 };   

    return(
        <View style={styles.formContainer}>
            <Input 
                placeholder="correo electronico"
                containerStyle={styles.inputForm}
                onChange={e => setEmail(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight} />
                } 
                />
            <Input 
                placeholder="contrasena"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={HidePassword}
                onChange={e => setPassword(e.nativeEvent.text)}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={HidePassword ? "eye-outline" : "eye-off-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setHidePassword(!HidePassword)} />
                } />
            <Button 
                title="iniciar sesion"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={login}  />
            <Loading isVisible={isVisibleLoading} text="Iniciando sesion" />    
        </View>
    );
}


export default withNavigation(LoginForm);

const styles  = StyleSheet.create({
    formContainer: {
        flex: 1,
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30
    },
    inputForm: {
        width: "100%",
        marginTop: 20,
        marginBottom: 20
    },
    iconRight: {
        color: "#c1c1c1"
    },
    btnContainerLogo: {
        marginTop: 40,
        width: "95%"
    },
    btnLogin: {
        backgroundColor: "#00a680"
    }

});