import React, { useState } from "react"
import { Text, View, Image, TouchableOpacity, Dimensions, useWindowDimensions, ScrollView,FlatList } from "react-native"
import { colors, fontSizes, images } from '../../../constants'
import moment from 'moment'
import ItemOfItemTransiton from "./ItemOfItemTransiton"

const ItemTransition = (props) => {

    const {
        item,
        index,
        adu
    } = props

    return <ScrollView style={{
        marginTop: 15,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    }}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1
        }}>
            <View style={{
                flex: 0.15
            }}><Text style={{
                fontSize: 35,
                color: 'black'
            }}>{item.dayZoom}</Text>
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
                    }}>{moment().format('DD') ? 'Hôm nay' : 'Các ngày trước'}</Text>
                    <Text style={{
                        color: colors.text,
                        fontSize: fontSizes.h5,
                    }}>tháng {item.monthYear}</Text>
                </View>
                <View style={{
                    flex: 0.5
                }}>
                    <Text style={{
                        fontSize: fontSizes.h5,
                        textAlign: 'right',
                        color: 'black',
                        fontWeight: 'bold',
                    }}>+{item.money} ₫</Text>
                </View>
            </View>
        </View>
        {/** ---------------------- */}
        {/* <ItemOfItemTransiton item={item} /> */}
        {/* <FlatList
            data={adu}
            keyExtractor={item => item.proceeds}
            style={{
                marginTop: 10,
                flexDirection: 'column',
            }}            
            listKey={(item) => item.descriptionAdd}
            renderItem={({ item, index }) =>
                <TouchableOpacity
                  >
                     
                    <ItemOfItemTransiton
                        item={item}
                        index={index}
                        />
                
                </TouchableOpacity>
            }
        /> */}
    </ScrollView>
}

export default ItemTransition