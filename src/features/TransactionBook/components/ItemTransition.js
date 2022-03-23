import React, { useState } from "react"
import { Text, View, Image, TouchableOpacity, Dimensions, useWindowDimensions, ScrollView, FlatList } from "react-native"
import { colors, fontSizes, images } from '../../../constants'
import moment from 'moment'
import ItemOfItemTransiton from "./ItemOfItemTransiton"

const ItemTransition = (props) => {

    const {
        item,
        index,
        adu
    } = props

    const checkDate = item.textTime
    const subStringDay = checkDate.slice(0, checkDate.length - 8)
    const subStringMonthYear = checkDate.slice(- 7)
    return <View style={{
        marginTop: 15,
        paddingHorizontal: 15,
        paddingVertical: 3,
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
            }}>{subStringDay}</Text>
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
                    }}>{moment().format('DD-M-YYYY') === item.textTime ? 'Hôm nay' : 'Các ngày khác'}</Text>
                    <Text style={{
                        color: colors.text,
                        fontSize: fontSizes.h5,
                    }}>tháng {subStringMonthYear}</Text>
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
        <View style={{
            marginTop: 5,
            marginBottom: 10,
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
                        color: item.type === 'chi' ? 'red' : 'blue',
                    }}>{item.money}</Text>
                </View>
            </View>
        </View>
    </View>
}

export default ItemTransition