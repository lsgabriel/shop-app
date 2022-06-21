import React from 'react';
import {View,Text, Button, TouchableOpacity} from 'react-native';

import {useFonts, Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium} from '@expo-google-fonts/montserrat';
import styles from './styles';
import { Input, Icon } from '@rneui/themed';

import { useNavigation } from "@react-navigation/native";

const Login = () =>{

    const navigation = useNavigation();

    let[fontsLoaded] = useFonts({
        Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium
    });

    if(!fontsLoaded){return null;}
    else{
        return(
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.title}>Faça Login com sua conta</Text>

                    <Input
                        placeholder="Email" placeholderTextColor="#000" 
                        inputContainerStyle={styles.inputCss}
                    />

                    <Input
                        placeholder="Senha" placeholderTextColor="#000"
                        inputContainerStyle={styles.inputCss}
                        secureTextEntry 
                    />

                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                        <View style={styles.enterBtn}>
                            <Text style={styles.enterBtnText}>Entrar</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.spanText} >Ou entre com:</Text>

                    <View style={styles.sociaMediaIcons}>
                        <TouchableOpacity>
                            <View style={styles.sociaMediaView} >
                                <Icon
                                    name="google-plus"
                                    type="font-awesome-5"
                                    color="white"
                                    size={33}
                                />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.sociaMediaView} >
                                <Icon
                                    name="facebook"
                                    type="font-awesome-5"
                                    color="white"
                                    size={33}
                                />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.sociaMediaView} >
                                <Icon
                                    name="twitter"
                                    type="font-awesome-5"
                                    color="white"
                                    size={34}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.spanText} >Ainda nao tem uma conta?</Text>

                    <TouchableOpacity onPress={()=>navigation.navigate('CreateAccount')}>
                        <Text style={styles.spanText2} >Crie uma nova</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Login;