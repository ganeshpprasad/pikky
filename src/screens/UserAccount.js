import React from 'react';
import {View, Image, Text} from 'react-native';

import {styles} from '../styles/onboardfinish';
import {styles as msgStyles} from '../styles/chatMsgListStyle';

const {userMsgCon, pikkyMsgCon, botMsgText, msgCon} = msgStyles;

const LogoSection = () => (
    <View style={styles.logoCon}>
        <Image
            source={require('../assets/onBoarding/onboardfinish3.png')}
            // style={pikkySignal}
            resizeMode="contain"
        />
    </View>
);

const FinalUserMsgs = msg => (
    <View style={[pikkyMsgCon, msgCon, styles.pikkyMsgYellow]}>
        <Text style={botMsgText}>{msg}</Text>
    </View>
);

const Buttons = (msg, isLeft) => {
    const leftButtonStyle = isLeft ? styles.leftButton : null;
    return (
        <View style={[userMsgCon, msgCon, styles.finishMsgs, leftButtonStyle]}>
            <Text style={[botMsgText, styles.finishMsgText]}>{msg}</Text>
        </View>
    );
};

const FinalButtons = () => (
    <View style={styles.finishMsgsCon}>
        {Buttons('Later Pikky!', true)}
        {Buttons('Finally!', false)}
    </View>
);

const UserAccount = () => {
    return (
        <View style={styles.onboardfinishCon}>
            {LogoSection()}
            <View style={styles.onboardMsgsCon}>
                {FinalUserMsgs('Sweet tooth! You are all set.')}
                {FinalUserMsgs('Now, let’s talk food.')}
                {FinalButtons()}
                {FinalUserMsgs('P.S. I am always hungry :)')}
            </View>
        </View>
    );
};

export default UserAccount;
