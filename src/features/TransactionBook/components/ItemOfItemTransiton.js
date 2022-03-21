import React, { useState } from "react"
import { Text, View, Image, TouchableOpacity, Dimensions, useWindowDimensions, ScrollView } from "react-native"
import { colors, fontSizes, images } from '../../../constants'
import moment from 'moment'

const ItemOfItemTransiton = (props) => {

    const {
        item,
        index,
    } = props

    return <View style={{
        marginTop: 5,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    }}>
        <View style={{
            flex: 0.15,
        }}><Image
                source={images.wallet}
                style={{
                    width: 35,
                    height: 35,
                }} />
        </View>
        <View style={{
            flexDirection: 'row',
            flex: 0.85
        }}>
            <View style={{
                flex: 0.5,
                flexDirection: 'column',
            }}>
                <Text style={{
                    color: colors.text,
                    fontSize: fontSizes.h5,
                    fontWeight: 'bold'
                }}>{item.selectedValueGroup}</Text>
                <Text style={{
                    color: colors.text,
                    fontSize: fontSizes.h5,
                }}>{item.descriptionAdd}</Text>
            </View>
            <View style={{
                flex: 0.5
            }}>
                <Text style={{
                    fontSize: fontSizes.h5,
                    textAlign: 'right',
                    color: 'blue',
                }}>{item.money}</Text>
            </View>
        </View>
    </View>
}

export default ItemOfItemTransiton