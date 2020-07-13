import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageBackground
} from 'react-native';
import styles from './styles';
import { getRecipes, getCategoryName } from '../../data/MockDataAPI';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

export default class RecipesListScreen extends React.Component {


  static navigationOptions = ({ navigation }) => ({
    headerShown: false,

    title: navigation.getParam('title'),
    //headerTransparent: true,
    headerStyle: {
      shadowOpacity: 0,
      shadowOffset: {
        height: 0
      },
      shadowRadius: 0,
      borderBottomWidth: 0,
      opacity: 1
    },
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />,
  });

  constructor(props) {
    super(props);

    this.BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');

    this.PinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');

    this.BlueBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-5.png');

    this.PinkBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-3.png');

  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };




  renderRecipes = ({ item }) => (
    <View>
      <View style={{
        flex: 1,
        marginTop: 20,
      }}>
        <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
          <ImageBackground
            imageStyle={{
              resizeMode: 'stretch'
            }}
            style={{
              flex: 1,
            }}
            source={(this.props.navigation.state.params.title  === 'Виды слаймов' ?  this.BlueButtonBgImage :this.PinkButtonBgImage)}
          >
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    </View>
  );

  render() {

    const { navigation } = this.props;


    const item = navigation.getParam('category');
    const recipesArray = getRecipes(item.id);
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{
            flex: 1,
            resizeMode: 'cover'
          }}
          source={(this.props.navigation.state.params.title  === 'Виды слаймов' ?  this.PinkBackgroundImage :this.BlueBackgroundImage)}
        >
          <CustomHeader
            parent_title_name={navigation.getParam('title')}
            parent_navigation={this.props.navigation}
          />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={recipesArray}
              renderItem={this.renderRecipes}
              keyExtractor={item => `${item.recipeId}`}
              style={{ paddingTop: 30 }}
            />
          </View>
        </ ImageBackground>
      </View>
    );
  }
}
