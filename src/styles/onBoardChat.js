import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 21,
        color: '#a6a',
        margin: 10,
        textAlign: 'center',
    },
    screenCon: {
        // flex: 1,
        // backgroundColor: '#3fa',
        maxHeight: Dimensions.get('screen').height - 150,
        // margin: 10,
        // justifyContent: 'center',
    },
});
