import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    menu:{
        backgroundColor:'#38373C',marginBottom:5,padding:9,
        borderRadius:12,flexDirection:"row",justifyContent:"space-between"
    },
    titleProduct:{color:'white',fontSize:20,fontFamily:"Montserrat_500Medium",padding:3,},
    subtitle:{color:'whitesmoke',fontSize:15,padding:3,},

    btn:{backgroundColor:'#7A70F2',width:54,borderRadius:20,flex:0,justifyContent:'center',alignItems:'center'},
    btnText:{color:'white',fontSize:20,fontFamily:"Montserrat_600SemiBold",},
})

export default styles;