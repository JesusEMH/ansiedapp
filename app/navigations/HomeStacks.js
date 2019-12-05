import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import InfoScreen from '../screens/Home/Info';

const HomeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: "Ansiedapp"
        })
    },
    Info: {
        screen: InfoScreen,
        navigationOptions: () => ({
            title: "Informacion"
        })
    }

});

export default HomeScreenStack;