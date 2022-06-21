import React from 'react';
import {View,Text, Button} from 'react-native';

import {useFonts, Montserrat_300Light, Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import styles from './styles';

import { useNavigation } from "@react-navigation/native";

const Home = () =>{

    const navigation = useNavigation();

    let[fontsLoaded] = useFonts({
        Montserrat_300Light, Montserrat_400Regular
    });

    if(!fontsLoaded){return null;}
    else{
        return(
            <View style={styles.container}>
                <Text>Home</Text>

                <Button title="LOGOFF" onPress={()=>navigation.navigate('Login')} />
            </View>
        );
    }
}

export default Home;