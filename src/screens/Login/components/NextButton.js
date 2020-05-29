import React, {PureComponent} from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';

import NEXT from '../assets/next.png';
import NEXTA from '../assets/nexta.png';

export default class NextButton extends PureComponent {
    render() {
        return (
            <View style={styles.bottomBtnCon}>
                <TouchableOpacity
                    onPress={this.props.cb}
                    style={styles.bottomBtn}>
                    {this.props.active ? (
                        <Image source={NEXTA} />
                    ) : (
                        <Image source={NEXT} />
                    )}
                </TouchableOpacity>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    bottomBtnCon: {
        alignSelf: 'flex-end',
        flexGrow: 1,
        margin: 15,
    },
    bottomBtn: {
        marginTop: 'auto',
    },
});
