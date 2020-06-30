import { StyleSheet } from 'react-native';
import { Main } from '../../AppStyles';

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    //margin: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#cccccc',
    //borderWidth: 0.5,
    //borderRadius: 20,
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    //color: '#333333',
    color: 'white',
    marginTop: 8,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1
  },
  categoriesPinkPrefixName: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff4ebd',
    marginTop: 5,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  categoriesBluePrefixName: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0189d7',
    marginTop: 5,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5,
    fontSize: 15,
    //textShadowColor: 'white',
    //textShadowOffset: {width:2,height:2},
    // textShadowRadius:2
  },
  headerBar: Main.headerBar,
  myCustomHeaderBackImage: {
    height: 14.5,
    width: 24,
    marginLeft: 9,
    marginRight: 12,
    marginVertical: 12,
    resizeMode: 'contain',
  },
  myCustomHeaderBackImageAlt: {
    tintColor: '#f00',
  },
});

export default styles;
