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

    const { navigation } = props;
    const item = navigation.getParam('category');
    const recipesArray = getRecipes(item.id);
    const recipeArrayLength = recipesArray.length;

    let CurrentScreenDefaultButtonState, CurrentScreenPressedButtonState, CurrentScreenBackgroundImage;

    if (typeof(navigation.state.params.title) !== 'undefined' && navigation.state.params.title === 'Виды слаймов') { 

      CurrentScreenDefaultButtonState = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');
      CurrentScreenPressedButtonState = require('../../../assets/ButtonBackgroundImage/blue-btn-bg-pressed.png');
      CurrentScreenBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-3.png');

    } else {

      CurrentScreenDefaultButtonState = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');
      CurrentScreenPressedButtonState = require('../../../assets/ButtonBackgroundImage/pink-btn-bg-pressed.png');
      CurrentScreenBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-5.png');

    }


    this.DefaultButtonImage = CurrentScreenDefaultButtonState;
    this.PressedButtonImage = CurrentScreenPressedButtonState;
    this.ScreenDefaultBackgroundImage = CurrentScreenBackgroundImage;

    let buttonStatesArray = [];
    let itr;

    for (itr = 0; itr < recipeArrayLength; itr++) {
      buttonStatesArray[itr] = CurrentScreenDefaultButtonState;
    }

    this.state = {
      buttonStatesArray: buttonStatesArray,
    };

  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };




  renderRecipes = ({ item, index }) => (
      <View style={{
        flex: 1,
        marginTop: 20,
      }}>
        <TouchableHighlight
          underlayColor='rgba(105,105,105,0.9)'
          onPress={(e) => {

            const module_this = this;

            let currentButtonsState = module_this.state.buttonStatesArray;

            currentButtonsState[index] = module_this.PressedButtonImage;
            module_this.setState({ buttonStatesArray: currentButtonsState });

            setTimeout(function run() {

              currentButtonsState[index] = module_this.DefaultButtonImage;

              module_this.setState({ buttonStatesArray: currentButtonsState });

              module_this.onPressRecipe(item);

            }, 100);

          }}

        >
          <ImageBackground
            imageStyle={{
              resizeMode: 'stretch'
            }}
            style={{
              flex: 1,
            }}
          source={(this.state.buttonStatesArray[index])}
          >
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
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
          source={(this.ScreenDefaultBackgroundImage)}
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
              contentContainerStyle={{
                paddingTop: 10,
                //width:100
                //marginBottom:50
                paddingBottom:150
              
              }}
             
            />
          </View>
        </ ImageBackground>
      </View>
    );
  }
}
