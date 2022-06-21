import React from 'react';
import {View, Text} from 'react-native';

import {useFonts, Montserrat_400Regular, Montserrat_500Medium} from '@expo-google-fonts/montserrat';
import styles from './styles';

import { useNavigation } from "@react-navigation/native";


const Cart = () =>{

    const navigation = useNavigation();

    let[fontsLoaded] = useFonts({
        Montserrat_400Regular, Montserrat_500Medium
    });

    if(!fontsLoaded){return null;}
    else{
        return(
            <View style={styles.container}>
                <Text>Carrinho</Text>
            </View>
        );
    }

}

export default Cart;