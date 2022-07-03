import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';

import {useFonts, Montserrat_500Medium,Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

const SecondaryMenu = (props) =>{

    let[fontsLoaded] = useFonts({
        Montserrat_500Medium,Montserrat_600SemiBold
    });

    if(!fontsLoaded){return null;}
    else{
        return(
            <View style={styles.menu}>
                <View>
                    <Text style={styles.titleProduct} >{props.title}</Text>
                    <Text style={styles.subtitle} >{props.subTitle}</Text>
                </View>

                <View style={styles.btn}>
                    <TouchableOpacity>
                        <Text style={styles.btnText}>
                            <Icon
                                name={props.iconName} size={22} color='white'
                            />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default SecondaryMenu;
