import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import ScreenBackground from '../../components/ScreenBackground/ScreenBackground';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

export default class HomeScreen extends React.Component {

  /*
  static navigationOptions = ({ navigation }) => ({
    title: 'Главная',
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />,
    headerStyle: styles.headerBar
  });
  */

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
    this.PinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');
    this.BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };


  renderRecipes = ({ item, index }) => (
    <View>
      <View style={{
        flex: 1,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        elevation: 5,
      }}>
        <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
          <View >
            <ImageBackground
              imageStyle={{
                resizeMode: 'stretch'
              }}
              style={{
                flex: 1,
              }}
              source={(index % 2 == 0 ? this.PinkButtonBgImage : this.BlueButtonBgImage)}
            >
              <View style={styles.categoriesItemContainer}>
                <Text style={styles.categoriesName}>{item.title}</Text>
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
            parent_title_name={'Все рецепты слаймов'}
            parent_navigation={this.props.navigation}
          />
          <View>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={recipes}
              renderItem={this.renderRecipes}
              keyExtractor={item => `${item.recipeId}`}

            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
