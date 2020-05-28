import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';

import BACK from './assets/back.png';
import HELP from './assets/help.png';
import LOGO from './assets/logo.png';
import NEXT from './assets/next.png';

export default class Login extends PureComponent {
    render() {
        return (
            <View style={styles.loginCon}>
                <View>
                    <View style={styles.topBarCon}>
                        <TouchableOpacity>
                            <Image source={BACK} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={HELP} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logoCon}>
                        <Image style={styles.logo} source={LOGO} />
                    </View>
                    <View style={styles.mainTextCon}>
                        <Text style={styles.mainText}>
                            What is your mobile phone number?
                        </Text>
                    </View>
                    <View style={styles.textInputCon}>
                        <Text style={styles.textInputP}>+91</Text>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={styles.bottomBtnCon}>
                    <TouchableOpacity style={styles.bottomBtn}>
                        <Image source={NEXT} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    loginCon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
    },
    topBarCon: {
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        width: '90%',
        justifyContent: 'space-between',
    },
    topBarImg: {},
    logo: {},
    logoCon: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '40%',
    },
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
    textInputCon: {
        marginTop: 10,
        marginLeft: 30,
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifySelf: 'cexnter',
        borderBottomColor: '#eee',
        borderBottomWidth: 2,
    },
    textInputP: {
        fontSize: 24,
        fontFamily: 'OpenSans-Regular',
    },
    textInput: {
        flexGrow: 1,
        fontFamily: 'OpenSans-Regular',
        fontSize: 24,
    },
    bottomBtnCon: {
        alignSelf: 'flex-end',
        flexGrow: 1,
        margin: 15,
    },
    bottomBtn: {
        marginTop: 'auto',
    },
};
