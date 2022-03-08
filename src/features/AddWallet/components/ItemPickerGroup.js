import React, { useState } from "react"
import { Text, View, TouchableOpacity } from 'react-native'
import { images, icons, colors, fontSizes } from '../../../constants'
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5'

const ItemPickerGroup = (props) => {

    const [selectedValue, setSelectedValue] = useState('Chọn nhóm');

    return <View style={{
        flexDirection: 'row'
    }}>
        <Picker
            dropdownIconColor={'#6F6F6F'}
            selectedValue={selectedValue}
            style={{ flex: 1, }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label='Chọn nhóm' value='chonNhom' />
            <Picker.Item label='JavaAA' enabled={false} />
            <Picker.Item label='Java' value='java' />
            <Picker.Item label='JavaAA' enabled={false} />
            <Picker.Item label='JavaScript' value='js' />
        </Picker>
    </View >
}

export default ItemPickerGroup