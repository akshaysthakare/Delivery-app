import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyleSheet, ScrollView, Text, Image, 
    TextInput, View, ImageBackground, TouchableOpacity,
     CheckBox,StatusBar,
     Platform,SafeAreaView } from 'react-native';
import * as AppConstants from '../constants/AppConstants';
import Dash from 'react-native-dash';
import {loginUser} from '../stores/actions/auth';
import RoundCheckbox from 'react-native-round-checkbox';
import { loadUsers } from "../stores/actions/users";
import {loadTypes} from '../stores/actions/types';
import Colors from "../../Constants/Colors";
import PleaseWaitComponent from '../component/PleaseWaitComponent';
import TryAgainComponent from '../component/TryAgainComponent';

import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace';

export default function RegisterScreen(props) {
    const [isSelected, setSelection] = useState(false);
    const [isTick, setIsTick] = useState(false);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = useSelector(state => state.auth.token);
    useEffect(() => {
        My_Register();
    }, []);
  
    const My_Register = async () => {
        try {
            setError(null);
            setLoading(true);
            await dispatch(loginUser('admin', 'admin@1234'));
            await dispatch(loadUsers());
            await dispatch(loadTypes());
            setLoading(false);

        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };
    const renderRegister = () => {

    return (

        <View>
            <ImageBackground
                source={require('../../assets/bgs.png')}
                style={{
                    width: AppConstants.pixelNormalize(410),
                    height: AppConstants.pixelNormalize(812),
                    marginLeft: AppConstants.pixelNormalize(-10)
                }}>
                <View style={styles.combineContainer}>

                    <View style={styles.combine}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate({ routeName: 'Login' });
                            }}>
                            <View style={styles.Curve} >
                                <Image
                                    source={require('../../assets/arrow.png')}
                                    style={{
                                        height: AppConstants.pixelNormalize(24),
                                        width: AppConstants.pixelNormalize(24),
                                        marginTop: AppConstants.pixelNormalize(1),
                                        marginLeft: AppConstants.pixelNormalize(3),
                                    }} />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                marginTop: AppConstants.pixelNormalize(50),
                                fontSize: AppConstants.pixelNormalize(22),
                                marginLeft: AppConstants.pixelNormalize(20),
                                color: 'black'
                            }}>Create Your Account</Text>
                        </View>
                    </View>

                    <View style={styles.Maincontainer}>
                        <View style={styles.scroll}>
                            <ScrollView>

                                <View style={styles.container1}>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(10),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginLeft: AppConstants.pixelNormalize(26),
                                        color: 'black',

                                    }}>Full Name</Text>
                                    <TextInput
                                        style={{
                                            marginLeft: AppConstants.pixelNormalize(26),
                                            fontSize: AppConstants.pixelNormalize(16),
                                            color: '#7A7A7A',
                                        }} />
                                    <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={250}
                                        style={{
                                            width: 132,
                                            flexDirection: 'row',

                                            marginLeft: AppConstants.pixelNormalize(26),
                                            marginTop: AppConstants.pixelNormalize(-11),
                                        }} />
                                </View>
                                <View style={styles.container1}>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(10),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginLeft: AppConstants.pixelNormalize(26),
                                        color: 'black'
                                    }}>Email</Text>
                                    <TextInput
                                        style={{
                                            marginLeft: AppConstants.pixelNormalize(26),
                                            fontSize: AppConstants.pixelNormalize(16),
                                            color: '#7A7A7A',
                                        }} />
                                    <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={250}
                                        style={{
                                            width: 132,
                                            flexDirection: 'row',
                                            marginLeft: AppConstants.pixelNormalize(26),
                                            marginTop: AppConstants.pixelNormalize(-11),
                                        }} />
                                </View>
                                <View style={styles.container1}>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(10),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginLeft: AppConstants.pixelNormalize(26),
                                        color: 'black'
                                    }}>Mobile</Text>
                                    <TextInput
                                        style={{
                                            marginLeft: AppConstants.pixelNormalize(26),
                                            fontSize: AppConstants.pixelNormalize(16),
                                            color: '#7A7A7A',
                                        }} />
                                    <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={250}
                                        style={{
                                            width: 132,
                                            flexDirection: 'row',
                                            marginLeft: AppConstants.pixelNormalize(26),
                                            marginTop: AppConstants.pixelNormalize(-11),
                                        }} />
                                </View>
                                <View style={styles.container1}>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(10),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginLeft: AppConstants.pixelNormalize(26),
                                        color: 'black'
                                    }}>User Name</Text>
                                    <TextInput
                                        style={{
                                            marginLeft: AppConstants.pixelNormalize(26),
                                            fontSize: AppConstants.pixelNormalize(16),
                                            color: '#7A7A7A',
                                        }} />
                                    <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={250}
                                        style={{
                                            width: 132,
                                            flexDirection: 'row',
                                            marginLeft: AppConstants.pixelNormalize(26),
                                            marginTop: AppConstants.pixelNormalize(-11),
                                        }} />
                                </View>
                                <View style={styles.container1}>
                                    <Text style={{
                                        marginTop: AppConstants.pixelNormalize(10),
                                        fontSize: AppConstants.pixelNormalize(16),
                                        marginLeft: AppConstants.pixelNormalize(26),
                                        color: 'black'
                                    }}>Password</Text>
                                    <TextInput
                                        style={{
                                            marginLeft: AppConstants.pixelNormalize(26),
                                            fontSize: AppConstants.pixelNormalize(16),
                                            color: '#7A7A7A',
                                        }} />
                                    <Dash dashColor={'#AAAAAA'} dashThickness={1} dashLength={250}
                                        style={{
                                            width: 132,
                                            flexDirection: 'row',
                                            marginLeft: AppConstants.pixelNormalize(26),
                                            marginTop: AppConstants.pixelNormalize(-11),
                                        }} />
                                </View>
                                <View style={styles.container2}>
                                    <View style={styles.combine}>

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
                                        <View>
                                            <Text style={{

                                                fontSize: AppConstants.pixelNormalize(14),
                                                marginTop: AppConstants.pixelNormalize(10),
                                                marginLeft: AppConstants.pixelNormalize(15),
                                                width: AppConstants.pixelNormalize(230),
                                                height: AppConstants.pixelNormalize(38),
                                            }}>To register, Please tick to agree to our</Text>
                                            <Text style={{
                                                fontSize: AppConstants.pixelNormalize(14),
                                                marginTop: AppConstants.pixelNormalize(3),
                                                marginLeft: AppConstants.pixelNormalize(15),
                                                color: '#7C96FE'
                                            }}>Terms and Condtions</Text>
                                            <TouchableOpacity onPress={() => {
                                                props.navigation.navigate({ routeName: 'Categories' });
                                            }}>
                                                <View style={styles.rectangle}>
                                                    <Text style={{
                                                        marginTop: AppConstants.pixelNormalize(5),
                                                        marginLeft: AppConstants.pixelNormalize(30),
                                                        fontSize: AppConstants.pixelNormalize(14),
                                                        color: '#FFFFFF'
                                                    }}>Register</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>

                        </View>

                    </View>

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
                        My_Register();
                    }}
                />
            )}
            {!loading && !error && renderRegister()}
        </SafeAreaView>
    </>
);
}



