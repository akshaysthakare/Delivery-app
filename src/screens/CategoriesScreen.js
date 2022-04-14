import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  Image,
} from 'react-native';
import * as AppConstants from '../constants/AppConstants';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../Constants/Colors';
import PleaseWaitComponent from '../component/PleaseWaitComponent';
import TryAgainComponent from '../component/TryAgainComponent';
import { loadOrderTypes } from '../stores/actions/order_types';
// import { loadOrderStatuses } from "../stores/actions/order_statuses";
import { loadOrders } from '../stores/actions/orders';

export default function CategoriesScreen(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const orderTypes = useSelector(state => state.order_types.ordersTypesArray);
  const orders = useSelector(state => state.orders.ordersArray);
  useEffect(() => {
    My_Categories();
  }, []);

  const My_Categories = async () => {
    try {
      setError(null);
      setLoading(true);
      await dispatch(loadOrders())
      await dispatch(loadOrderTypes());
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };



  const list = orderTypes => {
    return orderTypes.map(element => {
      return (
        <View style={styles.productTypeFood}>
          <Image
            source={require('../../assets/food.png')}
            style={styles.foodImgbackground}
          />
          <Text
            style={styles.foodtxt}
            onPress={() => {
              props.navigation.navigate({ routeName: 'DeliveryList' });
            }}>
            {element.name}
          </Text>
          <Text style={styles.num}>(2)</Text>
          <View style={styles.foodImgContainer}>
            <Image
              source={require('../../assets/foodProduct.png')}
              style={styles.foodproductImg}
            />
          </View>
        </View>


      );
    });
  };

  const renderCategories = () => {
    return (
      <View>
        <View style={styles.firstUpperContainer}>
          <View style={styles.bikeContainer}>
            <View>
              <Image
                source={require('../../assets/bike.png')}
                style={styles.bikeImg}
              />
            </View>
          </View>
          <Text style={styles.cameronTxt}>Hello Cameron</Text>
          <Text style={styles.NYtext}>New York, US</Text>
          <View style={styles.notificatiomContainer}>
            <Image
              source={require('../../assets/notificationImg.png')}
              style={styles.notificationImg}
            />
            <Image
              source={require('../../assets/userImg.png')}
              style={styles.userImg}
            />
          </View>
          <View style={styles.firstRolling}>
            <ScrollView>
              <View style={styles.readyToDeliveryContainer}>
                <View style={styles.RTDV}>
                  <Text style={styles.RTD}> Ready to Delivery </Text>
                  <Text style={styles.viewAll}> View All </Text>
                </View>
                <View style={styles.productList}>
                  {orderTypes !== undefined && list(orderTypes)}
                  {/*<View style={styles.productTypeFood}>*/}
                  {/*  <Image*/}
                  {/*    source={require('../../assets/food.png')}*/}
                  {/*    style={styles.foodImgbackground}*/}
                  {/*  />*/}
                  {/*  {orderTypes.map}*/}
                  {/*  <Text*/}
                  {/*    style={styles.foodtxt}*/}
                  {/*    onPress={() => {*/}
                  {/*      props.navigation.navigate({routeName: 'DeliveryList'});*/}
                  {/*    }}>*/}
                  {/*    Foods*/}
                  {/*  </Text>*/}
                  {/*  <Text style={styles.num}>(2)</Text>*/}
                  {/*  <View style={styles.foodImgContainer}>*/}
                  {/*    <Image*/}
                  {/*      source={require('../../assets/foodProduct.png')}*/}
                  {/*      style={styles.foodproductImg}*/}
                  {/*    />*/}
                  {/*  </View>*/}
                  {/*</View>*/}
                  {/*<View style={styles.productTypeFood}>*/}
                  {/*  <Image*/}
                  {/*    source={require('../../assets/medicine.png')}*/}
                  {/*    style={styles.foodImgbackground}*/}
                  {/*  />*/}
                  {/*  <Text*/}
                  {/*    style={styles.medicinetxt}*/}
                  {/*    onPress={() => {*/}
                  {/*      props.navigation.navigate({routeName: 'DeliveryList'});*/}
                  {/*    }}>*/}
                  {/*    Medicine*/}
                  {/*  </Text>*/}
                  {/*  <Text style={styles.num}>(2)</Text>*/}
                  {/*  <View style={styles.foodImgContainer}>*/}
                  {/*    <Image*/}
                  {/*      source={require('../../assets/medicineProduct.png')}*/}
                  {/*      style={styles.MedicineproductImg}*/}
                  {/*    />*/}
                  {/*  </View>*/}
                  {/*</View>*/}
                  {/*<View style={styles.productTypeFood}>*/}
                  {/*  <Image*/}
                  {/*    source={require('../../assets/package.png')}*/}
                  {/*    style={styles.foodImgbackground}*/}
                  {/*  />*/}
                  {/*  <Text*/}
                  {/*    style={styles.packagestxt}*/}
                  {/*    onPress={() => {*/}
                  {/*      props.navigation.navigate({routeName: 'DeliveryList'});*/}
                  {/*    }}>*/}
                  {/*    Packages*/}
                  {/*  </Text>*/}
                  {/*  <Text style={styles.num}>(5)</Text>*/}
                  {/*  <View style={styles.foodImgContainer}>*/}
                  {/*    <Image*/}
                  {/*      source={require('../../assets/packageProduct.png')}*/}
                  {/*      style={styles.productImg}*/}
                  {/*    />*/}
                  {/*  </View>*/}
                  {/*</View>*/}
                </View>
              </View>

              <View style={styles.TodayDeliveryContainer}>
                <Text style={styles.todayContainer}>Today - 04 Nov 2020</Text>
                <Image
                  source={require('../../assets/deliveryStatus.png')}
                  style={styles.DeliveryStatus}
                />
              </View>
              <View style={styles.rolling}>
                <ScrollView>
                  {/* FlatList Starts Here */}
                  <FlatList
                    data={orders}
                    renderItem={({ item }) => (
                      <View style={styles.CardContainer}>
                        <Text style={styles.orderLGY}>Order No - {item.sku}</Text>
                        <Text style={styles.CardExpDelivery}>
                          Exp Delivery 05-10-2020
                        </Text>
                        <Image
                          source={require('../../assets/medicineImg.png')}
                          style={styles.CardImage}
                        />
                        <View style={styles.dorothyDelivery}>
                          <Text style={styles.dorothy}>Name - {item.customer.first_name}</Text>
                          <Text style={styles.CardDP}>
                            {item.order_status.name}
                          </Text>
                        </View>
                        <View style={styles.CardlocationContainer}>
                          <Image
                            source={require('../../assets/location.png')}
                            style={styles.Cardlocation}
                          />
                        </View>
                        <View style={styles.CardcontactContainer}>
                          <Image
                            source={require('../../assets/contact.png')}
                            style={styles.Cardcontact}
                          />
                        </View>
                        <View style={styles.firstCardPaymentMedicine}>
                          <Text
                            style={styles.firstCardMedicinetxt}
                            onPress={() => {
                              props.navigation.navigate({ routeName: 'Payment' });
                            }}>
                            Pay Now
                          </Text>
                        </View>
                        <View style={styles.firstCardMedicine}>
                          <Text
                            style={styles.firstCardMedicinetxt}
                            onPress={() => {
                              props.navigation.navigate({
                                routeName: 'DeliveryList',
                              });
                            }}>
                            {item.order_type.name}
                          </Text>
                        </View>
                      </View>
                    )}
                  />
                  {/* FlatList Ends Here */}





                  {/*<View style={styles.CardContainer}>*/}
                  {/*  <Text style={styles.orderLGY}>Order No - LGY-013700</Text>*/}
                  {/*  <Text style={styles.CardExpDelivery}>*/}
                  {/*    Exp Delivery 05-10-2020*/}
                  {/*  </Text>*/}
                  {/*  <Image*/}
                  {/*    source={require('../../assets/medicineImg.png')}*/}
                  {/*    style={styles.CardImage}*/}
                  {/*  />*/}
                  {/*  <View style={styles.dorothyDelivery}>*/}
                  {/*    <Text style={styles.dorothy}>Name - Mr. Dorothy</Text>*/}
                  {/*    <Text style={styles.CardDP}>*/}
                  {/*      Delivery Pending - 1.5 KM*/}
                  {/*    </Text>*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.CardlocationContainer}>*/}
                  {/*    <Image*/}
                  {/*      source={require('../../assets/location.png')}*/}
                  {/*      style={styles.Cardlocation}*/}
                  {/*    />*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.CardcontactContainer}>*/}
                  {/*    <Image*/}
                  {/*      source={require('../../assets/contact.png')}*/}
                  {/*      style={styles.Cardcontact}*/}
                  {/*    />*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.firstCardPaymentMedicine}>*/}
                  {/*    <Text*/}
                  {/*      style={styles.firstCardMedicinetxt}*/}
                  {/*      onPress={() => {*/}
                  {/*        props.navigation.navigate({routeName: 'Payment'});*/}
                  {/*      }}>*/}
                  {/*      Pay Now*/}
                  {/*    </Text>*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.firstCardMedicine}>*/}
                  {/*    <Text*/}
                  {/*      style={styles.firstCardMedicinetxt}*/}
                  {/*      onPress={() => {*/}
                  {/*        props.navigation.navigate({*/}
                  {/*          routeName: 'DeliveryList',*/}
                  {/*        });*/}
                  {/*      }}>*/}
                  {/*      Medicine*/}
                  {/*    </Text>*/}
                  {/*  </View>*/}
                  {/*</View>*/}
                  {/*<View style={styles.CardContainer}>*/}
                  {/*  <Text style={styles.orderLGY}>Order No - LGY-013700</Text>*/}
                  {/*  <Text style={styles.CardExpDelivery}>*/}
                  {/*    Exp Delivery 05-10-2020*/}
                  {/*  </Text>*/}
                  {/*  <Image*/}
                  {/*    source={require('../../assets/medicineImg.png')}*/}
                  {/*    style={styles.CardImage}*/}
                  {/*  />*/}
                  {/*  <View style={styles.dorothyDelivery}>*/}
                  {/*    <Text style={styles.dorothy}>Name - Mr. Dorothy</Text>*/}
                  {/*    <Text style={styles.CardDP}>*/}
                  {/*      Delivery Pending - 1.5 KM*/}
                  {/*    </Text>*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.CardlocationContainer}>*/}
                  {/*    <Image*/}
                  {/*      source={require('../../assets/location.png')}*/}
                  {/*      style={styles.Cardlocation}*/}
                  {/*    />*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.CardcontactContainer}>*/}
                  {/*    <Image*/}
                  {/*      source={require('../../assets/contact.png')}*/}
                  {/*      style={styles.Cardcontact}*/}
                  {/*    />*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.firstCardPaymentMedicine}>*/}
                  {/*    <Text*/}
                  {/*      style={styles.firstCardMedicinetxt}*/}
                  {/*      onPress={() => {*/}
                  {/*        props.navigation.navigate({routeName: 'Payment'});*/}
                  {/*      }}>*/}
                  {/*      Pay Now*/}
                  {/*    </Text>*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.firstCardMedicine}>*/}
                  {/*    <Text*/}
                  {/*      style={styles.firstCardMedicinetxt}*/}
                  {/*      onPress={() => {*/}
                  {/*        props.navigation.navigate({*/}
                  {/*          routeName: 'DeliveryList',*/}
                  {/*        });*/}
                  {/*      }}>*/}
                  {/*      Medicine*/}
                  {/*    </Text>*/}
                  {/*  </View>*/}
                  {/*</View>*/}
                  {/*<View style={styles.CardContainer}>*/}
                  {/*  <Text style={styles.orderLGY}>Order No - PKG-045867</Text>*/}
                  {/*  <Text style={styles.CardExpDelivery}>*/}
                  {/*    Exp Delivery 05-10-2020*/}
                  {/*  </Text>*/}
                  {/*  <Image*/}
                  {/*    source={require('../../assets/packageImg.png')}*/}
                  {/*    style={styles.CardImage}*/}
                  {/*  />*/}
                  {/*  <View style={styles.dorothyDelivery}>*/}
                  {/*    <Text style={styles.dorothy}>Name - Mrs. Lauren</Text>*/}
                  {/*    <Text style={styles.CardDP}>*/}
                  {/*      Delivery Pending - 3 KM{' '}*/}
                  {/*    </Text>*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.CardlocationContainer}>*/}
                  {/*    <Image*/}
                  {/*      source={require('../../assets/location.png')}*/}
                  {/*      style={styles.Cardlocation}*/}
                  {/*    />*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.CardcontactContainer}>*/}
                  {/*    <Image*/}
                  {/*      source={require('../../assets/contact.png')}*/}
                  {/*      style={styles.Cardcontact}*/}
                  {/*    />*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.secondCardPayment}>*/}
                  {/*    <Text*/}
                  {/*      style={styles.secondCardPackagetxt}*/}
                  {/*      onPress={() => {*/}
                  {/*        props.navigation.navigate({routeName: 'Payment'});*/}
                  {/*      }}>*/}
                  {/*      Pay Now*/}
                  {/*    </Text>*/}
                  {/*  </View>*/}
                  {/*  <View style={styles.secondCardPackage}>*/}
                  {/*    <Text*/}
                  {/*      style={styles.secondCardPackagetxt}*/}
                  {/*      onPress={() => {*/}
                  {/*        props.navigation.navigate({*/}
                  {/*          routeName: 'DeliveryList',*/}
                  {/*        });*/}
                  {/*      }}>*/}
                  {/*      Package*/}
                  {/*    </Text>*/}
                  {/*  </View>*/}
                  {/*</View>*/}
                </ScrollView>
              </View>
            </ScrollView>
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
              console.log('I am inside Try again');
              My_Categories();
            }}
          />
        )}
        {!loading && !error && renderCategories()}
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
  cameronTxt: {
    color: '#000000',
    width: AppConstants.pixelNormalize(134),
    height: AppConstants.pixelNormalize(25),
    fontSize: AppConstants.pixelNormalize(20),
    marginLeft: AppConstants.pixelNormalize(79),
    marginTop: AppConstants.pixelNormalize(-50),
  },
  NYtext: {
    color: '#AAAAAA',
    width: AppConstants.pixelNormalize(85),
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
    marginLeft: AppConstants.pixelNormalize(17.32),
  },
  userImg: {
    width: AppConstants.pixelNormalize(30),
    height: AppConstants.pixelNormalize(30),
    marginTop: AppConstants.pixelNormalize(10),
    marginRight: AppConstants.pixelNormalize(13.32),
  },
  readyToDeliveryContainer: {
    width: AppConstants.pixelNormalize(319),
    height: AppConstants.pixelNormalize(155),
    marginTop: AppConstants.pixelNormalize(20),
    marginLeft: AppConstants.pixelNormalize(17.81),
  },
  RTD: {
    color: '#000000',
    width: AppConstants.pixelNormalize(140),
    height: AppConstants.pixelNormalize(23),
    fontSize: AppConstants.pixelNormalize(16),
  },
  viewAll: {
    width: AppConstants.pixelNormalize(59),
    height: AppConstants.pixelNormalize(19),
    fontSize: AppConstants.pixelNormalize(14),
    color: '#AAAAAA',
  },
  RTDV: {
    width: AppConstants.pixelNormalize(319),
    height: AppConstants.pixelNormalize(23),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productList: {
    width: AppConstants.pixelNormalize(319),
    height: AppConstants.pixelNormalize(117),
    color: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: AppConstants.pixelNormalize(15),
  },
  productTypeFood: {
    width: AppConstants.pixelNormalize(95),
    height: AppConstants.pixelNormalize(1117),
    flexDirection: 'column',
  },
  foodImgbackground: {
    width: AppConstants.pixelNormalize(95),
    height: AppConstants.pixelNormalize(91),
  },
  foodtxt: {
    width: AppConstants.pixelNormalize(60),
    height: AppConstants.pixelNormalize(19),
    color: '#FFFFFF',
    fontSize: AppConstants.pixelNormalize(14),
    marginLeft: AppConstants.pixelNormalize(28),
    marginTop: AppConstants.pixelNormalize(-80),
  },
  num: {
    width: AppConstants.pixelNormalize(22),
    height: AppConstants.pixelNormalize(20),
    color: '#FFFFFF',
    fontSize: AppConstants.pixelNormalize(14),
    marginLeft: AppConstants.pixelNormalize(36),
  },
  foodImgContainer: {
    backgroundColor: '#FFFFFF',
    width: AppConstants.pixelNormalize(52),
    height: AppConstants.pixelNormalize(52),
    borderRadius: AppConstants.pixelNormalize(25),
    marginLeft: AppConstants.pixelNormalize(21),
    marginTop: AppConstants.pixelNormalize(10),
  },
  foodproductImg: {
    width: AppConstants.pixelNormalize(27.44),
    height: AppConstants.pixelNormalize(24.5),
    marginLeft: AppConstants.pixelNormalize(12.28),
    marginTop: AppConstants.pixelNormalize(13.31),
  },
  medicinetxt: {
    width: AppConstants.pixelNormalize(59),
    height: AppConstants.pixelNormalize(19),
    color: '#FFFFFF',
    fontSize: AppConstants.pixelNormalize(14),
    marginLeft: AppConstants.pixelNormalize(18),
    marginTop: AppConstants.pixelNormalize(-80),
  },
  MedicineproductImg: {
    width: AppConstants.pixelNormalize(25.34),
    height: AppConstants.pixelNormalize(29.34),
    marginLeft: AppConstants.pixelNormalize(11.39),
    marginTop: AppConstants.pixelNormalize(13.33),
  },
  packagestxt: {
    width: AppConstants.pixelNormalize(64),
    height: AppConstants.pixelNormalize(19),
    color: '#FFFFFF',
    fontSize: AppConstants.pixelNormalize(14),
    marginLeft: AppConstants.pixelNormalize(18),
    marginTop: AppConstants.pixelNormalize(-80),
  },
  productImg: {
    width: AppConstants.pixelNormalize(25.87),
    height: AppConstants.pixelNormalize(25.89),
    marginLeft: AppConstants.pixelNormalize(13.89),
    marginTop: AppConstants.pixelNormalize(13.06),
  },
  TodayDeliveryContainer: {
    width: AppConstants.pixelNormalize(324),
    height: AppConstants.pixelNormalize(129),
    marginLeft: AppConstants.pixelNormalize(17.81),
    marginTop: AppConstants.pixelNormalize(8),
  },
  todayContainer: {
    width: AppConstants.pixelNormalize(155),
    height: AppConstants.pixelNormalize(23),
    fontSize: AppConstants.pixelNormalize(16),
    color: '#000000',
  },
  DeliveryStatus: {
    width: AppConstants.pixelNormalize(324),
    height: AppConstants.pixelNormalize(90),
  },
  CardContainer: {
    width: AppConstants.pixelNormalize(324),
    height: AppConstants.pixelNormalize(145),
    borderColor: '#E9E9E9',
    borderRadius: AppConstants.pixelNormalize(8),
    borderWidth: AppConstants.pixelNormalize(1),
    shadowRadius: AppConstants.pixelNormalize(8),
    marginLeft: AppConstants.pixelNormalize(17.81),
    marginTop: AppConstants.pixelNormalize(12),
  },
  orderLGY: {
    width: AppConstants.pixelNormalize(200),
    height: AppConstants.pixelNormalize(21),
    color: '#000000',
    fontSize: AppConstants.pixelNormalize(16),
    marginTop: AppConstants.pixelNormalize(11),
    marginLeft: AppConstants.pixelNormalize(18),
  },

  CardImage: {
    width: AppConstants.pixelNormalize(69),
    height: AppConstants.pixelNormalize(52),
    marginLeft: AppConstants.pixelNormalize(240),
    marginTop: AppConstants.pixelNormalize(-40),
  },
  dorothyDelivery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: AppConstants.pixelNormalize(7),
  },
  dorothy: {
    width: AppConstants.pixelNormalize(135),
    height: AppConstants.pixelNormalize(17),
    fontSize: AppConstants.pixelNormalize(14),
    marginLeft: AppConstants.pixelNormalize(18),
    color: '#000000',
  },
  CardDP: {
    width: AppConstants.pixelNormalize(140),
    height: AppConstants.pixelNormalize(16),
    fontSize: AppConstants.pixelNormalize(12),
    color: '#000000',
    marginTop: AppConstants.pixelNormalize(2),
    marginLeft: AppConstants.pixelNormalize(90),

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
    marginTop: AppConstants.pixelNormalize(9.36),
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
    marginTop: AppConstants.pixelNormalize(10.5),
  },
  firstCardMedicine: {
    backgroundColor: '#64BBDE',
    width: AppConstants.pixelNormalize(85),
    height: AppConstants.pixelNormalize(34),
    marginLeft: AppConstants.pixelNormalize(224),
    marginTop: AppConstants.pixelNormalize(-33),
    borderRadius: AppConstants.pixelNormalize(8),
  },
  firstCardPaymentMedicine: {
    backgroundColor: '#64BBDE',
    width: AppConstants.pixelNormalize(85),
    height: AppConstants.pixelNormalize(34),
    marginLeft: AppConstants.pixelNormalize(125),
    marginTop: AppConstants.pixelNormalize(-33),
    borderRadius: AppConstants.pixelNormalize(8),
  },
  firstCardMedicinetxt: {
    width: AppConstants.pixelNormalize(64),
    height: AppConstants.pixelNormalize(17),
    fontSize: AppConstants.pixelNormalize(14),
    color: '#FFFFFF',
    marginLeft: AppConstants.pixelNormalize(14),
    marginTop: AppConstants.pixelNormalize(7),
  },
  CardExpDelivery: {
    width: AppConstants.pixelNormalize(200),
    height: AppConstants.pixelNormalize(17),
    fontSize: AppConstants.pixelNormalize(14),
    marginLeft: AppConstants.pixelNormalize(18),
    color: '#AAAAAA',
  },
  secondCardPackage: {
    backgroundColor: '#E958FD',
    width: AppConstants.pixelNormalize(85),
    height: AppConstants.pixelNormalize(34),
    marginLeft: AppConstants.pixelNormalize(224),
    marginTop: AppConstants.pixelNormalize(-33),
    borderRadius: AppConstants.pixelNormalize(8),
  },
  secondCardPayment: {
    backgroundColor: '#E958FD',
    width: AppConstants.pixelNormalize(85),
    height: AppConstants.pixelNormalize(34),
    marginLeft: AppConstants.pixelNormalize(125),
    marginTop: AppConstants.pixelNormalize(-33),
    borderRadius: AppConstants.pixelNormalize(8),
  },
  secondCardPackagetxt: {
    width: AppConstants.pixelNormalize(154),
    height: AppConstants.pixelNormalize(18),
    fontSize: AppConstants.pixelNormalize(14),
    color: '#FFFFFF',
    marginLeft: AppConstants.pixelNormalize(14),
    marginTop: AppConstants.pixelNormalize(7),
  },
  rolling: {
    height: AppConstants.pixelNormalize(300),
  },
  firstRolling: {
    height: AppConstants.pixelNormalize(630),
  },
});
