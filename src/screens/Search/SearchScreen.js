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

    const { params = {} } = navigation.state;
    //const { params } = navigation.state;

    SrchBr = (<SearchBar
      containerStyle={{
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        flex: 1,
        //flexWrap: 'nowrap',
        //padding: 10,
        alignItems:'center',
        justifyContent:'center',
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
      searchIcond
      clearIcon
      //lightTheme
      round
      onChangeText={text => params.handleSearch(text)}
      //onClear={() => params.handleSearch('')}
      placeholder="Поиск рецептов"
      value={params.data}
      //value={navigation.state.data}
    />);

    this.SrchBr = SrchBr;


    return {
      headerShown: false,
      headerRight: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () =>  SrchBr ,
      headerStyle: styles.headerBar
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: []
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
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var recipeArray3 = getRecipesByIngredientName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];
    if (text == '') {
      this.setState({
        value: text,
        data: []
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
    //console.log(item);
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

    //console.log(this.props.navigation.state.params);
    return (
      <View style={{ flex: 1 }}>
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
            style={{ paddingTop: 50}}
          />
       </ImageBackground>
      </View>
    );
  }
}
