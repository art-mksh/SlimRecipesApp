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
    this.BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');
    
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
          onPress={() => this.onPressCategory(item)} 
          onClick={() => this.setState({ fade: true })}
          onAnimationEnd={() => this.setState({ fade: false })}
          
          >
            <View >
              <ImageBackground
                imageStyle={{
                  resizeMode: 'stretch'
                }}
                style={{
                  flex: 1,
                }}
                source={(index % 2 == 0 ? this.BlueButtonBgImage : this.PinkButtonBgImage)}
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
