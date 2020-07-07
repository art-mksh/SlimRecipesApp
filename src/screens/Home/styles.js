import { StyleSheet } from 'react-native';
import { Main,RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  headerBar: Main.headerBar,
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
  categoriesName: {
    flex: 1,
    fontSize: 30,
    //fontWeight: 'bold',
    textAlign: 'center',
    //color: '#333333',
    color: 'white',
    marginTop: 8,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    fontFamily:'GUERRILLA-Normal'
  }
});

export default styles;
