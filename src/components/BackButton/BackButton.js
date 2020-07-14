import React from 'react';
import { TouchableHighlight, Image, Text, View,ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default class BackButton extends React.Component {

  render() {

    const FaIconsSize = 35;
    const FaIconsMargin = 0;

    return (
      <TouchableHighlight onPress={this.props.onPress} style={styles.btnContainer}>
        
            <FontAwesomeIcon  style={{color:'white', margin:FaIconsMargin,}} size={ FaIconsSize } icon={ faArrowLeft }  />
            
      </TouchableHighlight>
    );
  }
}

/*

  <TouchableHighlight onPress={this.props.onPress} style={styles.btnContainer}>
         <ImageBackground
            imageStyle={{
              resizeMode: 'cover'
            }}
            style={{
              flex: 1,
              //height:200,
              //width:200,
              //opacity:0.8,
              //alignItems: 'center',//fa-arrow-right 

            }}
            source={require('../../../assets/button_bg_2.png')}
          >
            <Image source={require('../../../assets/icons/arrow_back_black_outline.png')} style={styles.btnIcon} />
        </ImageBackground>
      </TouchableHighlight>
*/      

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
