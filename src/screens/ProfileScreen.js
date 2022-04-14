// import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useState } from 'react';
import { StyleSheet, ScrollView, Text, View,
     Image, Dimensions, ImageBackground, 
     StatusBar,SafeAreaView,
     Platform,
     TouchableOpacity, TextInput } from 'react-native';
import * as AppConstants from '../constants/AppConstants';
import Colors from "../../Constants/Colors";

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from "../stores/actions/users";
import { loadAddresses } from "../stores/actions/addresses";
import {loadTypes} from '../stores/actions/types';
import PleaseWaitComponent from '../component/PleaseWaitComponent';
import TryAgainComponent from '../component/TryAgainComponent';

export default function ProfileScreen(props) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const addressesArray = useSelector(state => state.auth.addressesArray);
    useEffect(() => {
        My_profile();
    }, []);
  
    const My_profile = async () => {
        try {
            setError(null);
            setLoading(true);
            await dispatch(loadAddresses());
            await dispatch(loadUsers());
            await dispatch(loadTypes());
            setLoading(false);

        } catch (e) {
            // console.log('product = ' + e.message);
            setError(e.message);
            setLoading(false);

        }
    };
    const renderProfile = () => {

    return (
        <View>
            <View style={styles.firstUpperContainer}>
                <View style={styles.arrowContainer}>
                    <View>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate({ routeName: 'Location' });
                        }} >
                            <Image
                                source={require('../../assets/arrow.png')}
                                style={styles.arrowImg}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.profileTxt}>Profile
                </Text>
                <View style={styles.notificatiomContainer}>
                    <Image
                        source={require('../../assets/notificationImg.png')}
                        style={styles.notificationImg} />
                </View>
                <View style={styles.firstRoll}>
                    <ScrollView>
                        <View style={styles.SecondContainer}>
                            <View style={styles.starContainer}>
                                <Image
                                    source={require('../../assets/Star.png')}
                                    style={styles.starImage} />

                                <Entypo style={styles.checkContainer} name="check" color="white" />
                            </View>
                            <View style={styles.blueContainer}>
                                <Image
                                    source={require('../../assets/largeUserImg.png')}
                                    style={styles.userImage} />
                                <View style={styles.userNameContainer}>
                                    <Text style={styles.dominicTxt}>
                                        Dominic Charles
                                    </Text>
                                    <View style={
                                        {
                                            flexDirection: 'row',
                                            marginLeft: AppConstants.pixelNormalize(55),
                                            marginTop: AppConstants.pixelNormalize(5)
                                        }}>
                                        <AntDesign name="star" size={12} color="#FFD429" />
                                        <AntDesign name="star" size={12} color="#FFD429" />
                                        <AntDesign name="star" size={12} color="#FFD429" />
                                        <AntDesign name="star" size={12} color="#FFD429" />
                                        <AntDesign name="star" size={12} color="#FFD429" />
                                        <Text style={styles.ratingTxt}>
                                            (4.2K)
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.productTxt}>
                                Product Delivery / Sales
                            </Text>
                            <Text style={styles.employeeTxt}>
                                Employee ID - AZ456
                            </Text>
                        </View>
                        <View style={styles.thirdContainer}>
                            <View style={styles.profileInfoContainer}>
                                <Text style={styles.ProfileInfo}>
                                    Profile</Text>
                            </View>
                            <View style={styles.otherContainer}>
                                <Text style={styles.organizationTxt}>
                                    Organization
                                </Text>
                                <Text style={styles.othersTxt}>
                                    Others
                                </Text>
                            </View>
                        </View>
                        <View style={styles.fourthContainer}>
                            <Text style={styles.descriptionTxt}>
                                This is Dominic Charles, I have 12 years Experience, Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Text>
                            <View style={styles.addressContainer}>
                                <View style={styles.locationContainer}>
                                    <Image
                                        source={require('../../assets/location.png')}
                                        style={styles.location} />
                                </View>
                                <Text style={styles.addressTxt}>
                                    4152 Cessna Drive, United States</Text>
                            </View>
                            <View style={styles.contactInfoContainer}>
                                <View style={styles.contactContainer}>
                                    <Image
                                        source={require('../../assets/contact.png')}
                                        style={styles.contact} />
                                </View>
                                <Text style={styles.mapTxt}>
                                    +1 XXXXX YYYYY, +1 XXXXX YYYYY</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View >
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
                        My_profile();
                    }}
                />
            )}
            {!loading && !error && renderProfile()}
        </SafeAreaView>
    </>
);
}


