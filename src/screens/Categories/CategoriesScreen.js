//TODO Дописать фоновый скрин у хедера

import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  ImageBackground,
  Header,
  Left,
  Button,
  Icon,
  Right,
  Animated,
  TouchableOpacity  
} from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';
import MenuImage from '../../components/MenuImage/MenuImage';
import ScreenBackground from '../../components/ScreenBackground/ScreenBackground';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import { LinearGradient } from 'expo-linear-gradient';



export default class CategoriesScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    headerShown: false,
    title: 'Как сделать лизуна',
    headerStyle: {
      shadowOpacity: 0,
      shadowOffset: {
        height: 0
      },
      shadowRadius: 0,
      borderBottomWidth: 0,
      elevation: 0,
      opacity: 1,
    },
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />,
  });

  



  constructor(props) {


    super(props);
    
    const categoriesArray = categories;
    const categoriesArrayLength = categoriesArray.length;
    let defaultButtonStatesArray = [],pressedButtonStatesArray = [], currentButtonsState = []; 
    let itr;
    let BlueScreenDefaultButtonState = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');
    let BlueScreenPressedButtonState = require('../../../assets/ButtonBackgroundImage/blue-btn-bg-pressed.png');
    let PinktScreenDefaultButtonState = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');
    let PinkScreenPressedButtonState = require('../../../assets/ButtonBackgroundImage/pink-btn-bg-pressed.png');

    for (itr = 0; itr < categoriesArrayLength; itr++) {

        if(itr % 2 == 0){

          defaultButtonStatesArray[itr] = BlueScreenDefaultButtonState;
          pressedButtonStatesArray[itr] = BlueScreenPressedButtonState;
          currentButtonsState[itr] = BlueScreenDefaultButtonState;

        }else{

          defaultButtonStatesArray[itr] = PinktScreenDefaultButtonState;
          pressedButtonStatesArray[itr] = PinkScreenPressedButtonState;
          currentButtonsState[itr] = PinktScreenDefaultButtonState;

        }

    }


    this.PinkButtonBgImage = PinktScreenDefaultButtonState;
    this.PressedPinkButtonBgImage  = PinkScreenPressedButtonState;
    this.BlueButtonBgImage = BlueScreenDefaultButtonState;
    this.PressedBlueButtonBgImage  = BlueScreenPressedButtonState;

    this.state = {
      firstButtonState: this.PinkButtonBgImage , 
      secondButtonState: this.BlueButtonBgImage,
      currentButtonsState: currentButtonsState,
      defaultButtonStatesArray: defaultButtonStatesArray,
      pressedButtonStatesArray: pressedButtonStatesArray
    };



    //this.setState({buttonPushed:true});
  }

  onPressCategory = item => {
    //console.log(item);
    const title = item.name;
    const category = item;

    this.props.navigation.navigate('RecipesList', { category, title });
  };


  renderCategory = ({ item, index }) => (
    <View>
      <Text style={(index % 2 == 0 ? styles.categoriesBluePrefixName : styles.categoriesPinkPrefixName)}>{index == 0 ? 'Выбери:' : 'или'}</Text>
      <View style={{
        flex: 1,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        elevation: 50,
      }}>
          <TouchableHighlight 
            underlayColor='rgba(105,105,105,0.9)' 
            onPress={(e) => { 
              
              const module_this = this;
              let currentButtonsState =  module_this.state.currentButtonsState;
              currentButtonsState[index] = module_this.state.pressedButtonStatesArray[index];
              module_this.setState({ currentButtonsState: currentButtonsState });

              setTimeout(function run() {

                currentButtonsState[index] = module_this.state.defaultButtonStatesArray[index];
                module_this.setState({ currentButtonsState: currentButtonsState });
  
                module_this.onPressCategory(item);
  
              }, 100);


            }}
           
          >
            <View >
              <ImageBackground
                imageStyle={{
                  resizeMode: 'stretch'
                }}
                style={{
                  flex: 1,
                }}
                source={(this.state.currentButtonsState[index])}
              >
                <View style={styles.categoriesItemContainer}>
                  <Text style={styles.categoriesName}>{item.categories_screen_name}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableHighlight>

      </View>
    </View>
  );



  render() {

    return (
      <View style={{ flex: 1 }} >
        <ImageBackground
          style={{
            flex: 1,
            resizeMode: 'cover'
          }}
          source={require('../../../assets/ScreenBackgroundImages/Categories/background-image.png')}
        >
          <CustomHeader
            parent_title_name={'Как сделать лизуна'}
            parent_navigation={this.props.navigation}
          />
          <View>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              data={categories}
              renderItem={this.renderCategory}
              keyExtractor={item => `${item.id}`}
              style={{ paddingTop: 50 }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
