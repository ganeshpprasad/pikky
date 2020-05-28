import React, {PureComponent} from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';

import BACK from '../assets/back.png';
import HELP from '../assets/help.png';

export default class Topbar extends PureComponent {
    render() {
        return (
            <View style={styles.topBarCon}>
                <TouchableOpacity>
                    <Image source={BACK} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={HELP} />
                </TouchableOpacity>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    topBarCon: {
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        width: '90%',
        justifyContent: 'space-between',
    },
});
