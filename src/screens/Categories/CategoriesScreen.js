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
  Right
} from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';
import MenuImage from '../../components/MenuImage/MenuImage';
import ScreenBackground from '../../components/ScreenBackground/ScreenBackground';
import CustomHeader from '../../components/CustomHeader/CustomHeader';



export default class CategoriesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false,

    title: 'Как сделать лизуна',
    //headerTransparent: true,
    headerStyle: {
      shadowOpacity: 0,
      shadowOffset: {
        height: 0
      },  
      shadowRadius: 0,
      borderBottomWidth: 0,
      elevation: 0,
      //backgroundColor: '#000',
      //backgroundColor: 'rgba(52, 52, 52, 0.8)',
      opacity: 1
    },
    

    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />,
    //headerBackImage: () => 
    //  <MyCustomHeaderBackImage style={styles.myCustomHeaderBackImageAlt} />
    //,
    //headerTitle: () => <ImageBackground resizeMode="contain"  style={{ height: 50 }} source={require('../../../assets/images/bg-header.png')} ><Text>Как сделать лизуна</Text></ImageBackground>,

  });

  constructor(props) {
    super(props);
    this.PinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg-4.png');
    this.BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');

  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('RecipesList', { category, title });
  };
  /*
  renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
      </View>
    </TouchableHighlight>
  );
  */

  //static PinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');
  //static BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');

  renderCategory = ({ item, index }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressCategory(item)}>
      <View>
        <Text style={(index % 2 == 0?styles.categoriesBluePrefixName:styles.categoriesPinkPrefixName)}>{index == 0 ? 'Выбери:' : 'или'}</Text>
        <ImageBackground
        style={{
          flex: 1,
          resizeMode: 'cover', // or 'stretch'
          marginTop: 20,
          marginLeft:25,
          marginRight:25,
          //height: 50,
          //width: 170,
          textShadowColor: 'black',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 5,
          shadowOpacity:0.4,
          elevation: 5,
        }}
        source={(index % 2 == 0?this.PinkButtonBgImage:this.BlueButtonBgImage)}
      >
        <View style={styles.categoriesItemContainer}>
          <Text style={styles.categoriesName}>{item.categories_screen_name}</Text>
        </View>
        </ImageBackground>

      </View>
    </TouchableHighlight>
  );

/*
  render() {

    return (

      <View style={{ flex: 1 }} >
        <ImageBackground style={{
          flex: 1,
          resizeMode: 'cover'
        }} 
        source={require('../../../assets/ScreenBackgroundImages/Categories/background-image.png')}
        >
          <FlatList
            data={categories}
            renderItem={this.renderCategory}
            keyExtractor={item => `${item.id}`}
            style={{ paddingTop: 100 }}
          />
        </ImageBackground>
      </View>
    );
  };
  */
  render() {

    //console.log(this.props);

    return (

      <View style={{ flex: 1 }} >
        <ImageBackground 
          style={{
            flex: 1,
            resizeMode: 'cover'
            }} 
            source={require('../../../assets/ScreenBackgroundImages/Categories/background-image.png' )}
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
              style={{ paddingTop: 50}}
            />
        </View>
        </ImageBackground>
      </View>
    );
  }
}
