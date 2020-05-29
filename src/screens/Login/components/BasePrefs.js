import React, {PureComponent} from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Topbar from './Topbar';
import Question from './Question';
import NextButton from './NextButton';
import STRT from '../assets/strt.png';

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
        name: 'Vegetarian',
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
            topOptions: Array.from(options),
            secondOptions: Array.from(secondOptions),
            showMoreHidden: false,
            isChilhoodFood: false,
            isFavCuisine: false,
            childHoodCuis: ['', '', ''],
            searchCuisRes: [],
        };
        this.moveForward = this.moveForward.bind(this);
    }

    setTopOption = (item, index) => {
        let _topOptions = [...this.state.topOptions];
        _topOptions[index].isSelected = !_topOptions[index].isSelected;
        this.setState({topOptions: _topOptions});
    };

    setBottomOption = (item, index) => {
        let _bottomOptions = [...this.state.secondOptions];
        _bottomOptions[index].isSelected = !_bottomOptions[index].isSelected;
        this.setState({secondOptions: _bottomOptions});
    };

    renderOptions = (item, id, isSec) => {
        let cb = isSec ? this.setBottomOption : this.setTopOption;
        return (
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
    };
    renderBottomOptions = (item, id, isSec) => {
        return (
            <TouchableOpacity
                style={[styles.chatButton]}
                onPress={() => this.setBottomOption(item, id)}>
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
    };

    showMoreFood = () => {
        if (this.state.showMoreHidden) {
            return null;
        }
        if (
            !this.state.topOptions[1].isSelected &&
            !this.state.topOptions[4].isSelected
        ) {
            return null;
        }
        return (
            <View style={styles.moreOptions}>
                {this.state.secondOptions.map((item, id) =>
                    this.renderBottomOptions(item, id, true),
                )}
                <TouchableOpacity
                    onPress={() => this.setState({showMoreHidden: 'true'})}
                    style={styles.closeBtn}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        );
    };

    moveForward() {
        if (!this.state.isChilhoodFood) {
            return this.setState({isChilhoodFood: true});
        }
    }

    searchCuis() {}

    render() {
        let question = this.state.isChilhoodFood
            ? 'What food did you grow up eating? Enter at least three. '
            : this.state.isFavCuisine
            ? 'What are your favourite cuisines?'
            : 'What are your food preferences? Select as many as you like.';

        return (
            <>
                <View style={styles.loginCon}>
                    <Topbar />
                    <View style={styles.logoStrt}>
                        <Image source={STRT} />
                    </View>
                    <Question question={question} />
                    {!this.state.isChilhoodFood ? (
                        <>
                            <View style={styles.con}>
                                {this.state.topOptions.map(this.renderOptions)}
                            </View>
                            {this.showMoreFood()}
                        </>
                    ) : null}
                    {this.state.isChilhoodFood ? (
                        <>
                            <Text
                                style={{
                                    color: '#959191',
                                    marginLeft: 30,
                                    marginTop: 30,
                                }}>
                                Eg. Your home food like Paratha, Idly, Salads
                            </Text>
                            <View style={styles.con}>
                                {this.state.childHoodCuis.map(item => (
                                    <TextInput
                                        style={{
                                            borderBottomColor: '#959191',
                                            borderBottomWidth: 1,
                                            width: '85%',
                                            marginLeft: 10,
                                            marginBottom: 20,
                                        }}
                                        value={item.name}
                                        onChangeText={t => this.searchCuis}
                                        placeholder="Food"
                                    />
                                ))}
                                <Text
                                    style={{
                                        color: '#959191',
                                        marginLeft: 10,
                                        width: '85%',
                                    }}>
                                    Add
                                </Text>
                            </View>
                        </>
                    ) : null}
                    <NextButton
                        cb={this.moveForward}
                        active={
                            this.state.topOptions.filter(i => i.isSelected)
                                .length > 0
                        }
                    />
                </View>
            </>
        );
    }
}

let styles = StyleSheet.create({
    loginCon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
    },
    logoStrt: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    con: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
    },
    chatButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        minWidth: '42%',
        maxWidth: '42%',

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
    moreOptions: {
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // shadowColor: 'rgb(0,0,0)',
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowRadius: 6,
        // shadowOpacity: 0.3,
        // elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 4,
        paddingLeft: 20,
        paddingBottom: 60,
    },
    closeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        minWidth: '42%',
        maxWidth: '42%',
    },
});
