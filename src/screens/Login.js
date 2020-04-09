/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from "react";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
} from "react-native";

import OnBoardChat from "../components/onBoardChat";
import {onBoardingData} from "../helperData/pikkyBotMsgs";
import {userResponses} from "../helperData/userMsgs";
import {useOnBoardChat} from "../effects/onBoardChat";

const Login = props => {
    const {msgData, setUserMsgNumber, msgNumber} = useOnBoardChat(
        onBoardingData,
    );

    return (
        <>
            <StatusBar barStyle="light-content" />
            <KeyboardAvoidingView
                behavior={Platform.Os == "ios" ? "padding" : "position"}
                style={{flex: 1}}>
                <SafeAreaView>
                    <OnBoardChat
                        msgData={msgData}
                        setmsgNumber={setUserMsgNumber}
                        msgNumber={msgNumber}
                        componentId={props.componentId}
                        userResponses={userResponses}
                    />
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    );
};

export default Login;
