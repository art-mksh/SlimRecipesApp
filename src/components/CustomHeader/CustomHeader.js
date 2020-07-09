import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import { Header, ThemeConsumer } from 'react-native-elements';

import PropTypes from 'prop-types';
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import BackButton from '../../components/BackButton/BackButton';
import { ListItem, SearchBar } from 'react-native-elements';

import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName
} from '../../data/MockDataAPI';
var params;
export default class CustomHeader extends React.Component {

  static navigationOptions = ({ navigation }) => {

    //const { params = {} } = navigation.state;
    //const { params } = navigation.state;
     //'params = this.props.parent_navigation.state.params;

    return {
      headerShown: false,
      headerRight: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <SearchBar
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            flex: 1,
          }}
          inputContainerStyle={{
            backgroundColor: '#EDEDED'
          }}
          inputStyle={{
            backgroundColor: '#EDEDED',
            borderRadius: 10,
            color: 'black'
          }}
          searchIcond
          clearIcon
          //lightTheme
          round
          onChangeText={text => params.handleSearch(text)}
          //onClear={() => params.handleSearch('')}
          placeholder="Поиск рецептов"
          //value={params.data}
          value={navigation.state.data}
        />
      ),
      headerStyle: styles.headerBar
    };
  };

  constructor(props) {
    super(props);
    this.props.parent_navigation.state = {
      value: '',
      data: []
    };
  }

  componentDidMount() {
    //const { navigation } = this.props;
    const navigation = this.props.parent_navigation;
    navigation.setParams({
      handleSearch: this.handleSearch,
      data: this.getValue
    });
  }

  handleSearch = text => {
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var recipeArray3 = getRecipesByIngredientName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];
    //console.log(this);
    if (text == '') {
      this.props.parent_navigation.setState({
        value: text,
        data: []
      });
    } else {
      this.props.parent_navigation.setState({
        value: text,
        data: recipeArray
      });
    }
  };

  getValue = () => {
    return this.props.parent_navigation.state.value;
  };

  onPressRecipe = item => {
    this.props.parent_navigation.navigate('Recipe', { item });
  };




  render() {


    let LeftCustomComponent, RightCustomComponent, CenterCustomComponent;
    
    //console.log(this.props.parent_navigation.state);
    if (
      this.props.parent_navigation.state.routeName === 'RecipesList'
      ||
      this.props.parent_navigation.state.routeName === 'IngredientsDetails'
      ||
      this.props.parent_navigation.state.routeName === 'Ingredient'
      ||
      this.props.parent_navigation.state.routeName ===  'Recipe'
      ||
      this.props.parent_navigation.state.routeName ==='Search'
    ) {
      LeftCustomComponent = (
        <BackButton
          onPress={() => {
            this.props.parent_navigation.goBack();
          }}
        />
      );
      RightCustomComponent = <MenuImage onPress={() => { this.props.parent_navigation.openDrawer(); }} />;
    } else {
      LeftCustomComponent = <MenuImage onPress={() => { this.props.parent_navigation.openDrawer(); }} />;
      RightCustomComponent = <View></View>;
    }


    if(this.props.parent_navigation.state.routeName ==='Search'){

      //console.log(this.props.CustomSearchBar);
      CenterCustomComponent =  this.props.CustomSearchBar;
    }else{
      CenterCustomComponent = 
      (<Text style={{
        //color: '#ff4ebd', 
        color: 'white', 
        fontSize: 27, 
        shadowColor: "black",
        fontFamily:'GUERRILLA-Normal',
        shadowOffset: {
          height: 1, width: 1
        },
        shadowRadius: 3
      }}>
        {(this.props.parent_navigation.state.routeName === 'Recipe'?this.props.parent_navigation.state.params.item.title:this.props.parent_title_name)}
      </Text>);
    }

    return (
      <View style={{
        justifyContent: 'flex-end',
        paddingBottom: (this.props.parent_navigation.state.routeName === 'Recipe' || this.props.parent_navigation.state.routeName === 'IngredientsDetails' || this.props.parent_navigation.state.routeName ===  'Ingredient'?0:20),
      }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            shadowColor: "black",
            shadowOffset: {
              height: 1, width: 1
            },
            shadowRadius: 3,
            elevation: 0,
            //backgroundColor: '#000',
            backgroundColor: 'rgba(52, 52, 52, 0.9)',
            //opacity: 1
            paddingBottom: 20,
            borderColor: 'white',
            //borderWidth:1,
            //borderBottomColor:'white',
            borderBottomWidth: 3,
            borderTopWidth: 3,
            
            //borderBottomLeftRadius: 5,
            //borderBottomRightRadius: 5,
            //borderBottomStartRadius: 5,
            //borderBottomEndRadius: 5,


          }}
          leftComponent={LeftCustomComponent}
          //centerComponent={<Text style={{ color: 'black', fontSize: 25}}>{this.props.scene.descriptor.options.title}</Text>}
          centerComponent={CenterCustomComponent}
          rightComponent={RightCustomComponent}
        />
      </View>
    );
  }
}
