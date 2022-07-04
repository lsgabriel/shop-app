import React from 'react';
import { View, Text ,TouchableOpacity } from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import styles from './styles';

import { useNavigation } from "@react-navigation/native";
import PrimaryMenu from '../../components/PrimaryMenu';

const Cart = () => {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular, Montserrat_500Medium
    });

    if (!fontsLoaded) { return null; }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.title}>Carrinho</Text>

                    <View>
                        <PrimaryMenu  title="Nike X" price="200.00" />

                        <PrimaryMenu  title="Nike Y" price="250.00" />

                        <PrimaryMenu  title="Nike Z" price="230.00" />

                        <PrimaryMenu  title="Nike W" price="210.00" />
                    </View>

                    <View style={styles.Btn}>
                        <TouchableOpacity>
                            <Text style={styles.BtnText}>Finalizar Compra</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

}

export default Cart;