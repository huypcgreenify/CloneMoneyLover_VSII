import React, { useState, useEffect } from "react"
import { Text, View, Image, TouchableOpacity, useWindowDimensions } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'

const ItemWelcom = ({ item }) => {

    const { width, height } = useWindowDimensions()

    return (
        <View style={{
            width: width,
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/**1. Giảm các khoản chi không cần thiết */}
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{
                    padding: 8,
                    borderRadius: 25,
                    marginEnd: 10
                }}>
                    <Image
                        source={item.image1}
                        style={{
                            width: 20,
                            height: 20,
                        }} />
                </View>
                <Text style={{
                    color: colors.text,
                    fontSize: fontSizes.h4,
                    alignSelf: 'center'
                }}>{item.description1}</Text>
            </View>
            {/**2. Tiết kiệm đều đặn hàng tháng*/}
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    marginEnd: 10
                }}>
                    <Image
                        source={item.image2}
                        style={{
                            width: 35,
                            height: 35,
                        }} />
                </View>
                <Text style={{
                    color: colors.text,
                    fontSize: fontSizes.h4,
                    alignSelf: 'center'
                }}>{item.description2}</Text>
            </View>
            {/**3. Quản lí tất cả ở mọi nơi*/}
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    marginEnd: 10,
                    padding: 1,
                    borderRadius: 25,
                }}>
                    <Image
                        source={item.image3}
                        style={{
                            width: 35,
                            height: 35,
                        }} />
                </View>
                <Text style={{
                    color: colors.text,
                    fontSize: fontSizes.h4,
                    alignSelf: 'center'
                }}>{item.description3}</Text>
            </View>
            {/**---------------------------------*/}
            <View style={{
                marginTop: 120,
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: fontSizes.h2,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                    width: 300
                }}>{item.title}</Text>
                {/* <Icon style={{
                    backgroundColor: colors.primary,
                    color: colors.primary,
                    borderRadius: 25,
                    marginTop: 20
                }}
                    name={'circle'}
                    size={6.5} /> */}
            </View>
        </View>
    )
}

export default ItemWelcom