import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getIngredientName, getCategoryName, getCategoryById } from '../../data/MockDataAPI';
import BackButton from '../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

const { width: viewportWidth,height: viewportHeight  } = Dimensions.get('window');

export default class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerShown: false,
      headerTransparent: 'true',
      headerLeft: () => <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />,
      headerStyle: styles.headerBar
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };


    this.PinkBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-8.png');
    this.BlueBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-9.png');

    //this.PinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');
    //this.BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  onPressIngredient = item => {
    var name = getIngredientName(item);
    let ingredient = item;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };

  render() {

    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);

    return (
      <ScrollView style={styles.container}>
          <ImageBackground
            style={{
              resizeMode: 'cover',
              //height:Dimensions.get('window').height,
              //width:Dimensions.get('window').width
              //height:'100%',
              //height:1000
              //width:'100%',
              flex:1,
              minHeight:viewportHeight
              //height:viewportHeight,
              //width:Dimensions.get('window').width
            }}
            //source={category.id==3?this.BlueBackgroundImage:this.PinkBackgroundImage}
            source={category.id==3?this.PinkBackgroundImage:this.BlueBackgroundImage}
          >
              <View style={styles.carouselContainer}>
                <CustomHeader
                  parent_title_name={'Как сделать лизуна'}
                  parent_navigation={this.props.navigation}
                />
                  <View style={styles.carousel}>
                    <Carousel
                      ref={c => {
                        this.slider1Ref = c;
                      }}
                      data={item.photosArray}
                      renderItem={this.renderImage}
                      sliderWidth={viewportWidth}
                      //sliderHeight={viewportHeight}
                      itemWidth={viewportWidth}
                      inactiveSlideScale={1}
                      inactiveSlideOpacity={1}
                      firstItem={0}
                      loop={false}
                      autoplay={false}
                      autoplayDelay={500}
                      autoplayInterval={3000}
                      onSnapToItem={index => this.setState({ activeSlide: index })}
                    />
                    <Pagination
                      dotsLength={item.photosArray.length}
                      activeDotIndex={activeSlide}
                      containerStyle={styles.paginationContainer}
                      dotColor="rgba(255, 255, 255, 0.92)"
                      dotStyle={styles.paginationDot}
                      inactiveDotColor="white"
                      inactiveDotOpacity={0.4}
                      inactiveDotScale={0.6}
                      carouselRef={this.slider1Ref}
                      tappableDots={!!this.slider1Ref}
                    />
                  </View>
                <View style={styles.infoRecipeContainer}>
                  <View style={styles.infoContainer}>
                    <ViewIngredientsButton
                      onPress={() => {
                        let ingredients = item.ingredients;
                        let title = 'Ingredients for ' + item.title;
                        navigation.navigate('IngredientsDetails', { ingredients, title });
                      }}
                      button_color={category.id==3?'#ff5ec7':'#0189d7'}
                    />
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
                  </View>
                </View>
              </View>
          </ImageBackground>
      </ScrollView>
    );
  }
}

