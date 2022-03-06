import React from "react"
import { Text, View, TouchableOpacity } from "react-native"


const AddWallet = (props) => {
    const { navigate, goBack } = props.navigation
    return <View>

        <TouchableOpacity onPress={() => {
            goBack()
        }
        }><Text>HEHEH1</Text></TouchableOpacity>
    </View>
}

export default AddWallet