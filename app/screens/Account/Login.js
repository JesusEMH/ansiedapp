import React, {useRef} from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import LoginForm from '../../components/Account/LoginForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-easy-toast';


export default function Login(props){
    const { navigation } = props;
    const toastRef = useRef();


    return(
        <KeyboardAwareScrollView>
            <View style={styles.viewContainer}>
            <Text style={styles.title}>CINCO TENEDORES</Text>
            </View>

            <View style={styles.formContainer}>
                <LoginForm toastRef={toastRef} />
            </View>

            <View style={styles.ButtonContainer}>
                <CreateAccount navigation={navigation} />
            </View>
            <Toast ref={toastRef} position="bottom" positionValue={180} opacity={0.5} />

        </KeyboardAwareScrollView>
        

    );
}


function CreateAccount(props){
    const { navigation } = props;
    return(
        <Text style={styles.textRegister} onPress={() => navigation.navigate("Register")}>
            Aun no tienes una cuenta?{" "}
            <Text style={styles.btnRegister}>Registrarte</Text>
        </Text>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    viewContainer: {
        flex: 1,
        width: "100%",
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10
    },
    formContainer: {
        flex: 2,
        width: "100%",
        marginRight: 10
    },
    ButtonContainer: {
        flex: 1,
        width: "100%",
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10
    },
    Divider: {
        backgroundColor: "#00a680",
        borderColor: "#00a680",
        margin: 40
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    btnRegister: {
        color: "#00a680",
        fontWeight: "bold"
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#00a680"
    }
    
});