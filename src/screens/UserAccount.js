import React from 'react';
import {View, Image, Text} from 'react-native';

import {styles} from '../styles/onboardfinish';
import {styles as msgStyles} from '../styles/chatMsgListStyle';

const {userMsgCon, pikkyMsgCon, botMsgText, msgCon} = msgStyles;

const UserAccount = () => {
    return (
        <View style={styles.onboardfinishCon}>
            <View style={styles.logoCon}>
                <Image
                    source={require('../assets/onBoarding/onboardfinish3.png')}
                    // style={pikkySignal}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.onboardMsgsCon}>
                <View style={[pikkyMsgCon, msgCon, styles.pikkyMsgYellow]}>
                    <Text style={botMsgText}>
                        {'Sweet tooth! You are all set.'}
                    </Text>
                </View>
                <View style={[pikkyMsgCon, msgCon, styles.pikkyMsgYellow]}>
                    <Text style={botMsgText}>{'Now, let’s talk food.'}</Text>
                </View>
                <View style={styles.finishMsgsCon}>
                    <View
                        style={[
                            userMsgCon,
                            msgCon,
                            styles.finishMsgs,
                            styles.leftButton,
                        ]}>
                        <Text style={[botMsgText, styles.finishMsgText]}>
                            {'Later Pikky!'}
                        </Text>
                    </View>
                    <View style={[userMsgCon, msgCon, styles.finishMsgs]}>
                        <Text style={[botMsgText, styles.finishMsgText]}>
                            {'Finally!'}
                        </Text>
                    </View>
                </View>
                <View style={[pikkyMsgCon, msgCon, styles.pikkyMsgYellow]}>
                    <Text style={botMsgText}>
                        {'P.S. I am always hungry :)'}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default UserAccount;
