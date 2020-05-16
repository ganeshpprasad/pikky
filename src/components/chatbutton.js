import React, {Component, PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import ImageItem from './ImageItem';

import {styles} from '../styles/onboardfinish';
import {styles as msgStyles} from '../styles/userButtonStyle';

const {userMsgCon, botMsgText, buttonText, msgCon, chatButton} = msgStyles;

export class Chatbutton extends PureComponent {
    render() {
        const {list, color, extraStyle, userButtonCallback, index} = this.props;

        return (
            <TouchableOpacity
                style={[chatButton, color, extraStyle]}
                onPress={() => userButtonCallback(list, index)}>
                <Text style={buttonText}>{list.name}</Text>
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
