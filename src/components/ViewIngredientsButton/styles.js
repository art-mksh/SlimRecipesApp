import { StyleSheet,Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,

    //width: 270,
    width: width/2.2,

    //marginTop: 20,
    //marginLeft: 10,
    //marginRight: 10,
    borderRadius: 100,
    //borderColor: '#2cd18a',
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
     //backgroundColor: '#ff5ec7'
  },
  text: {
    fontSize: 16,
    fontWeight:"bold",
    textAlign:"center",

    //color: '#2cd18a'
    color: 'white'
  }
});

export default styles;
