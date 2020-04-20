/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Image,
    StatusBar,
    View,
} from 'react-native';

import OnBoardChat from '../components/onBoardChat';
import {onBoardingData} from '../helperData/pikkyBotMsgs';
import {userResponses} from '../helperData/userMsgs';
import {useOnBoardChat} from '../effects/onBoardChat';
import {styles} from '../styles/login';

const {
    pikkyImage,
    pikkySignal,
    chatCon,
    shadowOfPikky,
    brandingCon,
    loginCon,
} = styles;

const Login = props => {
    const {msgData, setUserMsgNumber, msgNumber} = useOnBoardChat(
        onBoardingData,
    );

    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <View style={loginCon}>
                    <View style={brandingCon}>
                        <Image
                            source={require('../assets/onBoarding/43x.png')}
                            style={pikkySignal}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/onBoarding/33x.png')}
                            style={pikkySignal}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/onBoarding/23x.png')}
                            style={pikkySignal}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/onBoarding/13x.png')}
                            style={pikkySignal}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/onBoarding/logo2x.png')}
                            style={pikkyImage}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/onBoarding/shad3x.png')}
                            style={shadowOfPikky}
                            resizeMode="contain"
                        />
                    </View>
                    <KeyboardAvoidingView
                        behavior={Platform.Os == 'ios' ? 'padding' : 'position'}
                        style={chatCon}>
                        <OnBoardChat
                            msgData={msgData}
                            setmsgNumber={setUserMsgNumber}
                            msgNumber={msgNumber}
                            componentId={props.componentId}
                            userResponses={userResponses}
                        />
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </>
    );
};

export default Login;
