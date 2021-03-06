import React, {PureComponent} from 'react';
import {Text, View, TextInput} from 'react-native';

import {styles} from '../styles/userButtonStyle';

export default class ChatTextInput extends PureComponent {
    render() {
        return (
            <View style={[styles.userText, this.props.extraTextStyle]}>
                {this.props.pretext ? <Text> {this.props.pretext}</Text> : null}
                <TextInput
                    maxLength={this.props.maxLength}
                    ref={this.props.textRef}
                    autoFocus={this.props.autoFocus ? true : false}
                    keyboardType={this.props.numericKeyboard ? 'numeric' : null}
                    style={[styles.textInput, this.props.style]}
                    value={
                        this.props.textValue.length > 0
                            ? this.props.textValue
                            : null
                    }
                    onChangeText={text => this.props.setText(text)}
                    placeholder={
                        this.props.placeholder ? this.props.placeholder : null
                    }
                    onKeyPress={this.props.onKeyPress}
                    onSubmitEditing={this.props.onSubmitEditing}
                />
            </View>
        );
    }
}
