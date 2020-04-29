import React from 'react';
import {View} from 'react-native';

import ImageItem from '../components/ImageItem';
import PikkyMessageItem from '../components/PikkyMessageItem';

import {styles} from '../styles/onboardfinish';
import SerialUserMessages from '../components/SerialUserMessages';

const LogoSection = () => (
    <View style={styles.logoCon}>
        {ImageItem(require('../assets/onBoarding/onboardfinish3.png'))}
    </View>
);

const FinalUserMsgs = msg => <PikkyMessageItem msg={msg} />;

const FinalButtons = () => (
    <SerialUserMessages
        leftButtonText={'Later Pikky!'}
        rightButtonText={'Finally!'}
    />
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