const styles = StyleSheet.create({
    Curve: {
        width: AppConstants.pixelNormalize(39),
        height: AppConstants.pixelNormalize(35),
        borderTopLeftRadius: AppConstants.pixelNormalize(5),
        borderTopRightRadius: AppConstants.pixelNormalize(15),
        borderBottomLeftRadius: AppConstants.pixelNormalize(5),
        borderBottomRightRadius: AppConstants.pixelNormalize(15),
        marginTop: AppConstants.pixelNormalize(50),
        marginLeft: AppConstants.pixelNormalize(20),
        padding: AppConstants.pixelNormalize(5),
        backgroundColor: '#64BBDE'
    },
    combineContainer: {
        marginTop: AppConstants.pixelNormalize(-25),

    },
    backgroundColor: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF'
    },
    combine: {
        flexDirection: 'row',

    },
    container1: {
        height: AppConstants.pixelNormalize(100),
        width: AppConstants.pixelNormalize(317),
        marginTop: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(10),
        borderRadius: 15,
        backgroundColor: '#FFFFFF',

    },
    container2: {
        height: AppConstants.pixelNormalize(120),
        width: AppConstants.pixelNormalize(317),
        marginTop: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(10),
        borderRadius: 15,
        backgroundColor: '#FFFFFF'
    },

    checkBox: {
        marginTop: AppConstants.pixelNormalize(50),
        marginLeft: AppConstants.pixelNormalize(20),
    },
    Maincontainer: {
        height: AppConstants.pixelNormalize(620),
        width: AppConstants.pixelNormalize(337),
        marginTop: AppConstants.pixelNormalize(20),
        marginLeft: AppConstants.pixelNormalize(30),
        borderRadius: 15,
        backgroundColor: '#75ebd7',
        flexDirection: 'column'
    },
    rectangle: {
        height: AppConstants.pixelNormalize(30),
        width: AppConstants.pixelNormalize(110),
        marginTop: AppConstants.pixelNormalize(9),
        marginLeft: AppConstants.pixelNormalize(60),
        backgroundColor: '#c92295',

    },
    scroll:{
        height: AppConstants.pixelNormalize(590),

    },
    checkIcon:{
        marginTop: AppConstants.pixelNormalize(50),
        marginLeft: AppConstants.pixelNormalize(20),

    }
});