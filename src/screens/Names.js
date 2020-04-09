import React from "react";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
} from "react-native";

import OnBoardChat from "../components/onBoardChat";
import {nameData} from "../helperData/pikkyBotMsgs";
import {nameResponses} from "../helperData/userMsgs";
import {useOnBoardChat} from "../effects/onBoardChat";

const Names = props => {
    const {msgData, setUserMsgNumber, msgNumber} = useOnBoardChat(nameData);

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
                        userResponses={nameResponses}
                    />
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    );
};

export default Names;
