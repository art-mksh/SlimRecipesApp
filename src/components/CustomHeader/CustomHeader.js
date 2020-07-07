import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import { Header, ThemeConsumer } from 'react-native-elements';

import PropTypes from 'prop-types';
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import BackButton from '../../components/BackButton/BackButton';

export default class CustomHeader extends React.Component {
  render() {
    //console.log(this.props.scene.descriptor.options.title);

    /*
    return (
      <View style={{ height: 100, justifyContent: 'flex-end', padding: 10, backgroundColor: 'transparent' }}>
        <Image
          style={{ height: 100, position: 'absolute', top: 0, left: 0 }}
          source={require('../../../assets/images/bg-header.png')}
          resizeMode="cover"
        />
        <MenuImage
          onPress={() => {
            //navigation.openDrawer();
            this.props.navigation.openDrawer();
          }}
        />
        <View style={{ justifyContent: 'flex-end', backgroundColor: 'transparent' }}>
          <Text style={{ color: 'white', fontSize: 25 }}>{this.props.scene.descriptor.options.title}</Text>
        </View>
      </View>
    );
    */


    /*
    return (
      <View style={{ height: 100, justifyContent: 'flex-end', padding: 10 }}>
        <Image
          style={{ height: 100, position: 'absolute', top: 0, left: 0 }}
          source={require('../../../assets/images/bg-header.png')}
          resizeMode="cover"
        />
          <Header
            containerStyle={{
              backgroundColor:  'transparent',
            }}
            leftComponent={<MenuImage onPress={() => { this.props.navigation.openDrawer(); }}  />}
            centerComponent={<Text style={{ color: 'black', fontSize: 25}}>{this.props.scene.descriptor.options.title}</Text>}
          />
      </View>
    );
    */

    //console.log(this.props);

    //console.log(this.props);
    //console.log(this.props.parent_navigation.getScreenProps);
    //console.log(this.props.parent_navigation.state.routeName);

    let LeftCustomComponent, RightCustomComponent, CenterCustomComponent;

    if (
      this.props.parent_navigation.state.routeName === 'RecipesList'
      ||
      this.props.parent_navigation.state.routeName === 'IngredientsDetails'
      ||
      this.props.parent_navigation.state.routeName === 'Ingredient'
    ) {
      LeftCustomComponent = <BackButton
        onPress={() => {
          this.props.parent_navigation.goBack();
        }}
      />;
      RightCustomComponent = <MenuImage onPress={() => { this.props.parent_navigation.openDrawer(); }} />;
    } else {
      LeftCustomComponent = <MenuImage onPress={() => { this.props.parent_navigation.openDrawer(); }} />;
      RightCustomComponent = <View></View>;
    }

    CenterCustomComponent = <Text style={{
      color: '#ff4ebd', fontSize: 25, shadowColor: "black",
      shadowOffset: {
        height: 1, width: 1
      },
      shadowRadius: 3
    }}>{this.props.parent_title_name}</Text>;


    /*
    return (
      <View style={{ 
        justifyContent: 'flex-end',
        paddingBottom: 20,
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
            borderColor:'white',
            //borderWidth:1,
            //borderBottomColor:'white',
            borderBottomWidth:1,
            borderTopWidth:1
            //borderBottomLeftRadius: 5,
            //borderBottomRightRadius: 5,
            //borderBottomStartRadius: 5,
            //borderBottomEndRadius: 5,


          }}
          leftComponent={<MenuImage onPress={() => { this.props.parent_navigation.openDrawer(); }} />}
          //centerComponent={<Text style={{ color: 'black', fontSize: 25}}>{this.props.scene.descriptor.options.title}</Text>}
          centerComponent={<Text style={{
            color: '#ff4ebd', fontSize: 25, shadowColor: "black",
            shadowOffset: {
              height: 1, width: 1
            },
            shadowRadius: 3
          }}>{this.props.parent_title_name}</Text>}
          rightComponent={<View></View>} 
        />
      </View>
    );
    */
    return (
      <View style={{
        justifyContent: 'flex-end',
        paddingBottom: 20,
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
            borderBottomWidth: 1,
            borderTopWidth: 1
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
