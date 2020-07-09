import React from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        style={{
          flex: 1,
          alignItems: 'flex-start',
          paddingHorizontal: 20
        }}
        source={require('../../../assets/images/background-image-6.png')}
      >
        <View style={styles.content}>
          <View style={styles.container}>
            <MenuButton
              title="Все рецепты"
              source={require('../../../assets/icons/home.png')}
              onPress={() => {
                navigation.navigate('Home');
                navigation.closeDrawer();
              }}
            />
            <MenuButton
              title="Рецепты слаймов по категориям"
              source={require('../../../assets/icons/category.png')}
              onPress={() => {
                navigation.navigate('Categories');
                navigation.closeDrawer();
              }}
            />
            <MenuButton
              title="Поиск по рецептам"
              source={require('../../../assets/icons/search.png')}
              onPress={() => {
                navigation.navigate('Search');
                navigation.closeDrawer();
              }}
            />

          </View>
        </View>
      </ImageBackground>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
