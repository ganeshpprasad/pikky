/**
 * Landing screen if the user is not logged in.
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

import ImageItem from '../components/ImageItem';
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
    brandingConHidden,
    chatConFullScreen,
    topbar,
} = styles;

const ImageCircle = source => ImageItem(source, pikkySignal);

const ImageItemLogo = () =>
    ImageItem(require('../assets/onBoarding/logo2x.png'), pikkyImage);

const ImageShad = () =>
    ImageItem(require('../assets/onBoarding/shad3x.png'), shadowOfPikky);

const ImagesCon = msgNumber => (
    <View style={msgNumber > 0 ? brandingConHidden : brandingCon}>
        {ImageCircle(require('../assets/onBoarding/43x.png'))}
        {ImageCircle(require('../assets/onBoarding/33x.png'))}
        {ImageCircle(require('../assets/onBoarding/23x.png'))}
        {ImageCircle(require('../assets/onBoarding/13x.png'))}
        {ImageItemLogo()}
        {ImageShad()}
    </View>
);

const topbarRender = msgNumber =>
    msgNumber > 0 ? (
        <View style={topbar}>
            {ImageItem(require('../assets/onBoarding/chatPikkyIcon3.png'))}
            {ImageItem(require('../assets/onBoarding/question3.png'))}
        </View>
    ) : null;

const ChatCon = (msgNumber, msgData, setUserMsgNumber, componentId) => (
    <KeyboardAvoidingView
        behavior={Platform.Os === 'ios' ? 'padding' : 'padding'}
        keyboardVerticalOffset={220}
        style={msgNumber > 0 ? chatConFullScreen : chatCon}>
        {topbarRender(msgNumber)}
        <OnBoardChat
            msgData={msgData}
            setmsgNumber={setUserMsgNumber}
            msgNumber={msgNumber}
            componentId={componentId}
            userResponses={userResponses}
        />
    </KeyboardAvoidingView>
);

const Login = props => {
    const {msgData, setUserMsgNumber, msgNumber} = useOnBoardChat(
        onBoardingData,
    );

    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <View style={loginCon}>
                    {ImagesCon(msgNumber)}
                    {ChatCon(
                        msgNumber,
                        msgData,
                        setUserMsgNumber,
                        props.componentId,
                    )}
                </View>
            </SafeAreaView>
        </>
    );
};

export default Login;
