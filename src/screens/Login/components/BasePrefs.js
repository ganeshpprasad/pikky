import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const secondOptions = [
    {
        name: 'Poultry',
        isSelected: false,
        typeId: [2, 5],
        id: 1,
    },
    {
        name: 'SeaFood',
        isSelected: false,
        typeId: [2, 5],
        id: 2,
    },
    {
        name: 'Beef',
        isSelected: false,
        typeId: [2, 5],
        id: 3,
    },
    {
        name: 'Pork',
        isSelected: false,
        typeId: [5],
        id: 4,
    },
    {
        name: 'Lamb',
        isSelected: false,
        typeId: [2, 5],
        id: 4,
    },
];

const options = [
    {
        name: 'Veg',
        isSelected: false,
        id: 1,
    },
    {
        name: 'Halal',
        isSelected: false,
        id: 2,
    },
    {
        name: 'Pescatarian',
        isSelected: false,
        id: 3,
    },
    {
        name: 'Vegan',
        isSelected: false,
        id: 4,
    },
    {
        name: 'Non-Veg',
        isSelected: false,
        id: 5,
    },
];

export default class BasePrefs extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            topOptions: options,
        };
    }

    setTopOption = (item, index) => {
        console.log('setsetTopOption');

        let _topOptions = [...this.state.topOptions];
        _topOptions[index].isSelected = !_topOptions[index].isSelected;
        this.setState({topOptions: _topOptions});
    };
    renderOptions = (item, id) => (
        <TouchableOpacity
            style={[styles.chatButton]}
            onPress={() => this.setTopOption(item, id)}>
            <LinearGradient
                colors={
                    item.isSelected
                        ? ['rgb(255, 230, 72)', 'rgb(255, 206, 72)']
                        : ['rgb(200,200,200)', 'rgb(200,200,210)']
                }
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[styles.linearGrad]}>
                <Text style={styles.buttonText}>{item.name}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
    render() {
        return (
            <View style={styles.con}>{options.map(this.renderOptions)}</View>
        );
    }
}

let styles = StyleSheet.create({
    con: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 20,
    },
    chatButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        minWidth: '45%',
        maxWidth: '45%',

        elevation: 1,
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
    },
    linearGrad: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 35,
        borderTopLeftRadius: 35,
    },
    buttonText: {
        color: '#111',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'OpenSans-Regular',
    },
});
