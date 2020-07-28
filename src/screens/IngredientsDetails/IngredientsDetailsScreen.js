import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import styles from './styles';
import {
  getIngredientName,
  getAllIngredients,
} from '../../data/MockDataAPI';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

export default class IngredientsDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerShown: false,
      title: navigation.getParam('title'),
      headerTitleStyle: {
        fontSize: 16
      },
      headerStyle: styles.headerBar
    };
  };

  constructor(props) {
    super(props);
  }

  onPressIngredient = item => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };

  renderIngredient = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(220,220,220,0.9)' onPress={() => this.onPressIngredient(item[0])}>
      <View style={styles.container}>
        <Image 
          style={styles.photo} 
          //source={{ uri: item[0].photo_url }} 
          source={item[0].photo_url} 
        />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: 'grey' }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('ingredients');
    const ingredientsArray = getAllIngredients(item);

    return (
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
     
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={ingredientsArray}
            renderItem={this.renderIngredient}
            keyExtractor={item => `${(item.ingredientId)}`}
           //keyExtractor={item => (item.ingredientId*parseInt(Math.random()))}
          />
        </ImageBackground>
      </View>
    );
  }
}
