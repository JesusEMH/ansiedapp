import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { Divider, Icon } from 'react-native-elements';


function TiposList(props){

    const { variables, isLoading, loadMore, navigation } = props;
    console.log(props);

    return(
        <View style={styles.viewBody} centerContent={true}>
            <View style={styles.header}>

           
  
                <Icon
                        
                        name='google-analytics'
                        type='material-community'
                        color='#517fa4'
                        size={48}
                    />
                <Text>Elige el tipo de test con el que vamos a comenzar a medir tu nivel de ansiedad.</Text>
             </View>
            {variables ? (
                <FlatList
                    style={styles.list} 
                    data={variables}
                    renderItem={variable => <Variable  variable={variable} navigation={navigation} />}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0}
                    ListFooterComponent={<FooterList isLoading={isLoading}/>}
                    />
            ) : (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" />
                    <Text style={styles.textOver}>Cargando tipos...</Text>
                    
                </View>
            )}
            
        </View>

    );
}


function Variable(props){
    const {variable, navigation} = props;
    const {tipo} = variable.item.variable;
    console.log(variable);

    return(
        <TouchableOpacity onPress={() => navigation.navigate("Pregunta", {variable})}>
            <View>
                
             <Text style={styles.listIndex}>{tipo}</Text>
             <Divider style={styles.divider} />
               
            </View>
        </TouchableOpacity>
    );
}

function FooterList(props){
    const {isLoading} = props;

    if(isLoading){
        return(
            <View style={styles.loadingTipos}>
                <ActivityIndicator size="large" />
            </View>
        );

    }else{
        return(
        <View style={styles.notFound}>
            <Text style={styles.textOver}>No quedan mas tipos por cargar...</Text>
        </View>
        );
    }

}

export default withNavigation(TiposList);

const styles = StyleSheet.create({

    viewBody: {
        flex: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center"
    },
    description: {
        textAlign: 'center',
        marginBottom: 30
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        alignItems: 'center'
    },
    list: {
        padding: 20,
        fontSize: 1.5,
        color: "#6870a2"
    },
    listIndex:{
        color: "#6870a2",
        padding: 10,
        fontSize: 20
    },
    divider: {
        backgroundColor: 'gray'
    },
    loadingTipos: {
        marginTop: 20,
        alignItems: 'center'
    },
    notFound: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: 'center'
    },
    loader:{
        marginTop: 20,
        marginBottom: 20
    },
    header: {
        backgroundColor: '#00a680',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    textOver: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20
    }

});