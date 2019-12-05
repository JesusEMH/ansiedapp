import { createStackNavigator } from 'react-navigation-stack';
import PerfilScreen from '../screens/Perfil';

const PerfilScreenStack = createStackNavigator({
    Perfil: {
        screen: PerfilScreen,
        navigationOptions: () => ({
            title: "Mis estadisticas"
        })
    }

});

export default PerfilScreenStack;