import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from "react-native"
import { colors, fontSizes, images } from '../../../constants'
import moment from 'moment'
import ItemOfItemTransiton from "./ItemOfItemTransiton"
import { isValFormatMoney } from '../../../utilies/Validations'

const ItemTransition = (props) => {

    const {
        item2,
        index,
        usersListWallets
    } = props
    const checkDate = item2.textTime
    const subStringDay = checkDate.slice(0, checkDate.length - 8)
    const subStringMonthYear = checkDate.slice(- 7)
    const calculate = usersListWallets.filter((usersType) => {
        return usersType.textTime === item2.textTime && usersType.type === 'thu'
    }).reduce((total, currentValue) => total = total + Number(currentValue.money), 0)
    const calculate2 = usersListWallets.filter((usersType) => {
        return usersType.textTime === item2.textTime && usersType.type === 'chi'
    }).reduce((total, currentValue) => total = total + Number(currentValue.money), 0)
    const moneyChange = calculate - calculate2

    return <View style={styles.container}>
        <View style={styles.view_1}>
            <View style={{ flex: 0.15 }}><Text style={styles.txtSubStringDay}>{subStringDay}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                flex: 0.85
            }}>
                <View style={{
                    flex: 0.5,
                    flexDirection: 'column',
                }}>
                    <Text style={styles.txtTextTime}>
                        {moment(moment().format('DD-MM-YYYY'), 'DD-MM-YYYY') > moment(item2.textTime, 'DD-MM-YYYY')
                            ? 'Các ngày trước' : moment(moment().format('DD-MM-YYYY'), 'DD-MM-YYYY') < moment(item2.textTime, 'DD-MM-YYYY')
                                ? 'Tương lai'
                                : 'Hôm nay'}</Text>
                    <Text style={styles.txtSubStringMonthYear}>tháng {subStringMonthYear}</Text>
                </View>
                <View style={{
                    flex: 0.5
                }}>
                    <Text style={styles.txtMoney}>{moneyChange >= 0 ? '+' : ''}{isValFormatMoney(moneyChange)} ₫</Text>
                </View>
            </View>
        </View>

        <FlatList
            data={usersListWallets}
            style={styles.flShowTransaction}
            keyExtractor={(item, index) => (item + index)}
            listKey={(item, index) => (item + index)}
            renderItem={({ item, index }) =>
                <TouchableOpacity
                    onPress={() => {
                        // navigate('EditTransactionBook')
                    }}>
                    {item2.textTime == item.textTime ?
                        <ItemOfItemTransiton
                            item={item}
                            index={index} /> : null}
                </TouchableOpacity>
            } />
        {/* <View style={styles.view_2}>
            <View style={{ flex: 0.15, }}><Image
                source={images.wallet}
                style={styles.imageWallet} />
            </View>
            <View style={{
                flexDirection: 'row',
                flex: 0.85
            }}>
                <View style={{
                    flex: 0.5,
                    flexDirection: 'column',
                }}>
                    <Text style={styles.txtSelctValueGr}>{item.selectedValueGroup}</Text>
                    <Text style={styles.txtDescriptionAdd}>{item.descriptionAdd}</Text>
                </View>
                <View style={{ flex: 0.5 }}>
                    <Text style={{
                        fontSize: fontSizes.h5,
                        textAlign: 'right',
                        color: item.type === 'chi' ? 'red' : 'blue',
                    }}>{item.money}</Text>
                </View>
            </View>
        </View> */}
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingHorizontal: 15,
        paddingVertical: 3,
        backgroundColor: 'white',
    },
    view_1: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    txtSubStringDay: {
        fontSize: 35,
        color: 'black',
    },
    txtTextTime: {
        color: colors.text,
        fontSize: fontSizes.h5,
        fontWeight: 'bold'
    },
    txtSubStringMonthYear: {
        color: colors.text,
        fontSize: fontSizes.h5,
    },
    txtMoney: {
        fontSize: fontSizes.h5,
        textAlign: 'right',
        color: 'black',
        fontWeight: 'bold',
    },
    view_2: {
        marginTop: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    imageWallet: {
        width: 35,
        height: 35,
    },
    txtSelctValueGr: {
        color: colors.text,
        fontSize: fontSizes.h5,
        fontWeight: 'bold',
    },
    txtDescriptionAdd: {
        color: colors.text,
        fontSize: fontSizes.h5,
    },
    flShowTransaction: {
        marginTop: 10,
        flexDirection: 'column',
        flex: 0.8,
    }
})

export default ItemTransition