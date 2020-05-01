import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from '../styles/userButtonStyle';

const GenderButtons = props => {
    return (
        <>
            <TouchableOpacity
                style={[styles.chatButton, styles.genderButtons]}
                onPress={() => props.userButtonCallback(props.userMsg[0])}>
                <Text style={styles.buttonText}>
                    {props.userMsg[0].display}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.chatButton, styles.genderButtons]}
                onPress={() => props.userButtonCallback(props.userMsg[1])}>
                <Text style={styles.buttonText}>
                    {props.userMsg[1].display}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.chatButton, styles.genderButtons]}
                onPress={() => props.userButtonCallback(props.userMsg[2])}>
                <Text style={styles.buttonText}>
                    {props.userMsg[2].display}
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default GenderButtons;
