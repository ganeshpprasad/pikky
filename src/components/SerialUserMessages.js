import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../styles/onboardfinish';
import {LeftButton, RightButton} from './chatbutton';

const SerialUserMessages = props => {
    return (
        <View style={styles.finishMsgsCon}>
            <LeftButton msg={props.leftButtonText} />
            <RightButton msg={props.rightButtonText} />
        </View>
    );
};

export default SerialUserMessages;
