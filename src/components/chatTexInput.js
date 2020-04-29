import React, {PureComponent} from 'react';
import {Text, View, TextInput} from 'react-native';

import {styles} from '../styles/userButtonStyle';

export default class Chatbutton extends PureComponent {
    render() {
        return (
            <View style={[styles.userText, this.props.extraTextStyle]}>
                {this.props.umsg.id !== 10 && this.props.umsg.id !== 16 ? (
                    <Text> {this.props.umsg.msg}</Text>
                ) : null}
                <TextInput
                    ref={this.props.textRef}
                    autoFocus
                    style={styles.textInput}
                    value={
                        this.props.textValue.length > 0 &&
                        this.props.umsg.id === 10
                            ? '@' + this.props.textValue
                            : this.props.textValue
                    }
                    onChangeText={text => {
                        const t =
                            text.indexOf('@') !== -1
                                ? text.slice(1, text.length)
                                : text;
                        this.props.setText(t);
                    }}
                    placeholder={
                        this.props.umsg.id === 10 || this.props.umsg.id === 16
                            ? this.props.umsg.display
                            : null
                    }
                />
            </View>
        );
    }
}
