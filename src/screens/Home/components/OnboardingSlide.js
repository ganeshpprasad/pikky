import React, {PureComponent} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default class OnboardingSlide extends PureComponent {
    render() {
        return (
            <View style={styles.con} testID="Beautiful">
                <Image style={styles.image} source={this.props.img} />
                <Text style={styles.text}>{this.props.text}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>SIGN UP</Text>
                </TouchableOpacity>
                <Text>LOGIN</Text>
            </View>
        );
    }
}

var styles = {
    con: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    text: {
        color: '#000',
        fontSize: 24,
        fontFamily: 'OpenSans-Regular',
        width: '70%',
        textAlign: 'center',
    },
    image: {},
    button: {
        padding: 5,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 35,
    },
};
