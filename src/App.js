/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from "react";
import {SafeAreaView, StyleSheet, StatusBar} from "react-native";

import OnBoardChat from "./components/onBoardChat";

export const msgTypes = {
    USER: "user",
    PIKKY: "pikky",
};

const onBoardingData = [
    {
        msg: "Hello",
        type: msgTypes.PIKKY,
    },
    {
        msg: `Nice to meet you`,
        type: msgTypes.PIKKY,
    },
    {
        msg: `How would you like to login?`,
        type: msgTypes.PIKKY,
    },
    {
        msg: `Successfully logged in!`,
        type: msgTypes.PIKKY,
    },
    {
        msg: `Let's get to know you better`,
        type: msgTypes.PIKKY,
    },
];

const App = () => {
    const [msgNumber, setmsgNumber] = useState(0);
    const [msgData, setMsgData] = useState([]);

    console.log("msgNumber", msgNumber);

    useEffect(() => {
        msgNumber < onBoardingData.length &&
            setMsgData(msgs => [...msgs, onBoardingData[msgNumber]]);
    }, [msgNumber]);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <OnBoardChat
                    msgData={msgData}
                    setmsgNumber={userMsg => {
                        setMsgData(msgs => [...msgs, userMsg]);
                        setmsgNumber(msgNumber => msgNumber + 1);
                    }}
                    msgNumber={msgNumber}
                />
            </SafeAreaView>
        </>
    );
};

export default App;
