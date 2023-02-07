import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {colors, normalize, normalizeHorizontal} from '../helper';

export default BookProductItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: normalize(220),
    alignSelf: 'center',
    marginTop: normalize(20),
    aspectRatio: 2,
  },
});
