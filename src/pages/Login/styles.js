import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center',},
    body:{width:'90%',height:'100%',marginTop:'50%',alignItems:'center',},
    title:{fontSize:24,fontFamily:'Montserrat_500Medium',marginBottom:40},

    inputCss:{backgroundColor:"#CACCFC",borderRadius:12,borderBottomWidth:0,padding:10,},

    enterBtn:{backgroundColor:"#7A70F2",borderRadius:12,borderBottomWidth:0,padding:15,width:300,marginBottom:20},
    enterBtnText:{color:"white",fontFamily:'Montserrat_500Medium',fontSize:22,textAlign:"center"},

    spanText:{fontSize:15,fontFamily:"Montserrat_400Regular",color:"#000000"},
    spanText2:{fontSize:15,fontFamily:"Montserrat_500Medium",color:"#31298C"},

    sociaMediaIcons:{
        flexDirection:'row',width:250,marginTop:10,marginBottom:10,
        display:"flex",justifyContent:"space-around",
    },
    sociaMediaView:{backgroundColor:'#7A70F2',padding:15,borderRadius:16},
})

export default styles;