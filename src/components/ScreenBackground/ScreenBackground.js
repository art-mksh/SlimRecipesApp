import React from 'react';
import { TouchableHighlight, Image, Text, View ,ImageBackground} from 'react-native';
import { Header } from 'react-native-elements';

import styles from './styles';

export default class ScreenBackground extends React.Component {
  render() {
    //console.log(this.props.scene.descriptor.options.title);

    return (
        <ImageBackground  style={{    flex: 1,
            resizeMode: 'cover' }} source={require('../../../assets/images/bg-header.png')} >     
            </ImageBackground>
    );
  }
}
