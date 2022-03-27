import React from "react"
import { StyleSheet, Text, View, Image, } from "react-native"
import { colors, fontSizes, images } from '../../../constants'

const ItemOfItemTransiton = (props) => {

    const {
        item,
        index,
    } = props

    return <View style={styles.container}>
        <View style={styles.view_1}><Image
            source={images.wallet}
            style={styles.imageWallet} />
        </View>
        <View style={styles.view_2}>
            <View style={styles.view_2_1}>
                <Text style={styles.txtSelctValueGr}>{item.selectedValueGroup}</Text>
                <Text style={styles.txtDescriptionAdd}>{item.descriptionAdd}</Text>
            </View>
            <View style={styles.view_2_2}>
                <Text style={styles.txtMoney}>{item.money}</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    view_1: {
        flex: 0.15,
    },
    imageWallet: {
        width: 35,
        height: 35,
    },
    view_2: {
        flexDirection: 'row',
        flex: 0.85,
    },
    view_2_1: {
        flex: 0.5,
        flexDirection: 'column',
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
    view_2_2: {
        flex: 0.5,
    },
    txtMoney: {
        fontSize: fontSizes.h5,
        textAlign: 'right',
        color: 'blue',
    },
})

export default ItemOfItemTransiton