const styles = StyleSheet.create({
    firstUpperContainer: {
        width: AppConstants.pixelNormalize(359),
        height: AppConstants.pixelNormalize(47),
        marginTop: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(8),
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
    profileTxt: {
        color: '#000000',
        width: AppConstants.pixelNormalize(100),
        height: AppConstants.pixelNormalize(25),
        fontSize: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(84),
        marginTop: AppConstants.pixelNormalize(-38)
    },
    notificatiomContainer: {
        backgroundColor: '#84F9CD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: AppConstants.pixelNormalize(77),
        height: AppConstants.pixelNormalize(47),
        borderTopLeftRadius: AppConstants.pixelNormalize(30),
        borderBottomLeftRadius: AppConstants.pixelNormalize(30),
        marginLeft: AppConstants.pixelNormalize(282),
        marginTop: AppConstants.pixelNormalize(-35),
    },
    notificationImg: {
        width: AppConstants.pixelNormalize(23.36),
        height: AppConstants.pixelNormalize(24.31),
        marginTop: AppConstants.pixelNormalize(11.85),
        marginLeft: AppConstants.pixelNormalize(30.32)
    },
    SecondContainer: {
        width: AppConstants.pixelNormalize(300),
        height: AppConstants.pixelNormalize(372),
        marginLeft: AppConstants.pixelNormalize(28.81),
    },
    starImage: {
        width: AppConstants.pixelNormalize(45.38),
        height: AppConstants.pixelNormalize(43.17),
        marginLeft: AppConstants.pixelNormalize(222),
        marginTop: AppConstants.pixelNormalize(86.67)
    },
    blueContainer: {
        width: AppConstants.pixelNormalize(300),
        height: AppConstants.pixelNormalize(156),
        backgroundColor: '#65BCDE',
        borderTopLeftRadius: AppConstants.pixelNormalize(180),
        borderTopRightRadius: AppConstants.pixelNormalize(180),
        marginTop: AppConstants.pixelNormalize(20),
    },
    userNameContainer: {
        width: AppConstants.pixelNormalize(240),
        height: AppConstants.pixelNormalize(72),
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: AppConstants.pixelNormalize(50),
        borderTopRightRadius: AppConstants.pixelNormalize(50),
        borderBottomLeftRadius: AppConstants.pixelNormalize(50),
        borderBottomRightRadius: AppConstants.pixelNormalize(50),
        marginLeft: AppConstants.pixelNormalize(31),
        borderColor: '#00000012',
        borderWidth: AppConstants.pixelNormalize(1),
    },
    userImage: {
        width: AppConstants.pixelNormalize(189),
        height: AppConstants.pixelNormalize(284),
        marginLeft: AppConstants.pixelNormalize(56),
        marginTop: AppConstants.pixelNormalize(-165)
    },
    dominicTxt: {
        width: AppConstants.pixelNormalize(150),
        height: AppConstants.pixelNormalize(25),
        fontSize: AppConstants.pixelNormalize(20),
        marginTop: AppConstants.pixelNormalize(13),
        marginLeft: AppConstants.pixelNormalize(53),
        color: '#000000',
    },
    ratingTxt: {
        width: AppConstants.pixelNormalize(35),
        height: AppConstants.pixelNormalize(17),
        fontSize: AppConstants.pixelNormalize(12),
        color: '#000000',
        marginTop: AppConstants.pixelNormalize(-3),
        marginLeft: AppConstants.pixelNormalize(15),
    },
    checkContainer: {
        width: AppConstants.pixelNormalize(9.76),
        height: AppConstants.pixelNormalize(9.8),
        marginLeft: AppConstants.pixelNormalize(237.8),
        marginTop: AppConstants.pixelNormalize(-26),
    },
    productTxt: {
        width: AppConstants.pixelNormalize(176),
        height: AppConstants.pixelNormalize(21),
        color: '#AAAAAA',
        fontSize: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(80),
        marginTop: AppConstants.pixelNormalize(40),
    },
    employeeTxt: {
        width: AppConstants.pixelNormalize(144),
        height: AppConstants.pixelNormalize(20),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(89),
        marginTop: AppConstants.pixelNormalize(2),
    },
    thirdContainer: {
        width: AppConstants.pixelNormalize(324),
        height: AppConstants.pixelNormalize(55),
        marginLeft: AppConstants.pixelNormalize(17.81),
        marginTop: AppConstants.pixelNormalize(10),
        flexDirection: 'row',
        borderBottomColor: '#00000012',
        borderBottomWidth: AppConstants.pixelNormalize(2),
    },
    profileInfoContainer: {
        width: AppConstants.pixelNormalize(110),
        height: AppConstants.pixelNormalize(55),
        backgroundColor: '#64BBDE',
        borderColor: '#E9E9E9',
        borderRadius: AppConstants.pixelNormalize(10),
        borderWidth: AppConstants.pixelNormalize(1),
        shadowRadius: AppConstants.pixelNormalize(8),
    },
    ProfileInfo: {
        width: AppConstants.pixelNormalize(77),
        height: AppConstants.pixelNormalize(21),
        color: '#FFFFFF',
        fontSize: AppConstants.pixelNormalize(15),
        marginTop: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(17),
        textAlign: 'center'

    },
    otherContainer: {
        flexDirection: "row",
    },
    organizationTxt: {
        width: AppConstants.pixelNormalize(96),
        height: AppConstants.pixelNormalize(21),
        marginLeft: AppConstants.pixelNormalize(21),
        marginTop: AppConstants.pixelNormalize(17)
    },
    othersTxt: {
        width: AppConstants.pixelNormalize(50),
        height: AppConstants.pixelNormalize(21),
        marginLeft: AppConstants.pixelNormalize(20),
        marginTop: AppConstants.pixelNormalize(17)
    },
    fourthContainer: {
        width: AppConstants.pixelNormalize(323),
        height: AppConstants.pixelNormalize(175),
        marginLeft: AppConstants.pixelNormalize(18.81),
        marginTop: AppConstants.pixelNormalize(15)
    },
    descriptionTxt: {
        width: AppConstants.pixelNormalize(321),
        height: AppConstants.pixelNormalize(69),
        fontSize: AppConstants.pixelNormalize(14),
        color: '#7A7A7A',
    },
    locationContainer: {
        backgroundColor: '#FFFFFF',
        width: AppConstants.pixelNormalize(36),
        height: AppConstants.pixelNormalize(36),
        borderRadius: AppConstants.pixelNormalize(25),
        marginTop: AppConstants.pixelNormalize(15),
        borderColor: '#0000001C',
        borderWidth: AppConstants.pixelNormalize(1),
    },
    location: {
        width: AppConstants.pixelNormalize(9.48),
        height: AppConstants.pixelNormalize(13.55),
        marginLeft: AppConstants.pixelNormalize(12),
        marginTop: AppConstants.pixelNormalize(11.49)
    },
    addressTxt: {
        width: AppConstants.pixelNormalize(228),
        height: AppConstants.pixelNormalize(20),
        color: '#414141',
        fontSize: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(-28),
        marginLeft: AppConstants.pixelNormalize(50)
    },
    contactInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    contactContainer: {
        backgroundColor: '#FFFFFF',
        width: AppConstants.pixelNormalize(36),
        height: AppConstants.pixelNormalize(36),
        borderRadius: AppConstants.pixelNormalize(25),
        marginTop: AppConstants.pixelNormalize(14),
        borderColor: '#0000001C',
        borderWidth: AppConstants.pixelNormalize(1),
    },
    contact: {
        width: AppConstants.pixelNormalize(13.22),
        height: AppConstants.pixelNormalize(13.22),
        marginLeft: AppConstants.pixelNormalize(11),
        marginTop: AppConstants.pixelNormalize(11.02)
    },
    contactTxt: {
        width: AppConstants.pixelNormalize(200),
        height: AppConstants.pixelNormalize(19),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(15),
    },
    mapTxt: {
        width: AppConstants.pixelNormalize(218),
        height: AppConstants.pixelNormalize(20),
        color: '#414141',
        fontSize: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(15)
    },
    firstRoll: {
        height: AppConstants.pixelNormalize(580),
    }
});