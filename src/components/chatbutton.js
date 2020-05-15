import React, {Component, PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import ImageItem from './ImageItem';

import {styles} from '../styles/onboardfinish';
import {styles as msgStyles} from '../styles/userButtonStyle';

const {userMsgCon, botMsgText, msgCon} = msgStyles;

export class Chatbutton extends Component {
    render() {
        const {umsg, color, extraStyle, userButtonCallback} = this.props;

        return (
            <TouchableOpacity
                style={[msgStyles.chatButton, color, extraStyle]}
                onPress={() => userButtonCallback(umsg)}>
                {umsg.id === 15
                    ? ImageItem(require('../assets/onBoarding/locpin3.png'), {
                          paddingRight: 30,
                      })
                    : null}
                <Text style={msgStyles.buttonText}>{umsg.display}</Text>
            </TouchableOpacity>
        );
    }
}

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
