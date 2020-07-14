import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    /*
    flex: 1,
    alignItems: 'center',
    borderRadius: 180,
    padding: 8,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
    */
   //padding: 10,
   borderWidth:1,
   //borderColor:'rgba(0,0,0,0.2)',
   borderColor:'white',
   alignItems:'center',
   justifyContent:'center',
   width:50,
   height:50,
   backgroundColor:'#ff5ec7',
   borderRadius:25,
   overflow:"hidden",

  },
  btnIcon: {
    //padding:10,
    //opacity:1,
    //marginTop:5,
    height: 45,
    width: 45
  }
});

export default styles;
