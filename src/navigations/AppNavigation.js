import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
/* import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' */



/* SCREENS */

import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';

/* (END) SCREENS */



/* COMPONENTS */

import CustomHeader from '../components/CustomHeader/CustomHeader';

/* (END) COMPONENTS */





/* const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  )
} */




/* */
import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';

import { StyleSheet } from 'react-native';

/*
const Header = props => (
  <View style={{justifyContent: 'flex-end'}}>
    <Text style={{ color: 'white', fontSize: 25}}>COMPANY LOGO</Text>
  </View>
);

const ImageHeader = props => {
  console.log('ImageHeader props', props);
  return(
    <View style={{height: 10, justifyContent: 'flex-end', padding: 5, backgroundColor: 'transparent'}}>
      <Image
        style={{ height: 10, position: 'absolute', top: 0, left: 0}}
        source={require('../../assets/images/bg-header.png')}
        resizeMode="cover"
      />
      <Header  style={{ backgroundColor: 'transparent' }}/>
    </View>
  );
}
*/

/* */

/*
const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen,  navigationOptions: {
      header: props => <CustomHeader {...props} />
    }},
    Categories:  CategoriesScreen,
    Recipe: {screen: RecipeScreen,  navigationOptions: {
      header: props => <CustomHeader {...props}/>
    }},
    RecipesList: {screen: RecipesListScreen,  navigationOptions: {
      header: props => <CustomHeader {...props} />
    }},
    Ingredient: {screen: IngredientScreen,  navigationOptions: {
      header: props => <CustomHeader {...props} />
    }},
    Search: {screen: SearchScreen,  navigationOptions: {
      header: props => <CustomHeader {...props} />
    }},
    IngredientsDetails: {screen: IngredientsDetailsScreen,  navigationOptions: {
      header: props => <CustomHeader {...props} />
    }}
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
      },
    })
  }
); 
*/
const MainNavigator = createStackNavigator(
  {
    Home:  HomeScreen,
    Categories:  CategoriesScreen,
    Recipe:  RecipeScreen, 
    RecipesList: RecipesListScreen,
    Ingredient:  IngredientScreen,  
    Search:SearchScreen, 
    IngredientsDetails: IngredientsDetailsScreen,
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

/*
const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Categories: {screen: CategoriesScreen,  navigationOptions: {
      //header: props => <ImageHeader  />
      header: props => <CustomHeader />
    }},
    //Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen
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
      },
    })
  }
); 
*/

/* const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      drawerContent={props=> DrawerContainer}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} */

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

/* export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} */
 
export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;