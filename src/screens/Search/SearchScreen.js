import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import { ListItem, SearchBar } from 'react-native-elements';
import MenuImage from '../../components/MenuImage/MenuImage';
import {
  getCategoryName,
  getRecipesByRecipeName,
  getRecipesByCategoryName,
  getRecipesByIngredientName
} from '../../data/MockDataAPI';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

let SrchBr;
export default class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {


    //console.log(this);
    //console.log(navigation);

    //const { params = {} } = navigation.state;
    //const { params } = navigation.state;

    //console.log(' SEARCH BAR ');
    //console.log(params.data);
    //let input_variable;
    //if (typeof (params.data) === 'undefined') {
      //params.data = 'falsex';
    //  input_variable = 'falsex';
    //} else {
    //  input_variable = params.data;
    //}



    //this.SrchBr = SrchBr;
    //this.SrchBr = '';

    return {
      headerShown: false,
      headerRight: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      //headerTitle: () => SrchBr,
      headerStyle: styles.headerBar
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      //data: []
      data: ''
    };
    this.PinkButtonBgImage = require('../../../assets/ButtonBackgroundImage/pink-btn-bg.png');
    this.BlueButtonBgImage = require('../../../assets/ButtonBackgroundImage/blue-btn-bg.png');

  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      handleSearch: this.handleSearch,
      data: this.getValue
    });
  }

  handleSearch = text => {
    
    const recipeArray1 = getRecipesByRecipeName(text);
    const recipeArray2 = getRecipesByCategoryName(text);
    const aux = recipeArray1.concat(recipeArray2);
    const recipeArray = [...new Set(aux)];


    if (text == '') {//УБРАТЬ ОТСЮДА АРРЭЙ И ПЕРЕКИНУТЬ ЕГО В ХЕДЕР СТАТИЧНО ЧТО БЫ ОН НЕ МЕНЯЛСЯ
      this.setState({
        value: text,
        data: ''
      });
    } else {
      this.setState({
        value: text,
        data: recipeArray
      });
    }
    

    

  };

  getValue = () => {
    return this.state.value;
  };

  onPressRecipe = item => {
    item.id = item.recipeId;
    this.props.navigation.navigate('Recipe', { item });
  };


  renderRecipes = ({ item }) => (
    <View>
      <View style={{
        flex: 1,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        elevation: 50,
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
              source={(this.BlueButtonBgImage)}
            >
              <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );

  render() {


    let SrchBr = (<SearchBar
      containerStyle={{
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        flex: 1,
        //flexWrap: 'nowrap',
        //padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
      inputContainerStyle={{
        backgroundColor: '#EDEDED',
      }}
      inputStyle={{
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        color: 'black',
      }}
      searchIcon
      clearIcon
      //lightTheme
      round
      onChangeText={text => this.handleSearch(text)}
      //onClear={() => params.handleSearch('')}
      placeholder="Поиск рецептов"
      value={this.state.value}
    //value={navigation.state.data}
    />);

    //console.log(this.props.navigation.state.params);
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
            parent_title_name={'Как сделать лизуна'}
            parent_navigation={this.props.navigation}
            CustomSearchBar={SrchBr}
          //onChangeText={text => this.props.navigation.state.params.handleSearch(text)}
          />
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={this.state.data}
            renderItem={this.renderRecipes}
            keyExtractor={item => `${item.recipeId}`}
            style={{ paddingTop: 50 }}
          />
        </ImageBackground>
      </View>
    );
  }
}
