import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

const DateTimePickerr = (props) => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState(moment().format('DD-MM-YYYY'))

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear()
        setText(fDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return <View>
        <TouchableOpacity
            style={{
                width: 250,
            }}
            onPress={showDatepicker} >
            <Text style={{
                fontSize: 16,
                color: 'black',
            }}>{text}</Text>
        </TouchableOpacity>
        {
            show && (
                <DateTimePicker
                    style={{ flex: 1, backgroundColor: 'red' }}
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )
        }
    </View >
}

export default DateTimePickerr