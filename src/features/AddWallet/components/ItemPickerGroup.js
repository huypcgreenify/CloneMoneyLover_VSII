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
            <Picker.Item label='Chi tiêu hàng tháng' enabled={false} />
            <Picker.Item label='Ăn uống' value='Ăn uống' />
            <Picker.Item label='Thuê nhà' value='Thuê nhà' />
            <Picker.Item label='Di chuyển' value='Di chuyển' />
            <Picker.Item label='Hóa đơn nước' value='Hóa đơn nước' />
            <Picker.Item label='Hóa đơn điện' value='Hóa đơn điện' />
            <Picker.Item label='Chi tiêu cần thiết' enabled={false} />
            <Picker.Item label='Sửa & trang trí nhà' value='Sửa & trang trí nhà' />
            <Picker.Item label='Bảo dưỡng xe' value='Bảo dưỡng xe' />
            <Picker.Item label='Khám sức khỏe' value='Khám sức khỏe' />
            <Picker.Item label='Giáo dục' value='Giáo dục' />
        </Picker>
    </View >
}

export default ItemPickerGroup