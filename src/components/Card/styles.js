import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card:{
        width:'47%',height:250,marginTop:5,borderWidth:1,borderColor:"#D7D5D5",borderRadius:11,
    },
    cardImage:{
        width: '100%',height:'75%',borderTopRightRadius:11,borderTopLeftRadius:11,
    },
    cardText:{
        backgroundColor:'#F5F5F5',borderBottomRightRadius:11,borderBottomLeftRadius:11,
    },
    text:{color:'#444242',fontSize:20,padding:2,textAlign:"center"},
    textPrice:{color:'#7A70F2',fontSize:17,padding:2,textAlign:"center",fontFamily:"Montserrat_500Medium"},
})

export default styles;