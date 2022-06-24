import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

import {useFonts, Montserrat_400Regular,Montserrat_500Medium,Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';
import styles from './styles';
import { Input, Icon } from '@rneui/themed';

import { useNavigation } from "@react-navigation/native";
import Card from '../../components/Card';

const Home = () =>{

    const navigation = useNavigation();

    let[fontsLoaded] = useFonts({
        Montserrat_400Regular,Montserrat_500Medium,Montserrat_600SemiBold
    });

    if(!fontsLoaded){return null;}
    else{
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Bem vindo de volta</Text>

                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <Icon
                                name="logout"
                                color="black"
                                padding={4}
                                onPress={()=> navigation.navigate('Login')}
                                />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sectionContainer}>
                    <ImageBackground
                        source={require('../../../assets/background.png')} 
                        style={styles.section}  resizeMode='cover'
                    >
                        <Text style={styles.title}>Produtos com ate 50% de Desconto</Text>
                    </ImageBackground>
                    </View>

                    <Input
                        placeholder='Pesquisar' placeholderTextColor='#5A5555'
                        inputContainerStyle={styles.input}
                    />

                    <View style={styles.cardView}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Home;