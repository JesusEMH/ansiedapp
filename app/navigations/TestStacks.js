import { createStackNavigator } from 'react-navigation-stack';
import TestScreen from '../screens/Test';
import PreguntaScreen from '../screens/Test/Pregunta';
import PreguntaIndexScreen from '../screens/Test/PreguntaIndex';

const TestScreenStack = createStackNavigator({
    Test: {
        screen: TestScreen,
        navigationOptions: () => ({
            title: "Test"
        })
    },
    Pregunta: {
        screen: PreguntaScreen,
        navigationOptions: props => ({
            title: props.navigation.state.params.variable.item.variable.tipo
        })
    },
    Index: {
        screen: PreguntaIndexScreen,
        navigationOptions: () => ({
            title: "Contesta!"
        })
    }

});

export default TestScreenStack;