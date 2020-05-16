import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../styles/chatMsgListStyle';
import {styles as finalScreenStyles} from '../styles/onboardfinish';

const PikkyMessageItem = props => {
    return (
        <View
            style={[
                styles.pikkyMsgCon,
                styles.msgCon,
                props.isWhiteMsg ? null : finalScreenStyles.pikkyMsgYellow,
            ]}>
            <Text style={styles.botMsgText}>{props.msg}</Text>
        </View>
    );
};

export default PikkyMessageItem;
