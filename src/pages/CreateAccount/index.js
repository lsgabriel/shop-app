import React, {useState} from 'react';
import {View,Text, TouchableOpacity, ScrollView} from 'react-native';

import {useFonts, Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium} from '@expo-google-fonts/montserrat';
import styles from './styles';
import { Input, Icon, CheckBox } from '@rneui/themed';

import { useNavigation } from "@react-navigation/native";

const CreateAccount = () =>{

    const [check, setCheck] = useState(false);

    const navigation = useNavigation();

    let[fontsLoaded] = useFonts({
        Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium
    });

    if(!fontsLoaded){return null;}
    else{
        return(
            <ScrollView>
                <View style={styles.container}>
                    
                    <View style={styles.body}>
                        <Text style={styles.title}>Crie uma conta</Text>

                        <Input
                            placeholder="Nome" placeholderTextColor="#000" 
                            inputContainerStyle={styles.inputCss}
                        />

                        <Input
                            placeholder="Email" placeholderTextColor="#000" 
                            inputContainerStyle={styles.inputCss}
                        />

                        <Input
                            placeholder="Senha" placeholderTextColor="#000"
                            inputContainerStyle={styles.inputCss}
                            secureTextEntry 
                        />

                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <View style={styles.enterBtn}>
                                <Text style={styles.enterBtnText}>Criar Conta</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.spanText} >Ou crie uma conta com:</Text>

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

                        <CheckBox
                            center
                            title="Concordo com os termos de uso"
                            checked={check}
                            onPress={() => setCheck(!check)}

                            containerStyle={styles.spanText}
                            checkedColor={'#7A70F2'}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                        />
                    </View>
                    
                </View>
            </ScrollView>
        );
    }
}

export default CreateAccount;