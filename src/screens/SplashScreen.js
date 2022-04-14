import { StatusBar } from 'expo-status-bar';
import React, {useEffect}  from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Dimensions, ImageBackground } from 'react-native';
import * as AppConstants from '../constants/AppConstants';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../stores/actions/auth';
import {pixelNormalize} from "../constants/AppConstants";

const SplashScreen = props => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    try {
      await dispatch(loginUser('admin', 'admin@1234'));
      // await dispatch(loadJobs());
    } catch (e) {
      console.log('loginUser = ' + e.message);
    }
  };

  // const { title = 'Login' } = props;
  return (
    <View>
      <ImageBackground
        source={require('../../assets/bgs.png')}
        style={{
          width: AppConstants.pixelNormalize(410),
          height: AppConstants.pixelNormalize(800),
          alignSelf:'center'
        }}>
        <ImageBackground source={require('../../assets/Inner1.png')}
          style={{
            width: AppConstants.pixelNormalize(385),
            height: AppConstants.pixelNormalize(710),
            alignSelf:'center'

          }}>
          <View style={styles.mainContainer}>
            <View style={styles.circle}>
              <Image source={require('../../assets/Logo.png')} style={styles.img} ></Image>
            </View>
            <View style={styles.text}>
              <Text style={styles.timeing}> On-Timing</Text>
            </View>
            <View style={styles.delivery}>
              <Text style={styles.dd}>Driver Delivery App</Text>
            </View>
          </View>
          <View style={styles.Button}>
            <View style={styles.loginButton}>
              <Text onPress={() => {
                props.navigation.navigate({ routeName: 'Login' });
              }}>
                Login
              </Text>
            </View>
            <View style={styles.registerButton}>
              <Text onPress={() => {
                props.navigation.navigate({ routeName: 'Register' });
              }}>
                Register
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {

  alignSelf:'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop:AppConstants.pixelNormalize(142),
  },
  circle: {
    backgroundColor: '#FFFFFF',
    borderRadius: AppConstants.pixelNormalize(42),
    width: AppConstants.pixelNormalize(88),
    height: AppConstants.pixelNormalize(88),
  },
  img: {
    width: AppConstants.pixelNormalize(45.08),
    height: AppConstants.pixelNormalize(45.08),
    marginTop: AppConstants.pixelNormalize(21.46),
    alignSelf:'center',
  },
  text: {
    width: AppConstants.pixelNormalize(250),
    height: AppConstants.pixelNormalize(55),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeing: {
    color: '#FFFFFF',
    fontSize: AppConstants.pixelNormalize(34),
    textAlign: 'center'
  },
  dd: {
    color: '#FFFFFF',
    fontSize: AppConstants.pixelNormalize(15),
    textAlign: 'center'
  },
  delivery: {
    width: AppConstants.pixelNormalize(190),
    height: AppConstants.pixelNormalize(21),

  },
  Button: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5D5D5D",
    borderWidth: AppConstants.pixelNormalize(1),
    borderRadius: AppConstants.pixelNormalize(10),
    width: AppConstants.pixelNormalize(140),
    height: AppConstants.pixelNormalize(55),
    marginTop: AppConstants.pixelNormalize(18),
    marginLeft: AppConstants.pixelNormalize(40),
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5D5D5D",
    borderWidth: AppConstants.pixelNormalize(1),
    borderRadius: AppConstants.pixelNormalize(10),
    width: AppConstants.pixelNormalize(140),
    height: AppConstants.pixelNormalize(55),
    marginTop: AppConstants.pixelNormalize(-55),
    marginLeft: AppConstants.pixelNormalize(210),
  },

});
export default SplashScreen;
