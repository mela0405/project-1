
import LoginScreen from './src/screens/LoginScreen';
import MenuScreen from './src/screens/MenuScreen';
import ReportScreen from './src/screens/ReportScreen';
import ContinueScreen from './src/screens/ContinueScreen';
import CicloScreen1 from './src/screens/CicloScreen1';
import CicloScreen2 from './src/screens/CicloScreen2';
import PrincipalScreen from './src/screens/PrincipalScreen';
import UsoDeUsesate from './src/hooks/UsoDeUsesate';
import ManejoDeEstados from './src/hooks/ManejoDeEstados';
import Prueba from './src/hooks/Prueba';
import Prueba2 from './src/hooks/Prueba2';
import Formulario from './src/hooks/Formulario';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App(props) {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="principal" component={PrincipalScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="menu" component={MenuScreen} />
        <Stack.Screen name="report" component={ReportScreen} />
        <Stack.Screen name="continue" component={ContinueScreen} />
        <Stack.Screen name="ciclo" component={CicloScreen1} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

