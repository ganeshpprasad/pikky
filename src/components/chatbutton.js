import React, {Component, PureComponent} from 'react';
import {Text, View} from 'react-native';

import {styles} from '../styles/onboardfinish';
import {styles as msgStyles} from '../styles/chatMsgListStyle';

const {userMsgCon, botMsgText, msgCon} = msgStyles;

export class RightButton extends Component {
    render() {
        return (
            <View style={[userMsgCon, msgCon, styles.finishMsgs]}>
                <Text style={[botMsgText, styles.finishMsgText]}>
                    {this.props.msg}
                </Text>
            </View>
        );
    }
}

export class LeftButton extends PureComponent {
    render() {
        return (
            <View
                style={[
                    userMsgCon,
                    msgCon,
                    styles.finishMsgs,
                    styles.leftButton,
                ]}>
                <Text style={[botMsgText, styles.finishMsgText]}>
                    {this.props.msg}
                </Text>
            </View>
        );
    }
}
