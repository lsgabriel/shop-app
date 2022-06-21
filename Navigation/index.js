import React from "react";
import StackNavigation from "./StackNavigation";
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () =>{
    return(
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    )
}

export default Navigation;
