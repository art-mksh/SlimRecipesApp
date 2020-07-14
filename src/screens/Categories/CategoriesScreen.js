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
  Animated
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
    this.PinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');
    this.PressedPinkButtonBgImage  = require('../../../assets/ButtonBackgroundImage/pink-btn-bg-pressed.png');
    this.BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');
    this.PressedBlueButtonBgImage  = require('../../../assets/ButtonBackgroundImage/blue-btn-bg-pressed.png');

    this.state = {
      firstButtonState: this.PinkButtonBgImage , 
      secondButtonState: this.BlueButtonBgImage,
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
        <Animated.View>
          <TouchableHighlight 
            underlayColor='rgba(73,182,77,0.9)' 
            //onPress={() => this.onPressCategory(item)} 
            onPress={(e) => { 
              
              const module_this = this;
              if(index % 2 == 0){

                 module_this.setState({ secondButtonState :  module_this.PressedBlueButtonBgImage });
                 setTimeout(function run() {
                   module_this.setState({ secondButtonState :  module_this.BlueButtonBgImage });
                   module_this.onPressCategory(item)
                 }, 100);

              }else{
                 
               module_this.setState({ firstButtonState :  module_this.PressedPinkButtonBgImage });
               setTimeout(function run() {
                 module_this.setState({ firstButtonState :  module_this.PinkButtonBgImage });
                 module_this.onPressCategory(item)
               }, 100);


              }

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
                source={(index % 2 == 0 ? (this.state.secondButtonState) : (this.state.firstButtonState))}
                //source={(index % 2 == 0 ? (this.state.firstButtonState) : (this.state.secondButtonState))}
              >
                <View style={styles.categoriesItemContainer}>
                  <Text style={styles.categoriesName}>{item.categories_screen_name}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableHighlight>
        </Animated.View>

      </View>
    </View>
  );



  render() {

    console.log(this.state);
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
