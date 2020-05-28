import React, {PureComponent} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class OnboardingSlide extends PureComponent {
    render() {
        return (
            <View style={styles.con} testID="Beautiful">
                <Image style={styles.image} source={this.props.img} />
                <Text style={styles.text}>{this.props.text}</Text>
                {/* <TouchableOpacity style={styles.button}>
                    <Text>SIGN UP</Text>
                </TouchableOpacity> */}
                <LinearGradient
                    colors={[
                        'rgb(255, 230, 72)',
                        'rgb(255, 125, 99)',
                        'rgb(255, 115, 102)',
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={styles.linearGradient}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </LinearGradient>
                <Text style={styles.loginText}>LOGIN</Text>
            </View>
        );
    }
}

var styles = {
    loginText: {
        marginTop: 20,
        padding: 5,
    },
    linearGradient: {
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 35,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
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
        marginTop: 16,
    },
    image: {
        width: '70%',
        height: '50%',
    },
};
