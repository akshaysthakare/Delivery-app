// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet, StatusBar, SafeAreaView, Platform,
    Text, ScrollView, View, Button, Image, Dimensions,
    ImageBackground
} from 'react-native';
import * as AppConstants from '../constants/AppConstants';
import Colors from "../../Constants/Colors";

import { useDispatch, useSelector } from 'react-redux';

import { loadAddresses } from "../stores/actions/addresses";
import { loadImages } from "../stores/actions/images";
import { loadImagesOrders } from "../stores/actions/images_orders";
import { loadUsers } from "../stores/actions/users";
import { loadthumbnails } from "../stores/actions/thumbnails";
import { loadthumbnailorders } from "../stores/actions/thumbnailsOrders";
import PleaseWaitComponent from '../component/PleaseWaitComponent';
import TryAgainComponent from '../component/TryAgainComponent';

export default function ProductDetailScreen(props) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const addressesArray = useSelector(state => state.auth.addressesArray);
    useEffect(() => {
        My_product();
    }, []);

    const My_product = async () => {
        try {
            setError(null);
            setLoading(true);

            await dispatch(loadAddresses());
            await dispatch(loadImages());
            await dispatch(loadImagesOrders());
            await dispatch(loadUsers());
            await dispatch(loadthumbnails());
            await dispatch(loadthumbnailorders());
            setLoading(false);


        } catch (e) {
            // console.log('product = ' + e.message);
            setError(e.message);
            setLoading(false);
        }
    };
    const renderProduct = () => {

        return (

            <View>
                <View style={styles.firstUpperContainer}>
                    <View style={styles.bikeContainer}>
                        <View>
                            <Image
                                source={require('../../assets/bike.png')}
                                style={styles.bikeImg} />
                        </View>
                    </View>
                    <Text style={styles.deliveryListTxt}>Product Details</Text>
                    <Text style={styles.changetext}></Text>
                    <View style={styles.notificatiomContainer}>
                        <Image
                            source={require('../../assets/notificationImg.png')}
                            style={styles.notificationImg} />
                        <Image
                            source={require('../../assets/userImg.png')}
                            style={styles.userImg} />
                    </View>
                    <View style={styles.Roll}>


                        <View style={styles.firstRoll}>
                            <ScrollView>
                                <View style={styles.firstCardContainer}>
                                    <Text style={styles.orderLGY}>
                                        Invoice No - LGY-013699</Text>
                                    <Text style={styles.firstCardExpDelivery}>
                                        Order Date 31-10-2020</Text>
                                    <Image
                                        source={require('../../assets/Mask.png')}
                                        style={styles.firstCardImage} />
                                    <View style={styles.packageCardContainer} >
                                        <Text style={styles.packageContainertxt} onPress={() => {
                                            props.navigation.navigate({ routeName: 'DeliveryList' });
                                        }}>Package - Car Parts</Text>
                                    </View>
                                    <Text style={styles.firstCardPrice}>
                                        $228</Text>
                                </View>
                                <View style={styles.secondContainer}>
                                    <View style={styles.userContainer}>
                                        <Text style={styles.userTxt}>
                                            User Details</Text>
                                        <Text style={styles.statusTxt}>
                                            Status - pending</Text>
                                    </View>
                                    <Text style={styles.johnTxt}>
                                        Mr. John Isaac (Home)</Text>

                                    <View style={styles.addressContainer}>
                                        <View style={styles.locationContainer}>
                                            <Image
                                                source={require('../../assets/location.png')}
                                                style={styles.location} />
                                        </View>
                                        <Text style={styles.addressTxt}>
                                            64/3A Herman Avenue, United States</Text>
                                    </View>
                                    <View style={styles.contactInfoContainer}>
                                        <View style={styles.contactContainer}>
                                            <Image
                                                source={require('../../assets/contact.png')}
                                                style={styles.contact} />
                                        </View>
                                        <Text style={styles.contactTxt}>
                                            +1 XXXXX YYYYY</Text>
                                        <Text style={styles.mapTxt} onPress={() => {
                                            props.navigation.navigate({ routeName: 'Location' });
                                        }}>Go to Map</Text>
                                    </View>
                                    <Text style={styles.paymentTxt}>
                                        Payment - Already Paid</Text>
                                </View>
                                <View style={styles.truckContainer}>
                                    <Image
                                        source={require('../../assets/truck.png')}
                                        style={styles.truckImg} />
                                    <Text style={styles.expDeliveryTxt}>Expected Delivery Date 05-11-2020</Text>
                                </View>
                                <View style={styles.thirdContainer}>
                                    <Text style={styles.sellerTxt}>Seller Details</Text>
                                    <Text style={styles.dummyTxt}>Dummy Wholesale Market</Text>
                                    <Text style={styles.amherstAddressTxt}>810 Amherst Ct, Naperville, United States</Text>
                                    <Text style={styles.email}>Email - Seller@gmail.com</Text>
                                    <Text style={styles.phone}>Phone Number - +1 XXXXX YYYYY</Text>
                                </View>
                                <View style={styles.fourthContainer}>
                                    <View style={styles.orderAndDateContainer}>
                                        <Text style={styles.orderTxt}>Order Status</Text>
                                        <Text style={styles.dateTxt}>Change Date</Text>
                                    </View>
                                    <View style={styles.pendingContainer}>
                                        <Text style={styles.pendingTxt}>Pending</Text>
                                        <View style={styles.saveContainer}>
                                            <Image
                                                source={require('../../assets/pending.png')}
                                                style={styles.pendingImg} />
                                        </View>
                                    </View>
                                    <Text style={styles.description}>If you not delivered change your status</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
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
                            My_product();
                        }}
                    />
                )}
                {!loading && !error && renderProduct()}
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    firstUpperContainer: {
        width: AppConstants.pixelNormalize(359),
        height: AppConstants.pixelNormalize(48),
        marginTop: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(8),
    },
    bikeContainer: {
        width: AppConstants.pixelNormalize(65),
        height: AppConstants.pixelNormalize(48),
        backgroundColor: '#64BBDE',
        borderTopRightRadius: AppConstants.pixelNormalize(30),
        borderBottomRightRadius: AppConstants.pixelNormalize(30),
    },
    bikeImg: {
        width: AppConstants.pixelNormalize(26.69),
        height: AppConstants.pixelNormalize(18.76),
        marginLeft: AppConstants.pixelNormalize(17.66),
        marginTop: AppConstants.pixelNormalize(13.62),
    },
    deliveryListTxt: {
        color: '#000000',
        width: AppConstants.pixelNormalize(170),
        height: AppConstants.pixelNormalize(25),
        fontSize: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(79),
        marginTop: AppConstants.pixelNormalize(-38)
    },
    notificatiomContainer: {
        backgroundColor: '#84F9CD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: AppConstants.pixelNormalize(101),
        height: AppConstants.pixelNormalize(48),
        borderTopLeftRadius: AppConstants.pixelNormalize(30),
        borderBottomLeftRadius: AppConstants.pixelNormalize(30),
        marginLeft: AppConstants.pixelNormalize(258),
        marginTop: AppConstants.pixelNormalize(-52),
    },
    notificationImg: {
        width: AppConstants.pixelNormalize(23.36),
        height: AppConstants.pixelNormalize(24.31),
        marginTop: AppConstants.pixelNormalize(12.85),
        marginLeft: AppConstants.pixelNormalize(17.32)
    },
    userImg: {
        width: AppConstants.pixelNormalize(30),
        height: AppConstants.pixelNormalize(30),
        marginTop: AppConstants.pixelNormalize(10),
        marginRight: AppConstants.pixelNormalize(13.32)
    },
    firstCardContainer: {
        width: AppConstants.pixelNormalize(324),
        height: AppConstants.pixelNormalize(92),
        borderRadius: AppConstants.pixelNormalize(8),
        marginTop: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(17)
    },
    orderLGY: {
        width: AppConstants.pixelNormalize(210),
        height: AppConstants.pixelNormalize(23),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(16),
    },
    firstCardExpDelivery: {
        width: AppConstants.pixelNormalize(200),
        height: AppConstants.pixelNormalize(20),
        fontSize: AppConstants.pixelNormalize(14),
        color: '#AAAAAA',
    },
    firstCardImage: {
        width: AppConstants.pixelNormalize(85),
        height: AppConstants.pixelNormalize(81),
        marginLeft: AppConstants.pixelNormalize(239),
        marginTop: AppConstants.pixelNormalize(-43)

    },
    packageCardContainer: {
        backgroundColor: '#64BBDE',
        width: AppConstants.pixelNormalize(145),
        height: AppConstants.pixelNormalize(34),
        marginTop: AppConstants.pixelNormalize(-23),
        borderRadius: AppConstants.pixelNormalize(8)
    },
    packageContainertxt: {
        width: AppConstants.pixelNormalize(124),
        height: AppConstants.pixelNormalize(17),
        fontSize: AppConstants.pixelNormalize(12),
        color: '#FFFFFF',
        marginLeft: AppConstants.pixelNormalize(13),
        marginTop: AppConstants.pixelNormalize(9),
    },
    firstCardPrice: {
        width: AppConstants.pixelNormalize(37),
        height: AppConstants.pixelNormalize(21),
        fontSize: AppConstants.pixelNormalize(15),
        color: '#64BBDE',
        marginLeft: AppConstants.pixelNormalize(153),
        marginTop: AppConstants.pixelNormalize(-28),
    },
    secondContainer: {
        width: AppConstants.pixelNormalize(324),
        height: AppConstants.pixelNormalize(206.16),
        backgroundColor: '#F8F8FE',
        borderRadius: AppConstants.pixelNormalize(8),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(17)
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userTxt: {
        width: AppConstants.pixelNormalize(95),
        height: AppConstants.pixelNormalize(23),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(16),
        marginTop: AppConstants.pixelNormalize(12.76),
        marginLeft: AppConstants.pixelNormalize(18)
    },
    statusTxt: {
        width: AppConstants.pixelNormalize(109),
        height: AppConstants.pixelNormalize(19),
        color: '#FF2020',
        fontSize: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(14.76),
        marginLeft: AppConstants.pixelNormalize(87)
    },
    johnTxt: {
        width: AppConstants.pixelNormalize(158),
        height: AppConstants.pixelNormalize(20),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(9),
        marginLeft: AppConstants.pixelNormalize(18)
    },
    locationContainer: {
        backgroundColor: '#FFFFFF',
        width: AppConstants.pixelNormalize(30),
        height: AppConstants.pixelNormalize(30),
        borderRadius: AppConstants.pixelNormalize(25),
        marginLeft: AppConstants.pixelNormalize(18),
        marginTop: AppConstants.pixelNormalize(11),
        borderColor: '#00000012',
        borderWidth: AppConstants.pixelNormalize(1),
    },
    location: {
        width: AppConstants.pixelNormalize(11.07),
        height: AppConstants.pixelNormalize(15.29),
        marginLeft: AppConstants.pixelNormalize(9),
        marginTop: AppConstants.pixelNormalize(7.36)
    },
    addressTxt: {
        width: AppConstants.pixelNormalize(239),
        height: AppConstants.pixelNormalize(19),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(-25),
        marginLeft: AppConstants.pixelNormalize(61)
    },
    contactInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contactContainer: {
        backgroundColor: '#FFFFFF',
        width: AppConstants.pixelNormalize(30),
        height: AppConstants.pixelNormalize(30),
        borderRadius: AppConstants.pixelNormalize(25),
        marginLeft: AppConstants.pixelNormalize(18),
        marginTop: AppConstants.pixelNormalize(11),
        borderColor: '#00000012',
        borderWidth: AppConstants.pixelNormalize(1),
    },
    contact: {
        width: AppConstants.pixelNormalize(12.99),
        height: AppConstants.pixelNormalize(12.99),
        marginLeft: AppConstants.pixelNormalize(8.82),
        marginTop: AppConstants.pixelNormalize(8.5)
    },
    contactTxt: {
        width: AppConstants.pixelNormalize(125),
        height: AppConstants.pixelNormalize(19),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(9)
    },
    mapTxt: {
        width: AppConstants.pixelNormalize(67),
        height: AppConstants.pixelNormalize(19),
        color: '#1218CF',
        fontSize: AppConstants.pixelNormalize(13),
        marginTop: AppConstants.pixelNormalize(15),
        marginLeft: AppConstants.pixelNormalize(80)
    },
    paymentTxt: {
        width: AppConstants.pixelNormalize(177),
        height: AppConstants.pixelNormalize(21),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(16),
        marginTop: AppConstants.pixelNormalize(24),
        marginLeft: AppConstants.pixelNormalize(20)
    },
    truckContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    truckImg: {
        width: AppConstants.pixelNormalize(19.93),
        height: AppConstants.pixelNormalize(14.59),
        marginTop: AppConstants.pixelNormalize(10.73),
        marginLeft: AppConstants.pixelNormalize(20)
    },
    expDeliveryTxt: {
        width: AppConstants.pixelNormalize(270),
        height: AppConstants.pixelNormalize(19),
        color: '#060606',
        fontSize: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(8.6),
        marginLeft: AppConstants.pixelNormalize(11.01)
    },
    thirdContainer: {
        width: AppConstants.pixelNormalize(260),
        height: AppConstants.pixelNormalize(133),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(19.81),
    },
    sellerTxt: {
        width: AppConstants.pixelNormalize(113),
        height: AppConstants.pixelNormalize(23),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(18),
    },
    dummyTxt: {
        width: AppConstants.pixelNormalize(183),
        height: AppConstants.pixelNormalize(20),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(11),
    },
    amherstAddressTxt: {
        width: AppConstants.pixelNormalize(260),
        height: AppConstants.pixelNormalize(19),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(13),
        marginTop: AppConstants.pixelNormalize(6),
    },
    email: {
        width: AppConstants.pixelNormalize(167),
        height: AppConstants.pixelNormalize(19),
        color: '#AAAAAA',
        fontSize: AppConstants.pixelNormalize(13),
        marginTop: AppConstants.pixelNormalize(6),
    },
    phone: {
        width: AppConstants.pixelNormalize(209),
        height: AppConstants.pixelNormalize(19),
        color: '#AAAAAA',
        fontSize: AppConstants.pixelNormalize(13),
        marginTop: AppConstants.pixelNormalize(6),
    },
    fourthContainer: {
        width: AppConstants.pixelNormalize(322),
        height: AppConstants.pixelNormalize(129),
        marginTop: AppConstants.pixelNormalize(10),
        marginLeft: AppConstants.pixelNormalize(19.81),
    },
    orderAndDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderTxt: {
        width: AppConstants.pixelNormalize(101),
        height: AppConstants.pixelNormalize(23),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(16),
    },
    dateTxt: {
        width: AppConstants.pixelNormalize(80),
        height: AppConstants.pixelNormalize(19),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(12),
        marginTop: AppConstants.pixelNormalize(4)
    },
    pendingContainer: {
        backgroundColor: '#FF2D6D',
        width: AppConstants.pixelNormalize(322),
        height: AppConstants.pixelNormalize(65),
        borderRadius: AppConstants.pixelNormalize(50),
        marginTop: AppConstants.pixelNormalize(11),
        borderColor: '#00000012',
        borderWidth: AppConstants.pixelNormalize(1),
    },
    pendingTxt: {
        width: AppConstants.pixelNormalize(65),
        height: AppConstants.pixelNormalize(23),
        color: '#FFFFFF',
        fontSize: AppConstants.pixelNormalize(16),
        marginTop: AppConstants.pixelNormalize(19),
        marginLeft: AppConstants.pixelNormalize(124),
    },
    saveContainer: {
        backgroundColor: '#FFFFFF',
        width: AppConstants.pixelNormalize(46),
        height: AppConstants.pixelNormalize(46),
        borderRadius: AppConstants.pixelNormalize(25),
        marginTop: AppConstants.pixelNormalize(-35),
        marginLeft: AppConstants.pixelNormalize(263),
    },
    pendingImg: {
        width: AppConstants.pixelNormalize(20.77),
        height: AppConstants.pixelNormalize(19.26),
        marginTop: AppConstants.pixelNormalize(14.74),
        marginLeft: AppConstants.pixelNormalize(13.61),
    },
    description: {
        width: AppConstants.pixelNormalize(253),
        height: AppConstants.pixelNormalize(19),
        color: '#AAAAAA',
        fontSize: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(5),
        marginLeft: AppConstants.pixelNormalize(43),
    },
    firstRoll: {
        height: AppConstants.pixelNormalize(600),
    },
    Roll: {
        marginTop: AppConstants.pixelNormalize(15),

    }
});