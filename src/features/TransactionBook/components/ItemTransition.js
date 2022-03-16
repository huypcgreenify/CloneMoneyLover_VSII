import React, { useState } from "react"
import { Text, View, Image, TouchableOpacity, Dimensions, useWindowDimensions, ScrollView } from "react-native"
import { colors, fontSizes, images } from '../../../constants'
import moment from 'moment'

const ItemTransition = (props) => {

    const {
        item,
        index,
    } = props

    return <View style={{
        paddingHorizontal: 15,
        height: 125,
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
                    }}>+{item.proceeds} ₫</Text>
                </View>
            </View>
        </View>
        {/** ---------------------- */}
        <View style={{
            marginTop: 5,
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
                    }}>Thu nhập khác</Text>
                    <Text style={{
                        color: colors.text,
                        fontSize: fontSizes.h5,
                    }}>Điều chỉnh số dư</Text>
                </View>
                <View style={{
                    flex: 0.5
                }}>
                    <Text style={{
                        fontSize: fontSizes.h5,
                        textAlign: 'right',
                        color: 'blue',
                    }}>{item.proceedsCurrent}</Text>
                </View>
            </View>
        </View>
    </View>
}

export default ItemTransition