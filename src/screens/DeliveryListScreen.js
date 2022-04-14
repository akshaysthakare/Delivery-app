// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet, Text, SafeAreaView,
    StatusBar,
    Platform, View, Button, ScrollView,
    FlatList, Image, Dimensions, ImageBackground, TextInput
} from 'react-native';
import * as AppConstants from '../constants/AppConstants';
import Colors from "../../Constants/Colors";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { loadOrders } from '../stores/actions/orders';
import { useDispatch, useSelector } from 'react-redux';
import PleaseWaitComponent from '../component/PleaseWaitComponent';
import TryAgainComponent from '../component/TryAgainComponent';

export default function DeliveryListScreen(props) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const orders = useSelector(
        state => state.orders.ordersArray
    );
    useEffect(() => {
        My_Delivery_List();
    }, []);

    const My_Delivery_List = async () => {
        try {
            setError(null);
            setLoading(true);
            await dispatch(loadOrders());
            setLoading(false);

        } catch (e) {
            setError(e.message);
            setLoading(false);

        }
    };
    const renderDelivery = () => {

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
                    <Text style={styles.deliveryListTxt}>Delivery List</Text>
                    <Text style={styles.changetext}>Change</Text>
                    <View style={styles.notificatiomContainer}>
                        <Image
                            source={require('../../assets/notificationImg.png')}
                            style={styles.notificationImg} />
                        <Image
                            source={require('../../assets/userImg.png')}
                            style={styles.userImg} />
                    </View>

                    <View style={styles.medicineContainer}>
                        <Image
                            source={require('../../assets/truck.png')}
                            style={styles.truckImg} />
                        <Text style={styles.uppertxt}>Medicine (2)</Text>

                        <View style={styles.firstRolling}>
                            <ScrollView>
                                {/* FlatList Starts Here */}
                                <FlatList
                                    data={orders}
                                    renderItem={({ item }) => (
                                        <View style={styles.CardContainer}>

                                            <Text style={styles.order}>
                                                Invoice No - {item.sku}
                                            </Text>
                                            <Text style={styles.CardExpDelivery}>
                                                Today {item.dropoff_date}
                                            </Text>
                                            <Image
                                                source={require('../../assets/Mask.png')}
                                                style={styles.CardImage} />
                                            <View style={styles.dorothyDelivery}>
                                                <Text style={styles.name}>
                                                    Name - {item.customer.first_name}
                                                </Text>
                                                <Text style={styles.CardDP}>
                                                    {item.order_status.name}                                        </Text>
                                            </View>
                                            <View style={styles.CardlocationContainer}>
                                                <Image
                                                    source={require('../../assets/location.png')}
                                                    style={styles.Cardlocation} />
                                            </View>
                                            <View style={styles.CardcontactContainer}>
                                                <Image
                                                    source={require('../../assets/contact.png')}
                                                    style={styles.Cardcontact} />
                                            </View>
                                            <View style={styles.CardPaymentMedicine} >
                                                <Text style={styles.CardMedicinetxt} onPress={() => {
                                                    props.navigation.navigate({ routeName: 'Payment' });
                                                }}>Pay Now</Text>
                                            </View>
                                            <View style={styles.CardMedicine} >
                                                <Text style={styles.CardMedicinetxt} onPress={() => {
                                                    props.navigation.navigate({ routeName: 'ProductDetail' });
                                                }}>
                                                    {item.order_type.name}
                                                </Text>
                                            </View>
                                        </View>
                                    )}
                                />
                                {/* FlatList Ends Here */}
                                {/* <View style={styles.CardContainer}>
                                    <Text style={styles.order}>
                                        Invoice No - LGY-013699
                                    </Text>
                                    <Text style={styles.CardExpDelivery}>
                                        Today 05-11-2020
                                    </Text>
                                    <Image
                                        source={require('../../assets/Mask.png')}
                                        style={styles.CardImage} />
                                    <View style={styles.dorothyDelivery}>
                                        <Text style={styles.name}>
                                            Name - Mr. Dorothy
                                        </Text>
                                        <Text style={styles.CardDP}>
                                            Delivery Success
                                        </Text>
                                    </View>
                                    <View style={styles.CardlocationContainer}>
                                        <Image
                                            source={require('../../assets/location.png')}
                                            style={styles.Cardlocation} />
                                    </View>
                                    <View style={styles.CardcontactContainer}>
                                        <Image
                                            source={require('../../assets/contact.png')}
                                            style={styles.Cardcontact} />
                                    </View>
                                    <View style={styles.CardPaymentMedicine} >
                                        <Text style={styles.CardMedicinetxt} onPress={() => {
                                            props.navigation.navigate({ routeName: 'Payment' });
                                        }}>Pay Now</Text>
                                    </View>
                                    <View style={styles.CardMedicine} >
                                        <Text style={styles.CardMedicinetxt} onPress={() => {
                                            props.navigation.navigate({ routeName: 'ProductDetail' });
                                        }}>Medicine</Text>
                                    </View>
                                </View>
                                <View style={styles.CardContainer}>
                                    <Text style={styles.order}>
                                        Invoice No - LGY-013699
                                    </Text>
                                    <Text style={styles.CardExpDelivery}>
                                        Today 05-11-2020
                                    </Text>
                                    <Image
                                        source={require('../../assets/Mask.png')}
                                        style={styles.CardImage} />
                                    <View style={styles.dorothyDelivery}>
                                        <Text style={styles.name}>
                                            Name - Mr. Dorothy
                                        </Text>
                                        <Text style={styles.CardDP}>
                                            Delivery Success
                                        </Text>
                                    </View>
                                    <View style={styles.CardlocationContainer}>
                                        <Image
                                            source={require('../../assets/location.png')}
                                            style={styles.Cardlocation} />
                                    </View>
                                    <View style={styles.CardcontactContainer}>
                                        <Image
                                            source={require('../../assets/contact.png')}
                                            style={styles.Cardcontact} />
                                    </View>
                                    <View style={styles.CardPaymentMedicine} >
                                        <Text style={styles.CardMedicinetxt} onPress={() => {
                                            props.navigation.navigate({ routeName: 'Payment' });
                                        }}>Pay Now</Text>
                                    </View>
                                    <View style={styles.CardMedicine} >
                                        <Text style={styles.CardMedicinetxt} onPress={() => {
                                            props.navigation.navigate({ routeName: 'ProductDetail' });
                                        }}>Medicine</Text>
                                    </View>
                                </View>

                                <View style={styles.CardContainer}>
                                    <Text style={styles.order}>
                                        Invoice No - LGY-013700</Text>
                                    <Text style={styles.CardExpDelivery}>
                                        Exp Delivery 06-10-2020</Text>
                                    <Image
                                        source={require('../../assets/medicineImg.png')}
                                        style={styles.CardImage} />
                                    <View style={styles.dorothyDelivery}>
                                        <Text style={styles.name}>
                                            Name - Mr. Frank</Text>
                                        <Text style={styles.CardDP}>
                                            Delivery Pending - 5KM </Text>
                                    </View>
                                    <View style={styles.CardlocationContainer}>
                                        <Image
                                            source={require('../../assets/location.png')}
                                            style={styles.Cardlocation} />
                                    </View>
                                    <View style={styles.CardcontactContainer}>
                                        <Image
                                            source={require('../../assets/contact.png')}
                                            style={styles.Cardcontact} />
                                    </View>
                                    <View style={styles.CardPaymentMedicine} >
                                        <Text style={styles.CardMedicinetxt} onPress={() => {
                                            props.navigation.navigate({ routeName: 'Payment' });
                                        }}>Pay Now</Text>
                                    </View>
                                    <View style={styles.CardMedicine} >
                                        <Text style={styles.CardMedicinetxt} onPress={() => {
                                            props.navigation.navigate({ routeName: 'ProductDetail' });
                                        }}>Medicine</Text>
                                    </View>
                                </View> */}
                            </ScrollView>
                        </View>
                    </View>

                    <View style={styles.foodContainer}>
                        <Image
                            source={require('../../assets/truck.png')}
                            style={styles.truckImg} />
                        <Text style={styles.uppertxt}>Food (1)</Text>
                        <View style={styles.secondRolling}>
                            <ScrollView>
                                {/* FlatList Starts Here */}
                                <FlatList
                                    data={orders}
                                    renderItem={({ item }) => (
                                        <View style={styles.CardContainer}>
                                            <Text style={styles.order}>
                                                Order No - {item.sku}</Text>
                                            <Text style={styles.CardExpDelivery}>
                                                Today {item.dropoff_date}</Text>
                                            <Image
                                                source={require('../../assets/foodIMG.png')}
                                                style={styles.CardImage} />
                                            <View style={styles.dorothyDelivery}>
                                                <Text style={styles.name}>
                                                    Name - {item.customer.first_name}</Text>
                                                <Text style={styles.CardDP}>
                                                    {item.order_status.name}           
                                                </Text>
                                            </View>
                                            <View style={styles.CardlocationContainer}>
                                                <Image
                                                    source={require('../../assets/location.png')}
                                                    style={styles.Cardlocation} />
                                            </View>
                                            <View style={styles.CardcontactContainer}>
                                                <Image
                                                    source={require('../../assets/contact.png')}
                                                    style={styles.Cardcontact} />
                                            </View>
                                            <View style={styles.thirdCardPaymentFood} >
                                                <Text style={styles.thirdCardFoodtxt} onPress={() => {
                                                    props.navigation.navigate({ routeName: 'Payment' });
                                                }}>Pay Now</Text>
                                            </View>
                                            <View style={styles.thirdCardFood} >
                                                <Text style={styles.thirdFoodtxt} onPress={() => {
                                                    props.navigation.navigate({ routeName: 'ProductDetail' });
                                                }}>
                                                    {item.order_type.name}
                                                </Text>
                                            </View>
                                        </View>
                                    )}
                                />
                                {/* <View style={styles.CardContainer}>
                                    <Text style={styles.order}>
                                        Order No - FDY-045872</Text>
                                    <Text style={styles.CardExpDelivery}>
                                        Today 05-11-2020 11:30AM</Text>
                                    <Image
                                        source={require('../../assets/foodIMG.png')}
                                        style={styles.CardImage} />
                                    <View style={styles.dorothyDelivery}>
                                        <Text style={styles.name}>
                                            Name - Mr. Allan</Text>
                                        <Text style={styles.CardDP}>
                                            Delivery Pending - 3.2 KM </Text>
                                    </View>
                                    <View style={styles.CardlocationContainer}>
                                        <Image
                                            source={require('../../assets/location.png')}
                                            style={styles.Cardlocation} />
                                    </View>
                                    <View style={styles.CardcontactContainer}>
                                        <Image
                                            source={require('../../assets/contact.png')}
                                            style={styles.Cardcontact} />
                                    </View>
                                    <View style={styles.thirdCardPaymentFood} >
                                        <Text style={styles.thirdCardFoodtxt} onPress={() => {
                                            props.navigation.navigate({ routeName: 'Payment' });
                                        }}>Pay Now</Text>
                                    </View>
                                    <View style={styles.thirdCardFood} >
                                        <Text style={styles.thirdFoodtxt} onPress={() => {
                                            props.navigation.navigate({ routeName: 'ProductDetail' });
                                        }}>Food</Text>
                                    </View>
                                </View> */}

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
                            My_Delivery_List();
                        }}
                    />
                )}
                {!loading && !error && renderDelivery()}
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
        width: AppConstants.pixelNormalize(134),
        height: AppConstants.pixelNormalize(25),
        fontSize: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(79),
        marginTop: AppConstants.pixelNormalize(-50)
    },
    changetext: {
        color: '#AAAAAA',
        width: AppConstants.pixelNormalize(81),
        height: AppConstants.pixelNormalize(19),
        fontSize: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(79),
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
        marginTop: AppConstants.pixelNormalize(-42),
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
    medicineContainer: {
        width: AppConstants.pixelNormalize(324.02),
        height: AppConstants.pixelNormalize(348.32),
        marginTop: AppConstants.pixelNormalize(17.38),
        marginLeft: AppConstants.pixelNormalize(17.79),
    },
    truckImg: {
        width: AppConstants.pixelNormalize(32.09),
        height: AppConstants.pixelNormalize(23.49),
    },
    uppertxt: {
        width: AppConstants.pixelNormalize(148),
        height: AppConstants.pixelNormalize(23),
        fontSize: AppConstants.pixelNormalize(16),
        color: '#A6AAFE',
        marginLeft: AppConstants.pixelNormalize(45.02),
        marginTop: AppConstants.pixelNormalize(-20)
    },
    CardContainer: {
        width: AppConstants.pixelNormalize(324),
        height: AppConstants.pixelNormalize(145),
        borderColor: '#E9E9E9',
        borderRadius: AppConstants.pixelNormalize(8),
        borderWidth: AppConstants.pixelNormalize(1),
        shadowRadius: AppConstants.pixelNormalize(8),
        marginTop: AppConstants.pixelNormalize(12),
    },
    order: {
        width: AppConstants.pixelNormalize(200),
        height: AppConstants.pixelNormalize(21),
        color: '#000000',
        fontSize: AppConstants.pixelNormalize(16),
        marginTop: AppConstants.pixelNormalize(11),
        marginLeft: AppConstants.pixelNormalize(18),
    },
    CardExpDelivery: {
        width: AppConstants.pixelNormalize(200),
        height: AppConstants.pixelNormalize(17),
        fontSize: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(18),
        color: '#AAAAAA',
    },
    CardImage: {
        width: AppConstants.pixelNormalize(69),
        height: AppConstants.pixelNormalize(52),
        marginLeft: AppConstants.pixelNormalize(240),
        marginTop: AppConstants.pixelNormalize(-40)
    },
    dorothyDelivery: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: AppConstants.pixelNormalize(7),
    },
    name: {
        width: AppConstants.pixelNormalize(133),
        height: AppConstants.pixelNormalize(17),
        fontSize: AppConstants.pixelNormalize(14),
        marginLeft: AppConstants.pixelNormalize(18),
        color: '#000000',
    },
    CardDP: {
        width: AppConstants.pixelNormalize(140),
        height: AppConstants.pixelNormalize(16),
        fontSize: AppConstants.pixelNormalize(13),
        marginLeft: AppConstants.pixelNormalize(80),

        color: '#64BBDE',
    },
    CardlocationContainer: {
        backgroundColor: '#FFFFFF',
        width: AppConstants.pixelNormalize(34),
        height: AppConstants.pixelNormalize(34),
        borderRadius: AppConstants.pixelNormalize(25),
        marginLeft: AppConstants.pixelNormalize(18),
        marginTop: AppConstants.pixelNormalize(10),
        borderColor: '#00000012',
        borderWidth: AppConstants.pixelNormalize(1),
    },
    Cardlocation: {
        width: AppConstants.pixelNormalize(11.07),
        height: AppConstants.pixelNormalize(15.29),
        marginLeft: AppConstants.pixelNormalize(11),
        marginTop: AppConstants.pixelNormalize(9.36)
    },
    CardcontactContainer: {
        backgroundColor: '#FFFFFF',
        width: AppConstants.pixelNormalize(34),
        height: AppConstants.pixelNormalize(34),
        borderRadius: AppConstants.pixelNormalize(25),
        marginLeft: AppConstants.pixelNormalize(64),
        marginTop: AppConstants.pixelNormalize(-33),
        borderColor: '#00000012',
        borderWidth: AppConstants.pixelNormalize(1),
    },
    Cardcontact: {
        width: AppConstants.pixelNormalize(12.99),
        height: AppConstants.pixelNormalize(12.99),
        marginLeft: AppConstants.pixelNormalize(10.09),
        marginTop: AppConstants.pixelNormalize(10.5)
    },
    CardMedicine: {
        backgroundColor: '#64BBDE',
        width: AppConstants.pixelNormalize(85),
        height: AppConstants.pixelNormalize(34),
        marginLeft: AppConstants.pixelNormalize(224),
        marginTop: AppConstants.pixelNormalize(-33),
        borderRadius: AppConstants.pixelNormalize(8)
    },
    CardPaymentMedicine: {
        backgroundColor: '#64BBDE',
        width: AppConstants.pixelNormalize(85),
        height: AppConstants.pixelNormalize(34),
        marginLeft: AppConstants.pixelNormalize(125),
        marginTop: AppConstants.pixelNormalize(-33),
        borderRadius: AppConstants.pixelNormalize(8)
    },
    CardMedicinetxt: {
        width: AppConstants.pixelNormalize(154),
        height: AppConstants.pixelNormalize(19),
        fontSize: AppConstants.pixelNormalize(14),
        color: '#FFFFFF',
        marginLeft: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(7),
    },
    foodContainer: {
        width: AppConstants.pixelNormalize(324.02),
        height: AppConstants.pixelNormalize(178.32),
        marginTop: AppConstants.pixelNormalize(21.68),
        marginLeft: AppConstants.pixelNormalize(17.79),
    },
    thirdCardFood: {
        backgroundColor: '#E5E058',
        width: AppConstants.pixelNormalize(85),
        height: AppConstants.pixelNormalize(34),
        marginLeft: AppConstants.pixelNormalize(224),
        marginTop: AppConstants.pixelNormalize(-33),
        borderRadius: AppConstants.pixelNormalize(8)
    },
    thirdCardPaymentFood: {
        backgroundColor: '#E5E058',
        width: AppConstants.pixelNormalize(85),
        height: AppConstants.pixelNormalize(34),
        marginLeft: AppConstants.pixelNormalize(125),
        marginTop: AppConstants.pixelNormalize(-33),
        borderRadius: AppConstants.pixelNormalize(8)
    },
    thirdCardFoodtxt: {
        width: AppConstants.pixelNormalize(154),
        height: AppConstants.pixelNormalize(17),
        fontSize: AppConstants.pixelNormalize(14),
        color: '#FFFFFF',
        marginLeft: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(7),
    },
    thirdFoodtxt: {
        width: AppConstants.pixelNormalize(154),
        height: AppConstants.pixelNormalize(17),
        fontSize: AppConstants.pixelNormalize(14),
        color: '#FFFFFF',
        marginLeft: AppConstants.pixelNormalize(14),
        marginTop: AppConstants.pixelNormalize(7),
    },
    firstRolling: {
        height: AppConstants.pixelNormalize(330),
    },
    secondRolling: {
        height: AppConstants.pixelNormalize(230)
    }
});