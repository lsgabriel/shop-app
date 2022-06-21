import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../src/pages/Login';
import CreateAccount from '../src/pages/CreateAccount';
import Home from '../src/pages/Home';
import Cart from '../src/pages/Cart';
import Profile from '../src/pages/Profile';

import ShowBottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

function StackNavigation(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login' >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={ShowBottomTabs} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}
export default StackNavigation;

export function LoginNavigation(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export function HomeNavigation(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export function CartNavigation(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
}

export function ProfileNavigation(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}