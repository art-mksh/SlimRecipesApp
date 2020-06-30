import { StyleSheet } from 'react-native';
import { RecipeCard,Main } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  headerBar: Main.headerBar
});

export default styles;
