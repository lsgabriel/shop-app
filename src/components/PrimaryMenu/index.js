import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';

import {useFonts, Montserrat_500Medium,Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';
import styles from './styles';

const PrimaryMenu = (props) =>{

    let[fontsLoaded] = useFonts({
        Montserrat_500Medium,Montserrat_600SemiBold
    });

    if(!fontsLoaded){return null;}
    else{
        return(
            <View style={styles.menu}>
                <View>
                    <Text style={styles.titleProduct} >{props.title}</Text>
                    <Text style={styles.titlePrice} >R$ {props.price}</Text>
                </View>

                <View style={styles.btn}>
                    <TouchableOpacity>
                        <Text style={styles.btnText}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default PrimaryMenu;
