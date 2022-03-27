import React from "react"
import { StyleSheet, Text, View, Image, } from "react-native"
import { colors, fontSizes, images } from '../../../constants'
import moment from 'moment'

const ItemTransition = (props) => {

    const {
        item,
        index,
    } = props
    const checkDate = item.textTime
    const subStringDay = checkDate.slice(0, checkDate.length - 8)
    const subStringMonthYear = checkDate.slice(- 7)
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
                    <Text style={styles.txtTextTime}>{moment().format('DD-MM-YYYY') === item.textTime ? 'Hôm nay' : 'Các ngày khác'}</Text>
                    <Text style={styles.txtSubStringMonthYear}>tháng {subStringMonthYear}</Text>
                </View>
                <View style={{
                    flex: 0.5
                }}>
                    <Text style={styles.txtMoney}> {item.type === 'chi' ? '-' : '+'}{item.money} ₫</Text>
                </View>
            </View>
        </View>
        <View style={styles.view_2}>
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
        </View>
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
})

export default ItemTransition