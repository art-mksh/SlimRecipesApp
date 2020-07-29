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
import ViewInstructionButton from '../../components/ViewInstructionButton/ViewInstructionButton';
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

    const { navigation } = this.props;
    const currItem = navigation.getParam('item');
    const category = getCategoryById(currItem.categoryId);
    const PinkBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-8.png');
    const BlueBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-9.png');

    let 
        currentPressedButtonColor, 
        currentDefaultButtonColor,
        currentScreenBackgroundImage, 
        ViewIngredientsDefaultButtonColor,
        ViewInstructionDefaultButtonColor,
        ViewIngredientsPressedButtonColor,
        ViewInstructionPressedButtonColor
    ;
    

    let DefaultBlueButtonColor = "rgba(255, 94, 199, 1)";
    let PressedBlueButtonColor = "rgba(255, 94, 199, 0.8)";

    let DefaultPinkButtonColor = "rgba(1, 137, 215, 1)";
    let PressedPinkButtonColor = "rgba(1, 137, 215, 0.8)";



    if(category.id == 3){
      currentPressedButtonColor = "rgba(255, 94, 199, 0.8)";
      currentDefaultButtonColor = "rgba(255, 94, 199, 1)";
      currentScreenBackgroundImage = PinkBackgroundImage;

      ViewIngredientsDefaultButtonColor = DefaultPinkButtonColor;
      ViewInstructionDefaultButtonColor = DefaultBlueButtonColor;

      ViewIngredientsPressedButtonColor = PressedPinkButtonColor;
      ViewInstructionPressedButtonColor = PressedBlueButtonColor;

    }else{
      currentPressedButtonColor = "rgba(1, 137, 215, 0.8)";
      currentDefaultButtonColor = "rgba(1, 137, 215, 1)";
      currentScreenBackgroundImage = BlueBackgroundImage;

      ViewIngredientsDefaultButtonColor = DefaultBlueButtonColor;
      ViewInstructionDefaultButtonColor = DefaultPinkButtonColor;

      ViewIngredientsPressedButtonColor = PressedBlueButtonColor;
      ViewInstructionPressedButtonColor = PressedPinkButtonColor;
    }

    this.currentPressedButtonColor = currentPressedButtonColor;
    this.currentDefaultButtonColor = currentDefaultButtonColor;
    this.currentScreenBackgroundImage = currentScreenBackgroundImage;


    
    this.currentDefaultViewIngredientsButton = ViewIngredientsDefaultButtonColor;
    this.currentPressedViewIngredientsButton = ViewIngredientsPressedButtonColor;

    this.currentDefaultViewInstructionButton = ViewInstructionDefaultButtonColor;
    this.currentPressedViewInstructionButton = ViewInstructionPressedButtonColor;



    this.state = {
      viewIngredientsButton: ViewIngredientsDefaultButtonColor,
      viewInstructionButton: ViewInstructionDefaultButtonColor,
      currentButtonStateColor : currentDefaultButtonColor
    }

  

  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={ item } />
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
            source={(this.currentScreenBackgroundImage)}
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
                      //activeDotIndex={0}
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
                    <ViewInstructionButton
                      onPress={() => {

                        const module_this = this;

                        let currentButtonStateColor = module_this.viewInstructionButton;
            
                        currentButtonStateColor = this.currentPressedViewInstructionButton;
                        module_this.setState({ viewInstructionButton: currentButtonStateColor });
            
                        setTimeout(function run() {
            
                          currentButtonStateColor = module_this.currentDefaultViewInstructionButton;
            
                          module_this.setState({ viewInstructionButton: currentButtonStateColor });
          
                          navigation.navigate('Instructions');
            
                        }, 100);


                      }}
                      button_color={(this.state.viewInstructionButton)}
                    />
                    <ViewIngredientsButton
                      onPress={() => {

                        const module_this = this;

                        let currentIngredientsButtonStateColor = module_this.viewIngredientsButton;
            
                        currentIngredientsButtonStateColor = this.currentPressedViewIngredientsButton;
                        module_this.setState({ viewIngredientsButton: currentIngredientsButtonStateColor });
            
                        setTimeout(function run() {
            
                          currentIngredientsButtonStateColor = module_this.currentDefaultViewIngredientsButton;
            
                          module_this.setState({ viewIngredientsButton: currentIngredientsButtonStateColor });
            
                          let ingredients = item.ingredients;
                          let title = 'Ингредиенты рецепта';

                          navigation.navigate('IngredientsDetails', { ingredients, title });
            
                        }, 100);


                      }}
                      button_color={(this.state.viewIngredientsButton)}
                    />
                  </View>
                  <View style={styles.infoContainerText}>
                    <Text 
                    style={{          
                      fontFamily:'GUERRILLA-Normal',
                  }, styles.infoDescriptionRecipe}
                    
                  >
                    {item.description}
                  </Text>
                  </View>
                </View>
              </View>
          </ImageBackground>
      </ScrollView>
    );
  }
}

