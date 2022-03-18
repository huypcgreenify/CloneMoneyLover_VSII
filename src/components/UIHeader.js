import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors, fontSizes } from '../constants'

const UIHeader = (props) => {
    const {
        title,
        leftIconName,
        rightIconName,
        onPressLeftIcon,
        onPressRightIcon,
        textUIHeader
    } = props //truyền dữ liệu từ màn này sang màn khác

    return <View style={{
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    }}>
        {leftIconName != undefined ?
            <Icon
                onPress={onPressLeftIcon}
                style={{
                    padding: 10,
                    alignItems: 'center'
                }}
                name={leftIconName}
                size={23}
                color={'black'} /> :
            <View style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
            }}></View>}

        <Text style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: 'black',
            alignSelf: 'center',
        }}>{title}</Text>

        {rightIconName != undefined ? <Icon
            onPress={onPressRightIcon}
            style={{ padding: 10 }}
            name={rightIconName}
            size={23}
            color={'white'}></Icon> :
            <TouchableOpacity
                onPress={onPressRightIcon}
                style={{
                    padding: 10,
                    width: 50,
                    height: 50,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                }}><Text style={{
                    fontSize: 16,
                }}>{textUIHeader}</Text>
            </TouchableOpacity>}
    </View>
}

export default UIHeader