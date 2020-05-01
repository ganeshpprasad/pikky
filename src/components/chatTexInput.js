import React, {PureComponent} from 'react';
import {Text, View, TextInput} from 'react-native';

import {styles} from '../styles/userButtonStyle';

export default class Chatbutton extends PureComponent {
    render() {
        return (
            <View style={[styles.userText, this.props.extraTextStyle]}>
                {this.props.pretext ? <Text> {this.props.pretext}</Text> : null}
                <TextInput
                    ref={this.props.textRef}
                    autoFocus
                    keyboardType={
                        this.props.numericKeyboard ? 'numeric' : 'default'
                    }
                    style={styles.textInput}
                    value={
                        this.props.textValue.length > 0
                            ? this.props.textValue
                            : null
                    }
                    onChangeText={text => this.props.setText(text)}
                    placeholder={
                        this.props.placeholder ? this.props.placeholder : null
                    }
                />
            </View>
        );
    }
}
