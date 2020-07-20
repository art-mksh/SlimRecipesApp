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

    //const BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');
    //const PressedBlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg-pressed.png');

    //const PinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');
    //const PressedPinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg-pressed.png');

    //const BlueBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-5.png');
    //const PinkBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-3.png');

    //this.BlueButtonBgImage = BlueButtonBgImage;
    //this.PressedBlueButtonBgImage = PressedBlueButtonBgImage;

    //this.PinkButtonBgImage = PinkButtonBgImage;
    //this.PressedPinkButtonBgImage = PressedPinkButtonBgImage;

    //this.BlueBackgroundImage = BlueBackgroundImage;
    //this.PinkBackgroundImage = PinkBackgroundImage;

    const { navigation } = props;
    const item = navigation.getParam('category');
    const recipesArray = getRecipes(item.id);
    const recipeArrayLength = recipesArray.length;
    console.log(recipeArrayLength);

    let CurrentScreenDefaultButtonState, CurrentScreenPressedButtonState;

    //this.props.navigation.state.params.title
    //console.log(navigation.state.params.title);

    if (navigation.state.params.title === 'Виды слаймов') { 

      const BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');
      const PressedBlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg-pressed.png');
      const PinkBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-3.png');
      
      this.BlueButtonBgImage = BlueButtonBgImage;
      this.PressedBlueButtonBgImage = PressedBlueButtonBgImage;

      this.PinkBackgroundImage = PinkBackgroundImage;


      CurrentScreenDefaultButtonState = BlueButtonBgImage;
      CurrentScreenPressedButtonState = PressedBlueButtonBgImage;
      
      this.DefaultButtonImage = BlueButtonBgImage;
      this.PressedButtonImage = PressedBlueButtonBgImage;

    } else {

      const PinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');
      const PressedPinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg-pressed.png');
      const BlueBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-5.png');

      this.BlueBackgroundImage = BlueBackgroundImage;
      this.PinkButtonBgImage = PinkButtonBgImage;

      this.PressedPinkButtonBgImage = PressedPinkButtonBgImage;

      CurrentScreenDefaultButtonState = PinkButtonBgImage;
      CurrentScreenPressedButtonState = PressedPinkButtonBgImage;

      this.DefaultButtonImage = PinkButtonBgImage;
      this.PressedButtonImage = PressedPinkButtonBgImage;

    }

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
    <View>
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

            }, 300);

          }}

        >
          <ImageBackground
            imageStyle={{
              resizeMode: 'stretch'
            }}
            style={{
              flex: 1,
            }}
            //source={(index % 2 == 0 ? (this.state.secondButtonState) : (this.state.firstButtonState))}
            //source={(this.props.navigation.state.params.title === 'Виды слаймов' ? (this.state.secondButtonState) : (this.state.firstButtonState))}
          //source={(this.props.navigation.state.params.title  === 'Виды слаймов' ?  this.BlueButtonBgImage :this.PinkButtonBgImage)}
          source={(this.state.buttonStatesArray[index])}
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
          source={(this.props.navigation.state.params.title === 'Виды слаймов' ? this.PinkBackgroundImage : this.BlueBackgroundImage)}
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
