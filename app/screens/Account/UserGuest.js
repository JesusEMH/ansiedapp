import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

console.ignoredYellowBox = [
    'Setting a timer'
];

function UserGuest(props) {
    const { navigation } = props;

    return (
        <View style={styles.viewBody} centerContent={true}>
            <Icon
                reverse
                name='lock-open'
                type='material-community'
                color='#517fa4'
                size={26}
            />
            <Text style={styles.title}>
                consulta tu perfil de Ansiedapp!
            </Text>

                <Button buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    title="ver tu perfil"
                    onPress={() => navigation.navigate("Login")}
                />
          

        </View>

    );
}

export default withNavigation(UserGuest);

const styles = StyleSheet.create({

    viewBody: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 10
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
    viewBtn: {
        flex: 1,
        alignItems: 'center'
    },
    btnStyle: {
        backgroundColor: "#00a680"
    },
    btnContainer: {
        width: '70%'
    }

});