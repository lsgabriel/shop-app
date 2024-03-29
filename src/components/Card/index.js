import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {useFonts, Montserrat_400Regular, Montserrat_500Medium} from '@expo-google-fonts/montserrat';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

const Card = (props) =>{

    const navigation = useNavigation();

    let[fontsLoaded] = useFonts({
        Montserrat_400Regular,Montserrat_500Medium
    });

    if(!fontsLoaded){return null;}
    else{
        return(
            <View style={styles.card}>
                <TouchableOpacity>
                    <Image
                        /* source={require('../../../assets/cardImg.jpeg')} */
                        source={props.img}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardText}>
                        <Text style={styles.text} >{props.title}</Text>
                        <Text style={styles.textPrice} >R$ {props.price}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}

export default Card;