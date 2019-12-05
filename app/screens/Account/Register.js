import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../../components/Account/RegisterForm';
import Toast from 'react-native-easy-toast';

export default function Register(){
    const toastRef = useRef();
    return(
        <KeyboardAwareScrollView>
            <Text style={styles.title}>REGISTRATE</Text>
            <View style={styles.viewForm}>
                <RegisterForm toastRef={toastRef}/>
            </View>
            <Toast ref={toastRef} position="bottom" positionValue={220} opacity={0.5} />
        </KeyboardAwareScrollView>
 
    );
}

const styles = StyleSheet.create({
    viewForm: {
        marginRight: 40,
        marginLeft: 40
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#00a680",
        textAlign: 'center'
    }

});