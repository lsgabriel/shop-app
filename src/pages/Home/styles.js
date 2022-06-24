import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    header:{flex:0,justifyContent:'space-between',width:'90%',flexDirection:"row",marginTop:35,marginBottom:15,},
    headerTitle:{fontSize:25,fontFamily:"Montserrat_500Medium"},

    sectionContainer:{width:screenWidth-30,},
    section:{width:'100%', height: 160,justifyContent:"center",alignItems:"center",marginTop:10,marginBottom:15},
    title:{color:'white',fontSize:23,fontFamily:"Montserrat_600SemiBold",},

    input:{backgroundColor:"#E7E7E7",borderRadius:12,borderBottomWidth:0,padding:10,justifyContent:"center",alignItems:"center",width:screenWidth-25},

    cardView:{width:screenWidth,flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"},
})

export default styles;