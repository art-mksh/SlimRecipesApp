import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'


/* SCREENS */

import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import InstructionsScreen from '../screens/Instructions/InstructionsScreen';

/* (END) SCREENS */


/* COMPONENTS */

import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';

/* (END) COMPONENTS */


const MainNavigator = createStackNavigator(
  {
    Home:  HomeScreen,
    Categories:  CategoriesScreen,
    Recipe:  RecipeScreen, 
    RecipesList: RecipesListScreen,
    Ingredient:  IngredientScreen,  
    Search:SearchScreen, 
    IngredientsDetails: IngredientsDetailsScreen,
    Instructions: InstructionsScreen,
  },
  {
    //initialRouteName: 'Home',
    initialRouteName: 'Categories',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        backgroundColor: 'transparent',
      }
    })
  }
); 

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer,
  }
);

 
export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;