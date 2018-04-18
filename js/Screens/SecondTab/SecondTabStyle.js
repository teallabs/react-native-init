import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
     container:{
         width:'100%',
         height:'100%',
         justifyContent:"center",
         alignItems:"center",
         backgroundColor:"#fff",
         padding:32
     },
     buttonStyle: {
        width: '100%',
        height: 56,
        borderRadius: 28,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff2d55"
    },
    buttonText:{
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        width:'100%',
       
    }
});

export default styles;