import * as React from 'react';
/* import { Text } from 'react-native'; */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import {HomeNavigation, CartNavigation, ProfileNavigation} from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function ShowBottomTabs(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{height:46,backgroundColor:'whitesmoke'}}}>

            <Tab.Screen name='HomeTab' component={HomeNavigation}
                    options={{
                        tabBarIcon:({focused})=>(
                            <>
                                <IconMaterial
                                    name='payment' size={22} color={focused ? '#7A70F2' : 'gray'}
                                />
                            </>
                        )
                    }}
            />

            <Tab.Screen name='CartTab' component={CartNavigation}
                    options={{
                        tabBarIcon:({focused})=>(
                            <>
                                <Icon
                                    name='opencart' size={22} color={focused ? '#7A70F2' : 'gray'}
                                />
                            </>
                        )
                    }}
            />

            <Tab.Screen name='ProfileTab' component={ProfileNavigation}
                    options={{
                        tabBarIcon:({focused})=>(
                            <>
                                <Icon
                                    name='user' size={22} color={focused ? '#7A70F2' : 'gray'}
                                />
                            </>
                        )
                    }}
            />
        </Tab.Navigator>
    );
}