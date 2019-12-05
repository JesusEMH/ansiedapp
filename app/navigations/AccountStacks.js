import { createStackNavigator } from 'react-navigation-stack';
import MyAccountScreen from '../screens/Account/MyAccount';
import LoginScreen from '../screens/Account/Login';
import RegisterScreen from '../screens/Account/Register';


const MyAccountScreenStack = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: () => ({
            title: "Mi cuenta"
        })
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: () => {
            title: 'login'
        }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: () => {
            title: 'Registro'
        }
    }

});

export default MyAccountScreenStack;