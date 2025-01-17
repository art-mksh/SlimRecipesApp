import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
const RecipeCard = StyleSheet.create({
  container: {
    //sflex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: RECIPE_ITEM_MARGIN,
    //marginTop: 20,
    //width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    //height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    //borderWidth: 0.5,
    //borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    /*
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
    */
    flex: 1,
    fontSize: 27,
    //fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 3,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 5,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    fontFamily:'GUERRILLA-Normal'

  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }
});

const Main =  StyleSheet.create({
  headerBar: {
    backgroundColor: '#f4511e',
          elevation: null,
          shadowOpacity: 0.9
          
  }
});

export {RecipeCard,Main};
