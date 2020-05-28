import React, {PureComponent} from 'react';
import {Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import DONE from '../assets/done.png';
import LOGO from '../assets/donka.png';

export default class LoginDone extends PureComponent {
    render() {
        return (
            <ImageBackground source={DONE} style={styles.con}>
                <Image source={LOGO} />
                <Text style={styles.verified}> Verified </Text>
                <Text style={styles.text}>
                    Let us explore your food habits to create a flavourful
                    profile!
                </Text>
                <TouchableOpacity onPress={this.props.gotoFoodPref}>
                    <LinearGradient
                        colors={[
                            'rgb(255, 230, 72)',
                            'rgb(255, 125, 99)',
                            'rgb(255, 115, 102)',
                        ]}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        style={styles.linearGradient}>
                        <Text style={styles.buttonText}>FOODIE</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = {
    con: {
        backgroundImage: DONE,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    verified: {
        color: 'white',
        fontFamily: 'OpenSans-Regular',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 20,
    },
    text: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 20,
        marginTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
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
};
