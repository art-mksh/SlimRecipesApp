import React from 'react';
import { TouchableOpacity, Image,ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default class MenuImage extends React.Component {
  render() {
 
   const FaIconsSize = 30;
   const FaIconsMargin = 0;

    return (
      <TouchableOpacity 
      //underlayColor='rgba(73,182,77,0.9)' 
      style={styles.headerButtonContainer} 
      onPress={this.props.onPress}>
         
            <FontAwesomeIcon style={{color:'white', margin:FaIconsMargin}} size={ FaIconsSize } icon={ faBars } />
      </TouchableOpacity>
    );
  }
}

MenuImage.propTypes = {
  onPress: PropTypes.func,
  
};
