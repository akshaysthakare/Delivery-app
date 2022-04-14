import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../Constants/Colors';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import DeliveryListScreen from '../screens/DeliveryListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PaymentScreen from '../screens/PaymentScreen';
import RegisterScreen from '../screens/RegisterScreen';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },

};
const DeliveryNavigator = createStackNavigator({

    MainScreen: {
        screen: SplashScreen,
        navigationOptions: {
            header: false,
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: false,
        }
    },

    DeliveryList: {
        screen: DeliveryListScreen,
        navigationOptions: {
            header: false,
        }
    },
    Payment: {
        screen: PaymentScreen,
        navigationOptions: {
            header: false,
        }
    },

    ProductDetail: {
        screen: ProductDetailScreen,
        navigationOptions: {
            header: false,
        }
    },
    Location: {
        screen: LocationScreen,
        navigationOptions: {
            header: false,
        }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            header: false,
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            header: false,
        }
    },
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            header: false,
        }
    },
});


const ScreenNavigator = createStackNavigator(
    {

        Categories: { screen: CategoriesScreen, navigationOptions: { headerShown: false } },
    },
    {
        navigationOptions: {

            // drawerIcon: drawerConfig => (
            //     <Ionicons
            //         name='home'
            //         size={23}
            //         color={drawerConfig.tintColor}
            //     />

            // ),
            drawerLabel: 'Home',

        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const OrdersNavigator = createStackNavigator(
    {
        Orders: { screen: ProductDetailScreen, navigationOptions: { headerShown: false } },

    },
    {
        navigationOptions: {
            // drawerIcon: drawerConfig => (
            //     <Ionicons
            //         name='basket'
            //         size={23}
            //         color={drawerConfig.tintColor}
            //     />
            // ),
            drawerLabel: 'My Orders'
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const PaymentNavigator = createStackNavigator(
    {
        Payment: { screen: PaymentScreen, navigationOptions: { headerShown: false } },

    },
    {
        navigationOptions: {
            // drawerIcon: drawerConfig => (
            //     <Ionicons
            //         name='finger-print'
            //         size={23}
            //         color={drawerConfig.tintColor}
            //     />
            // ),
            drawerLabel: 'Pay'
        },
        defaultNavigationOptions: defaultNavOptions
    }
);


const MyProfileNavigator = createStackNavigator(
    {
        Profile: { screen: ProfileScreen, navigationOptions: { headerShown: false } },

    },
    {
        navigationOptions: {
            // drawerIcon: drawerConfig => (
            //     <Ionicons

            //         name={'person'}
            //         size={23}
            //         color={drawerConfig.tintColor}
            //     />
            // ),
            drawerLabel: 'My Profile'
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const Navigator = createDrawerNavigator(
    {
        Drawer: { screen: DeliveryNavigator, navigationOptions: { header: false } },
        Categories: ScreenNavigator,
        Orders: OrdersNavigator,
        Payment: PaymentNavigator,

        Profile: MyProfileNavigator,

    },

);


export default createAppContainer(Navigator);