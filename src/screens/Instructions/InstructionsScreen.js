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
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import { instructions } from '../../data/dataArrays';

const { width: viewportWidth,height: viewportHeight  } = Dimensions.get('window');

export default class InstructionsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerShown: false,
      headerTransparent: 'true',
      headerStyle: styles.headerBar
    };
  };

  constructor(props) {

    super(props);
    this.state = {
      activeSlide: 0
    };

    if(1){
      this.currentScreenBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-8.png');
    }else{
      this.currentScreenBackgroundImage = require('../../../assets/ScreenBackgroundImages/background-image-9.png');
    }

  }


  render() {

    return (
      <ScrollView style={styles.container}>
          <ImageBackground
            style={{
              resizeMode: 'cover',
              flex:1,
              minHeight:viewportHeight
            }}
            source={(this.currentScreenBackgroundImage)}
          >
              <View style={styles.carouselContainer}>
                <CustomHeader
                  parent_title_name={'Инструкция'}
                  parent_navigation={this.props.navigation}
                />
                <View style={styles.infoRecipeContainer}>
                  <View style={styles.infoContainer}>
                    <Text style={styles.infoDescriptionRecipe}>{instructions.rus}</Text>
                  </View>
                </View>
              </View>
          </ImageBackground>
      </ScrollView>
    );
  }
}

