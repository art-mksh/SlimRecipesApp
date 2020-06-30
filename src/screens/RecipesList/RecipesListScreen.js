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

  /*
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: styles.headerBar
    };
  };
  */

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
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  /*
  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );
  */

  PinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');
  BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');


  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <ImageBackground
        style={{
          flex: 1,
          resizeMode: 'cover', 
          marginTop: 20,
          //height: 50,
          //width: 170,
          textShadowColor: 'black',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 5,
          shadowOpacity:0.4,
          elevation: 5,
        }}
        source={require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png')}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableHighlight>
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
          source={require('../../../assets/ScreenBackgroundImages/Categories/background-image.png')}
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
              //style={{ paddingTop: 100, paddingLeft: 100 }}
              style={{ paddingTop: 30 }}
            />
          </View>
        </ ImageBackground>
      </View>
    );
  }
}
