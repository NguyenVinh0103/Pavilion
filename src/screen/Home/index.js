import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import {IC_BACK} from '../../assets';
import {normalize, normalizeHorizontal} from '../../helper';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
    const navigation = useNavigation();
  return (
    <View style = {styles.container}>
      <Text>index</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});
