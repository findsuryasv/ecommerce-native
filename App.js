import 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CartScreen from './src/Screens/CartScreen/CartScreen';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaView>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Cart" component={CartScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App;
