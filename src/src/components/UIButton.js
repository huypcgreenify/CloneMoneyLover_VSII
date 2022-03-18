import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { colors, fontSizes } from '../constants'

const UIButton = (props) => {
    
    const { onPress, title, isSelected } = props
    return <TouchableOpacity onPress={onPress}
        style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 45,
            borderRadius: 30,
            marginHorizontal: 15,
            marginVertical: 3,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected == true ? colors.primary : '#F5F6F8',
        }}>
        <Text style={{
            color: isSelected == true ? 'white' : colors.primary,
            fontSize: fontSizes.h4
        }}>{title}</Text>
    </TouchableOpacity >
}

export default UIButton