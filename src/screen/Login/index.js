import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

import {BACKGROUNDLOGIN, LOGOLOGIN, FACEBOOK, TWITTER} from '../../assets';
import {normalize, normalizeHorizontal} from '../../helper';
import {TextInput} from 'react-native-gesture-handler';

const {height} = Dimensions.get('window');

export const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ImageBackground
        style={styles.background}
        source={BACKGROUNDLOGIN}
        resizeMode="contain">
        <View style={styles.content}>
          <FastImage
            source={LOGOLOGIN}
            resizeMode="contain"
            style={styles.imgLogo}
          />
        </View>
        <View style={styles.txt}>
          <Text style={styles.txtWelcome}>{'Welcome,'}</Text>
          <Text style={styles.txtSayHello}>
            {'Let’s explore your next trip!'}
          </Text>
        </View>
        <View style={styles.border}>
          <TextInput
            placeholder="Phone, email or username"
            placeholderTextColor="#727272"
            style={styles.tipUsername}
          />
        </View>
        <View style={styles.border}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#727272"
            style={styles.tipPassword}
          />
        </View>
        <Text style = {styles.txtLoginAccount}>{'Login with account'}</Text>
        <View style = {styles.flex}>
        <View style= {styles.borderLogo}>
            <FastImage source={FACEBOOK} resizeMode = 'contain' style = {styles.imgFacebook} />
        </View>
        <View style= {styles.borderLogo}>
            <FastImage source={TWITTER} resizeMode = 'contain' style = {styles.imgTwitter} />
        </View>

        </View>
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: height,
    width: '100%',
  },
  imgLogo: {
    height: normalize(400),
    aspectRatio: 1,
    alignSelf: 'center',
  },
  txt: {
    position: 'absolute',
    marginTop: normalize(300),
    marginLeft: normalizeHorizontal(40),
  },
  txtWelcome: {
    fontSize: normalize(28),
    fontWeight: '400',
    lineHeight: normalize(42),
    color: '#000',
  },
  border: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: normalizeHorizontal(20),
    marginBottom: normalize(40),
  },
  tipUsername: {
    width: '90%',
    alignSelf: 'center',
    height: normalize(50),
    fontSize: normalize(16),
  },
  tipPassword: {
    width: '90%',
    alignSelf: 'center',
    height: normalize(50),
    fontSize: normalize(16),
  },
  txtLoginAccount:{
    fontSize: normalize(18),
    fontWeight: '500',
    lineHeight: normalize(26),
    marginLeft: normalizeHorizontal(20)
  },
  flex:{
    flexDirection: 'row'
  },
  borderLogo:{
    borderWidth: 1,
    borderColor: '#000'
  }
});
