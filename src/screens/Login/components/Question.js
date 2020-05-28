import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Question extends PureComponent {
    render() {
        return (
            <View style={styles.mainTextCon}>
                <Text style={styles.mainText}>{this.props.question}</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    mainTextCon: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: 15,
    },
    mainText: {
        // textAlign: 'left',
        fontSize: 24,
        fontFamily: 'OpenSans-Regular',
        marginLeft: 30,
    },
});
