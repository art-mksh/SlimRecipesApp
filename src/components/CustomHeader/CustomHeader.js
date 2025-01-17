import React from 'react';
import {  Text, View } from 'react-native';
import { Header } from 'react-native-elements';

import PropTypes from 'prop-types';
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import BackButton from '../../components/BackButton/BackButton';

export default class CustomHeader extends React.Component {

  constructor(props) {
    super(props);

    
    this.state = {
      value: '',
      //data: []
      data: ''
    };
  }

  render() {


    let LeftCustomComponent, RightCustomComponent, CenterCustomComponent;
    
    //console.log(this.props.parent_navigation.state.params.title);
    console.log(this.props.parent_navigation.state.routeName);

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
      ||
      this.props.parent_navigation.state.routeName ==='Instructions'
    ) {
      LeftCustomComponent = (
        <BackButton
          onPress={() => {
            this.props.parent_navigation.goBack();
          }}
        />
      );
      RightCustomComponent = <MenuImage 
                                        onPress={() => { 
                                          this.props.parent_navigation.openDrawer(); 
                                        }} 
                              />;
    } else {
      LeftCustomComponent = <MenuImage 
                                        onPress={() => { 
                                          this.props.parent_navigation.openDrawer(); 
                                        }} 
                              />;
      RightCustomComponent = <View></View>;
    }


    if(this.props.parent_navigation.state.routeName ==='Search'){

      //console.log(this.props.CustomSearchBar.props);
      //console.log(typeof(this.props.CustomSearchBar.props.value));
      //if(typeof(this.props.CustomSearchBar.props.value) === 'Array'){
        //this.props.CustomSearchBar.props.value = '';
      //}
      //const testx = this.props.CustomSearchBar;
      //testx.props.value = '';

     

      CenterCustomComponent =  this.props.CustomSearchBar;
      //console.log(typeof(CenterCustomComponent.props.value)+ ' center comp type');

    }else{

      let HeaderTitleName,CenterComponentTextColor;

      //console.log(this.props.parent_navigation.state.params);

      if(this.props.parent_navigation.state.routeName === 'Recipe'){
        HeaderTitleName = this.props.parent_navigation.state.params.item.title;
      }else if(this.props.parent_navigation.state.routeName === 'Ingredient'){
        HeaderTitleName = this.props.parent_navigation.state.params.name;
      }else if(this.props.parent_navigation.state.routeName === 'IngredientsDetails'){
        HeaderTitleName = this.props.parent_navigation.state.params.title;
      }else{
        HeaderTitleName = this.props.parent_title_name;
      }

      if(this.props.parent_navigation.state.routeName === 'RecipesList'){

        if(this.props.parent_navigation.state.params.category.name === 'Виды слаймов'){
          CenterComponentTextColor = '#ff5ec7';
        }else{
          CenterComponentTextColor = '#48c3ff';
        }


      }else{
        CenterComponentTextColor = 'white';
      }

      CenterCustomComponent = 
      (<View
          style={{

            //textAlign:'center',
            //flexWrap:'wrap',

            //textAlignVertical:'bottom',

            //flexWrap: 'nowrap',
            //flexShrink: 1,
            //flexDirection:'row',
          }}
        >
          <Text style={{
          //color: '#ff4ebd', 
          color: CenterComponentTextColor, 
          fontSize: 29, 
          shadowColor: "black",
          fontFamily:'GUERRILLA-Normal',
          textAlign:'center',
          //flexWrap:'wrap',
          //textAlignVertical:'bottom',

          //flexWrap: 'nowrap',
          //flexShrink: 1,
          //flexDirection:'row',

          shadowOffset: {
            height: 1, width: 1
          },
          shadowRadius: 3
        }}>
          {HeaderTitleName}
        </Text>
      </View>);
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
