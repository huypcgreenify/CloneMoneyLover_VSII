import React, { useState } from "react"
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native"
import { colors, fontSizes, images } from '../../../constants'
import ItemTransition from './ItemTransition'
import moment from 'moment'

const ThisMonth = (props) => {

    const [transBook, setTransBook] = useState([
        {
            dayZoom: moment().format('DD'),
            monthYear: moment().format('MM-YYYY'),
            proceeds: 20000000000,
            proceedsCurrent: 20000000000
        }
    ])

    return <View style={{
        flex: 1
    }}>
        <View style={{
            flex: 0.2,
            padding: 15,
            backgroundColor: 'white',
            flexDirection: 'column'
        }}>
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    color: colors.text,
                    fontSize: fontSizes.h5
                }}>Số dư đầu</Text>
                <Text style={{
                    fontSize: fontSizes.h5,
                    color: 'black'
                }}>0.00 ₫</Text>
            </View>
            <View style={{
                color: colors.text,
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    color: colors.text,
                    fontSize: fontSizes.h5
                }}>Số dư cuối</Text>
                <Text style={{
                    fontSize: fontSizes.h5,
                    color: 'black'
                }}>+1,950,000,000.00 ₫</Text>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1
                }}></View>
                <View style={{
                    width: '40%',
                    marginTop: 5,
                    height: 1,
                    backgroundColor: colors.inactive
                }}></View>
            </View>
            <View style={{
                marginTop: 5,
                alignItems: 'flex-end'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: fontSizes.h5
                }}>+1,950,000,000.00 ₫</Text>
            </View>
        </View>
        <FlatList
            data={transBook}
            keyExtractor={item => item.monthYear}
            style={{
                marginTop: 25,
                flexDirection: 'column',
                flex: 0.8,
            }}
            renderItem={({ item, index }) =>
                <ItemTransition
                    item={item}
                    index={index} />
            }
        />

    </View>
}

export default ThisMonth