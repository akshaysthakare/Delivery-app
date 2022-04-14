import React, { useState } from "react";
import { StyleSheet, Checkbox, View, ImageBackground, Image, Text, TouchableOpacity, ScrollView } from "react-native";
// import CheckBox from "react-native-check-box";
import RoundCheckbox from 'react-native-round-checkbox';
import * as AppConstants from '../constants/AppConstants';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'


const PaymentScreen = (props) => {
  // const [isChecked, setIsChecked] = useState(false);
  const [isTick, setIsTick] = useState(false);
  const [isTick1, setIsTick1] = useState(false);
  const [isTick2, setIsTick2] = useState(false);
  const [isTick3, setIsTick3] = useState(false);
  return (

    <View style={styles.container}>
      <ImageBackground source={require("../../assets/bg.png")} style={styles.bg}>
        <View style={styles.userContainer}>
          <View style={styles.arrowContainer}>

            <View>
              <TouchableOpacity onPress={() => {
                props.navigation.navigate({ routeName: 'Categories' });
              }} >
                <Image
                  source={require('../../assets/arrow.png')}
                  style={styles.arrowImg}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.heading}>Mode of Payment</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/user.png")}
              style={styles.userImage}
            />
          </View>
        </View>
        <View style={styles.services}>
          <Text style={styles.sectionText}>Pickup by</Text>
          <View style={styles.bgCard}>
            <Image
              source={require("../../assets/Mask.png")}
              style={styles.maskGroupImage}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.packagerName}>
                Packagers Name{"    "}
                <AntDesign name="star" size={9} color="#FFD429" />
                <Text style={{ color: "#FFD429" }}> 4.9</Text>
              </Text>
              <Text style={styles.subText}>432 Near College View , US</Text>
              <Text style={styles.subText}>+1 XXXXX YYYYY</Text>
            </View>
            <AntDesign
              name="down"
              size={13}
              color="#000000"
              style={{
                marginLeft: AppConstants.pixelNormalize(30),
                marginTop: AppConstants.pixelNormalize(30),
              }}
            />
          </View>
          <Text style={styles.sectionText}>Amount to Pay - $675.12</Text>
          <View style={styles.firstRolling}>
            <ScrollView>
              <View style={styles.payOptBg}>
                <View style={styles.checkIcon}>
                  <RoundCheckbox
                    size={20}
                    borderColor={'#B9B9B9'}
                    backgroundColor={"#135582"}
                    iconColor={'white'}
                    checked={isTick}
                    onValueChange={checked => setIsTick(checked)}

                  />

                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.mainText}>Cash on Pickup</Text>
                  <Text style={styles.subText}>Pay while pick a delivery</Text>
                </View>
              </View>
              <View style={styles.payOptBg}>
                <View style={styles.checkIcon}>

                  <RoundCheckbox

                    size={20}
                    borderColor={'#B9B9B9'}
                    backgroundColor={"#135582"}
                    iconColor={'white'}
                    checked={isTick1}
                    onValueChange={checked => setIsTick1(checked)}
                  />
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.mainText}>Cash on Delivery</Text>
                  <Text style={styles.subText}>Pay while drop a delivery</Text>
                </View>
              </View>
              <View style={styles.payOptBg}>
                <View style={styles.checkIcon}>

                   <RoundCheckbox

                    size={20}
                    borderColor={'#B9B9B9'}
                    backgroundColor={"#135582"}
                    iconColor={'white'}
                    checked={isTick2}
                    onValueChange={checked => setIsTick2(checked)}
                  /> 
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.mainText}>Net Banking</Text>
                  <Text style={styles.subText}>Pay via internet banking  </Text>
                </View>
              </View>
              <View style={styles.payOptBg}>
                <View style={styles.checkIcon}>

                  <RoundCheckbox
                    style={styles.checkIcon}

                    size={20}
                    borderColor={'#B9B9B9'}
                    backgroundColor={"#135582"}
                    iconColor={'white'}
                    checked={isTick3}
                    onValueChange={checked => setIsTick3(checked)}
                  />
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.mainText}>Pay in Wallet</Text>
                  <Text style={styles.subText}>Pay via Your wallet balance</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              activeOpacity={0.6}>
              <View style={styles.cancelButton}>
                <Text onPress={() => {
                  props.navigation.navigate({ routeName: 'Categories' });
                }}
                  style={{ fontWeight: "bold" }}>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}>
              <View style={styles.BookButton}>
                <Text onPress={() => {
                  props.navigation.navigate({ routeName: 'ProductDetail' });
                }}>
                  Book Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  bg: {
    flex: 1,
  },
  arrowContainer: {
    width: AppConstants.pixelNormalize(65),
    height: AppConstants.pixelNormalize(47),
    backgroundColor: '#64BBDE',
    borderTopRightRadius: AppConstants.pixelNormalize(30),
    borderBottomRightRadius: AppConstants.pixelNormalize(30),
  },
  arrowImg: {
    width: AppConstants.pixelNormalize(14.82),
    height: AppConstants.pixelNormalize(14.82),
    marginLeft: AppConstants.pixelNormalize(20.56),
    marginTop: AppConstants.pixelNormalize(16.59),
  },
  topBg: {
    width: AppConstants.pixelNormalize(380),
    height: AppConstants.pixelNormalize(310),
  },
  userContainer: {
    flex: 1,
    flexDirection: "row",
    width: AppConstants.pixelNormalize(304),
    height: AppConstants.pixelNormalize(43),
    marginTop: AppConstants.pixelNormalize(20),
    marginHorizontal: AppConstants.pixelNormalize(15),
  },

  heading: {
    marginTop: AppConstants.pixelNormalize(18),
    marginLeft: AppConstants.pixelNormalize(16),
    fontSize: AppConstants.pixelNormalize(20),
    color: "#ffffff",
  },
  userImage: {
    marginTop: AppConstants.pixelNormalize(3),
    marginLeft: AppConstants.pixelNormalize(50),
    width: AppConstants.pixelNormalize(42),
    height: AppConstants.pixelNormalize(42),
  },
  services: {
    width: "100%",
    height: AppConstants.pixelNormalize(800),
    marginTop: AppConstants.pixelNormalize(70),
    backgroundColor: "#faf8ff",
    borderRadius: 50,
  },
  sectionText: {
    fontSize: AppConstants.pixelNormalize(16),
    marginTop: AppConstants.pixelNormalize(14),
    marginLeft: AppConstants.pixelNormalize(31),
    fontWeight: "bold",
  },
  mainText: {
    fontSize: AppConstants.pixelNormalize(14),
    marginLeft: AppConstants.pixelNormalize(14),
    marginTop: AppConstants.pixelNormalize(12),
  },
  subText: {
    fontSize: AppConstants.pixelNormalize(12),
    color: "#AAAAAA",
    marginLeft: AppConstants.pixelNormalize(13),
    marginTop: AppConstants.pixelNormalize(4),
  },
  bgCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderColor: "#F1F1F1",
    borderWidth: 1,
    width: AppConstants.pixelNormalize(304),
    height: AppConstants.pixelNormalize(81),
    borderRadius: AppConstants.pixelNormalize(10),
    marginTop: AppConstants.pixelNormalize(10),
    marginLeft: AppConstants.pixelNormalize(36),
  },
  maskGroupImage: {
    width: AppConstants.pixelNormalize(70),
    height: AppConstants.pixelNormalize(60),
    borderRadius: AppConstants.pixelNormalize(10),
    marginVertical: AppConstants.pixelNormalize(10),
    marginLeft: AppConstants.pixelNormalize(13),
  },
  packagerName: {
    fontSize: AppConstants.pixelNormalize(14),
    marginTop: AppConstants.pixelNormalize(8),
    marginLeft: AppConstants.pixelNormalize(13),
  },
  payOptBg: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderColor: "#F1F1F1",
    borderWidth: 1,
    width: AppConstants.pixelNormalize(304),
    height: AppConstants.pixelNormalize(65),
    borderRadius: AppConstants.pixelNormalize(10),
    marginTop: AppConstants.pixelNormalize(10),
    marginLeft: AppConstants.pixelNormalize(36),
  },
  checkIcon: {
    marginTop: AppConstants.pixelNormalize(22),
    marginLeft: AppConstants.pixelNormalize(20),
  },
  payOptImg: {
    width: AppConstants.pixelNormalize(29),
    height: AppConstants.pixelNormalize(29),
    marginTop: AppConstants.pixelNormalize(18),
    marginLeft: AppConstants.pixelNormalize(73),
  },
  cancelButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5D5D5D",
    borderWidth: AppConstants.pixelNormalize(1),
    borderRadius: AppConstants.pixelNormalize(10),
    width: AppConstants.pixelNormalize(140),
    height: AppConstants.pixelNormalize(55),
    marginTop: AppConstants.pixelNormalize(18),
    marginLeft: AppConstants.pixelNormalize(33),
  },
  BookButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5D5D5D",
    borderWidth: AppConstants.pixelNormalize(1),
    borderRadius: AppConstants.pixelNormalize(10),
    width: AppConstants.pixelNormalize(140),
    height: AppConstants.pixelNormalize(55),
    marginTop: AppConstants.pixelNormalize(18),
    marginLeft: AppConstants.pixelNormalize(33),
  },
  firstRolling: {
    height: AppConstants.pixelNormalize(300),

  }

});

export default PaymentScreen;
