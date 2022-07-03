import React from 'react';
import { View, Text } from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import styles from './styles';

import { useNavigation } from "@react-navigation/native";
import SecondaryMenu from '../../components/SecondaryMenu';

const Profile = () => {

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular, Montserrat_500Medium
    });

    if (!fontsLoaded) { return null; }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.title}>Perfil</Text>

                    <View>
                        <SecondaryMenu title='Formas Pagamento' subTitle="Ver as formas de pagamento" iconName="shopping-cart" />

                        <SecondaryMenu title='Notificações' subTitle="Gerencia as notificações" iconName="bell" />

                        <SecondaryMenu title='Configurações' subTitle="Configure o App" iconName="wrench" />

                        <SecondaryMenu title='Sair' subTitle="Sair da sessão atual" iconName="door-closed" />
                    </View>
                </View>
            </View>
        );
    }

}

export default Profile;