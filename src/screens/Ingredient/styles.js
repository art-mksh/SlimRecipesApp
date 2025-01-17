import { StyleSheet } from 'react-native';
import { Main,RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  titleIngredient: {
    fontWeight: 'bold',
    fontSize: 20
  },
  photoIngredient: {
    width: '100%',
    height: 250,
    alignSelf: 'center'
  },
  ingredientInfo: {
    color: 'black',
    margin: 10,
    fontSize: 19,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  headerBar: Main.headerBar,
  mainContainer:{
    //width: '100%',
    //height:'100%'
  }
});

export default styles;
