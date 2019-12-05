import React from 'react';
import {Icon} from 'react-native-elements';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreenStacks from './HomeStacks';
import TestScreenStacks from './TestStacks';
import PerfilScreenStacks from './PerfilStacks';
import MyAccountScreenStacks from './AccountStacks';

const NavigationStacks = createBottomTabNavigator({
    Home: {
        screen: HomeScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Inicio",
            tabBarIcon: ({tintColor}) => (
                <Icon type="material-community" name="compass-outline" size={22} color={tintColor} />
            )

        })
    },
    Perfil: {
        screen: PerfilScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Mi Perfil",
            tabBarIcon: ({tintColor}) => (
                <Icon type="material-community" name="star-outline" size={22} color={tintColor} />
            )
        })
    },
    Test: {
        screen: TestScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Test",
            tabBarIcon: ({tintColor}) => (
                <Icon type="material-community" name="magnify" size={22} color={tintColor} />
            )
        })
    },
    MyAccount: {
        screen: MyAccountScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Mi cuenta",
            tabBarIcon: ({tintColor}) => (
                <Icon type="material-community" name="home-outline" size={22} color={tintColor} />
             )
        })
    }

},{
    initialRouteName: "Home",
    order: ["Home","Perfil","Test", "MyAccount"],
    tabBarOptions: {
        inactiveTintColor: "#646464",
        activeTintColor: "#00a680"
    }
});

export default createAppContainer(NavigationStacks);