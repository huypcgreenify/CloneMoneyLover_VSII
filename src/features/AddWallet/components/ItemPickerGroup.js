import React, { useState } from "react"
import { Text, View, TouchableOpacity } from 'react-native'
import { images, icons, colors, fontSizes } from '../../../constants'
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Modal from "react-native-modal";

const ItemPickerGroup = (props) => {

    // const [selectedValue, setSelectedValue] = useState('Chọn nhóm')
    const { selectedValue, setSelectedValue } = props
    return <View style={{
        flexDirection: 'row'
    }}>
        <Picker
            dropdownIconColor={'#6F6F6F'}
            selectedValue={selectedValue}
            style={{
                flex: 1,
                color: colors.text
            }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label='Chọn nhóm' value='chonNhom' />
            <Picker.Item label='Chi tiêu' enabled={false} />
            <Picker.Item label='Ăn uống' value='Ăn uống chi' />
            <Picker.Item label='Thuê nhà' value='Thuê nhà chi' />
            <Picker.Item label='Di chuyển' value='Di chuyển chi' />
            <Picker.Item label='Hóa đơn nước' value='Hóa đơn nước chi' />
            <Picker.Item label='Hóa đơn điện' value='Hóa đơn điện chi' />
            <Picker.Item label='Bảo dưỡng xe' value='Bảo dưỡng xe chi' />
            <Picker.Item label='Sửa & trang trí nhà' value='Sửa & trang trí nhà' />
            <Picker.Item label='Khoản thu' enabled={false} />
            <Picker.Item label='Tiền lương' value='Tiền lương thu' />
            <Picker.Item label='Thu nhập khác' value='Giáo dục thu' />
        </Picker>
    </View >
}

export default ItemPickerGroup