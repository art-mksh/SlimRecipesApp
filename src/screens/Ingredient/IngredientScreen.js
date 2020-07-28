import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import styles from './styles';
import {
  getIngredientUrl,
  getRecipesByIngredient,
  getCategoryName
} from '../../data/MockDataAPI';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

export default class IngredientScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerShown: false,
      title: navigation.getParam('name'),
      headerStyle: styles.headerBar
    };
  };

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const ingredientId = navigation.getParam('ingredient');
    const ingredientUrl = getIngredientUrl(ingredientId);
    const ingredientName = navigation.getParam('name');

    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
        <ImageBackground
          style={{
            resizeMode: 'cover',
            height:'100%',
            width:'100%'
          }}
          source={require('../../../assets/ScreenBackgroundImages/background-image-6.png')}
        >
         <CustomHeader  
              parent_title_name={'Все рецепты слаймов'} 
              parent_navigation={this.props.navigation} 
        />
          <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: 'grey' }}>
                <Image 
                      style={styles.photoIngredient} 
                      source={ingredientUrl} 
                />
              </View>
              <Text style={styles.ingredientInfo}>Рецепты с {ingredientName}:</Text>
              <View style={{ flex: 1}}>
                <FlatList
                  vertical
                  showsVerticalScrollIndicator={false}
                  numColumns={1}
                  data={getRecipesByIngredient(ingredientId)}
                  renderItem={this.renderRecipes}
                  keyExtractor={item => `${(item.recipeId)}`}
                  //keyExtractor={item => item.recipeId}
                />
              </View>
              </ImageBackground>
        </View>
      </View>
    );
  }
}
