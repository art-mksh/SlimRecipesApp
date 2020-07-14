import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerButtonContainer: {
    /*
    padding: 10,
    
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius:25
    */

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
  headerButtonImage: {
    justifyContent: 'center',
    width: 40,
    height: 35,
    margin: 6,
  }
});

export default styles;
