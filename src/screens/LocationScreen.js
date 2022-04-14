// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet,StatusBar, ScrollView, Text,
   View, Button, Image, Dimensions, TouchableOpacity,
    ImageBackground ,SafeAreaView,Platform} from 'react-native';
import * as AppConstants from '../constants/AppConstants';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux';
import { loadAddresses } from "../stores/actions/addresses";
import { loadUsers } from "../stores/actions/users";
import Colors from "../../Constants/Colors";
import PleaseWaitComponent from '../component/PleaseWaitComponent';
import TryAgainComponent from '../component/TryAgainComponent';


export default function LocationScreen(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  const addressesArray = useSelector(state => state.auth.addressesArray);
  useEffect(() => {
    My_Location();
  }, []);

  const My_Location = async () => {
      try {
        setError(null);
        setLoading(true);
          await dispatch(loadAddresses());
          await dispatch(loadUsers());
          setLoading(false);


      } catch (e) {
          // console.log('Location = ' + e.message);
          setError(e.message);
          setLoading(false);

      }
  };
  const renderLocation = () => {

  return (
    <View>
      <ImageBackground
        source={require('../../assets/map.png')}
        style={{
          width: AppConstants.pixelNormalize(375.79),
          height: AppConstants.pixelNormalize(797.12),
        }}>
        <View style={styles.arrowContainer}>
          <View>
            <TouchableOpacity onPress={() => {
              props.navigation.navigate({ routeName: 'ProductDetail' });
            }} >
              <Image
                source={require('../../assets/arrow.png')}
                style={styles.arrowImg}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.firstRoll}>
            <ScrollView>
            <View style={styles.profileContainer}>
          <Image source={require('../../assets/user.png')} style={styles.img} >
          </Image>
          <Text style={styles.name} onPress={() => {
            props.navigation.navigate({ routeName: 'Profile' });
          }}>
            Dominic Charles
          </Text>
          <View style={
            {
              flexDirection: 'row',
              marginLeft: AppConstants.pixelNormalize(114),
              marginTop: AppConstants.pixelNormalize(11)
            }}>
            <AntDesign name="star" size={12} color="#FFD429" />
            <AntDesign name="star" size={12} color="#FFD429" />
            <AntDesign name="star" size={12} color="#FFD429" />
            <AntDesign name="star" size={12} color="#FFD429" />
            <AntDesign name="star" size={12} color="#FFD429" />
            <Text style={styles.rating}>
              (4.2K)
            </Text>
          </View>
          <View style={styles.locationContainer}>
            <Image
              source={require('../../assets/location.png')}
              style={styles.location} />
          </View>
          <View style={styles.contactContainer}>
            <Image
              source={require('../../assets/contact.png')}
              style={styles.contact} />
          </View>
          <Text style={styles.exp}>12 Years Experience</Text>
        </View>
      

        <View style={styles.housesContainer}>
          <View style={styles.circleContainer}>
            <Text style={styles.KM}>
              8KM
            </Text>
          </View>
          <Image
            source={require('../../assets/Building.png')}
            style={styles.building1} />

          <View style={styles.circleContainer2}>
            <Text style={styles.KM}>
              1KM
            </Text>
          </View>
          <Image
            source={require('../../assets/Building.png')}
            style={styles.building2} />


          <View style={styles.circleContainer4}>
            <Text style={styles.KM}>
              5KM
            </Text>
          </View>
          <Image
            source={require('../../assets/house.png')}
            style={styles.house1} />


          <View style={styles.circleContainer3}>
            <Text style={styles.KM}>
              3KM
            </Text>
          </View>
          <Image
            source={require('../../assets/house.png')}
            style={styles.house2} />
        </View>


        <View style={styles.status}>
          <Image
            source={require('../../assets/status.png')}
            style={styles.statusImg} />
        </View>
        </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
return (
  <>
      <StatusBar
          barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
          backgroundColor="#000"
      />
      <SafeAreaView
          style={{ flex: 0, backgroundColor: Colors.headerBackgroundColor }}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
          {loading && <PleaseWaitComponent />}
          {!loading && error && (
              <TryAgainComponent
                  onClickTryAgain={() => {
                      console.log("I am inside Try again");
                      My_Location();
                  }}
              />
          )}
          {!loading && !error && renderLocation()}
      </SafeAreaView>
  </>
);
}



const styles = StyleSheet.create({
  arrowContainer: {
    width: AppConstants.pixelNormalize(65),
    height: AppConstants.pixelNormalize(47),
    backgroundColor: '#64BBDE',
    borderTopRightRadius: AppConstants.pixelNormalize(30),
    borderBottomRightRadius: AppConstants.pixelNormalize(30),
    marginTop: AppConstants.pixelNormalize(20),
  },
  arrowImg: {
    width: AppConstants.pixelNormalize(14.82),
    height: AppConstants.pixelNormalize(14.82),
    marginLeft: AppConstants.pixelNormalize(20.59),
    marginTop: AppConstants.pixelNormalize(16.59),
  },
  profileContainer: {
    width: AppConstants.pixelNormalize(322),
    height: AppConstants.pixelNormalize(97),
    backgroundColor: '#FFFFFF',
    borderColor: '#E9E9E9',
    borderRadius: AppConstants.pixelNormalize(8),
    borderWidth: AppConstants.pixelNormalize(1),
    shadowRadius: AppConstants.pixelNormalize(8),
    marginLeft: AppConstants.pixelNormalize(17.81),
    marginTop: AppConstants.pixelNormalize(13),
  },
  img: {
    width: AppConstants.pixelNormalize(86),
    height: AppConstants.pixelNormalize(72),
    marginLeft: AppConstants.pixelNormalize(12),
    marginTop: AppConstants.pixelNormalize(12),
  },
  name: {
    width: AppConstants.pixelNormalize(125),
    height: AppConstants.pixelNormalize(20),
    color: '#000000',
    fontSize: AppConstants.pixelNormalize(16),
    marginLeft: AppConstants.pixelNormalize(113),
    marginTop: AppConstants.pixelNormalize(-75),
  },
  rating: {
    width: AppConstants.pixelNormalize(37),
    height: AppConstants.pixelNormalize(17),
    color: '#000000',
    marginLeft: AppConstants.pixelNormalize(15),
    marginTop: AppConstants.pixelNormalize(-4),
  },
  exp: {
    width: AppConstants.pixelNormalize(125),
    height: AppConstants.pixelNormalize(19),
    color: '#AAAAAA',
    fontSize: AppConstants.pixelNormalize(12),
    marginLeft: AppConstants.pixelNormalize(112),
    marginTop: AppConstants.pixelNormalize(-18),
  },
  locationContainer: {
    backgroundColor: '#FFFFFF',
    width: AppConstants.pixelNormalize(28),
    height: AppConstants.pixelNormalize(28),
    borderRadius: AppConstants.pixelNormalize(25),
    marginLeft: AppConstants.pixelNormalize(278),
    marginTop: AppConstants.pixelNormalize(-35),
    borderColor: '#F5F5F5',
    borderWidth: AppConstants.pixelNormalize(2),
  },
  location: {
    width: AppConstants.pixelNormalize(7.43),
    height: AppConstants.pixelNormalize(10.61),
    marginLeft: AppConstants.pixelNormalize(9),
    marginTop: AppConstants.pixelNormalize(8),
  },
  contactContainer: {
    backgroundColor: '#FFFFFF',
    width: AppConstants.pixelNormalize(28),
    height: AppConstants.pixelNormalize(28),
    borderRadius: AppConstants.pixelNormalize(25),
    marginLeft: AppConstants.pixelNormalize(278),
    marginTop: AppConstants.pixelNormalize(12),
    borderColor: '#F5F5F5',
    borderWidth: AppConstants.pixelNormalize(2),
  },
  contact: {
    width: AppConstants.pixelNormalize(10.35),
    height: AppConstants.pixelNormalize(10.35),
    marginLeft: AppConstants.pixelNormalize(8),
    marginTop: AppConstants.pixelNormalize(7.72),
  },
  housesContainer: {
    width: AppConstants.pixelNormalize(318),
    height: AppConstants.pixelNormalize(360),
    marginLeft: AppConstants.pixelNormalize(22.18),
    marginTop: AppConstants.pixelNormalize(46),
  },
  statusImg: {
    width: AppConstants.pixelNormalize(324),
    height: AppConstants.pixelNormalize(89),
    marginLeft: AppConstants.pixelNormalize(17.81),
    marginTop: AppConstants.pixelNormalize(-15),
  },
  building1: {
    width: AppConstants.pixelNormalize(38.29),
    height: AppConstants.pixelNormalize(38.29),
    marginLeft: AppConstants.pixelNormalize(45),
  },
  house1: {
    width: AppConstants.pixelNormalize(35),
    height: AppConstants.pixelNormalize(35),
    marginLeft: AppConstants.pixelNormalize(230),
  },
  building2: {
    width: AppConstants.pixelNormalize(38.29),
    height: AppConstants.pixelNormalize(38.29),
    marginLeft: AppConstants.pixelNormalize(270),
  },
  house2: {
    width: AppConstants.pixelNormalize(35),
    height: AppConstants.pixelNormalize(35),
    marginLeft: AppConstants.pixelNormalize(30),
  },
  circleContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E8E8',
    borderWidth: AppConstants.pixelNormalize(2),
    width: AppConstants.pixelNormalize(40),
    height: AppConstants.pixelNormalize(40),
    marginLeft: AppConstants.pixelNormalize(21),
    borderRadius: AppConstants.pixelNormalize(180),
  },
  circleContainer2: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E8E8',
    borderWidth: AppConstants.pixelNormalize(2),
    width: AppConstants.pixelNormalize(40),
    height: AppConstants.pixelNormalize(40),
    marginLeft: AppConstants.pixelNormalize(250),
    marginTop: AppConstants.pixelNormalize(110),
    borderRadius: AppConstants.pixelNormalize(180),
  },
  circleContainer3: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E8E8',
    borderWidth: AppConstants.pixelNormalize(2),
    width: AppConstants.pixelNormalize(40),
    height: AppConstants.pixelNormalize(40),
    marginTop: AppConstants.pixelNormalize(50),

    borderRadius: AppConstants.pixelNormalize(180),
  },
  circleContainer4: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E8E8',
    borderWidth: AppConstants.pixelNormalize(2),
    width: AppConstants.pixelNormalize(40),
    height: AppConstants.pixelNormalize(40),
    marginLeft: AppConstants.pixelNormalize(210),
    borderRadius: AppConstants.pixelNormalize(180),
    marginTop: AppConstants.pixelNormalize(-190),

  },
  KM: {
    width: AppConstants.pixelNormalize(23),
    height: AppConstants.pixelNormalize(16),
    fontSize: AppConstants.pixelNormalize(11),
    marginLeft: AppConstants.pixelNormalize(6),
    marginTop: AppConstants.pixelNormalize(10),




  },
  firstRoll:{
    height: AppConstants.pixelNormalize(600),

  }
});
