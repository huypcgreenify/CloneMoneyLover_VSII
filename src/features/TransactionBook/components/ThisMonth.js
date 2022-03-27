import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, TouchableOpacity, FlatList, } from "react-native"
import { colors, fontSizes, images } from '../../../constants'
import ItemTransition from './ItemTransition'
import { auth, firebaseDatabase, collection, query, onSnapshot, } from '../../../firebase/firebase'

const ThisMonth = (props) => {

    const { navigate, goBack } = props.navigation
    const [usersList, setUsersList] = useState([])
    const calculateIncome = usersList.filter((usersType) => {
        return usersType.type === 'thu'
    }).reduce((total, currentValue) => total = total + Number(currentValue.money), 0)
    const calculateExpense = usersList.filter((usersType) => {
        return usersType.type === 'chi'
    }).reduce((total, currentValue) => total = total + Number(currentValue.money), 0)
    const moneyChange = calculateIncome - calculateExpense
    useEffect(() => {
        const q = query(collection(firebaseDatabase, 'users', auth.currentUser.email, 'wallets'))
        onSnapshot(q, (querySnapshot) =>
            setUsersList(querySnapshot.docs.map((details) => ({
                ...details.data(),
                id: details.id
            }))))
    }, [])

    // useEffect(() => {
    //     const q = query(collection(firebaseDatabase, 'users'), where('email', '==', auth.currentUser.email))
    //     onSnapshot(q, (querySnapshot) =>
    //         setNumberMoneyWalletList(querySnapshot.docs.map((details) => {
    //             console.log(details.data().numberMoneyWallet)
    //             return details.data().numberMoneyWallet
    //         })))
    // }, [])

    return <View style={styles.container}>
        <View style={styles.view_1}>
            <View style={styles.view_1_1}>
                <Text style={styles.txtMoneyIncome}>Tiền vào</Text>
                <Text style={styles.txtCaculateInCome}>{calculateIncome} ₫</Text>
            </View>
            <View style={styles.view_1_2}>
                <Text style={styles.txtExpense}>Tiền ra</Text>
                <Text style={styles.txtCaculateExpense}>{calculateExpense} ₫</Text>
            </View>
            <View style={styles.view_1_3}>
                <View style={styles.view_1_3_1}></View>
                <View style={styles.view_1_3_2}></View>
            </View>
            <View style={styles.view_1_4}>
                <Text style={styles.txtMoneyChange}>{moneyChange} ₫</Text>
            </View>
        </View>
        <FlatList
            data={usersList}
            style={styles.flShowTransaction}
            keyExtractor={(item, index) => (item + index)}
            listKey={(item, index) => (item + index)}
            renderItem={({ item, index }) =>
                <TouchableOpacity
                    onPress={() => {
                        navigate('EditTransactionBook')
                    }}>
                    <ItemTransition
                        item={item}
                        index={index}
                        key={item.id}
                    /></TouchableOpacity>
            } />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_1: {
        flex: 0.2,
        padding: 15,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    view_1_1: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtMoneyIncome: {
        color: colors.text,
        fontSize: fontSizes.h5,
    },
    txtCaculateInCome: {
        fontSize: fontSizes.h5,
        color: 'black',
    },
    view_1_2: {
        color: colors.text,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtExpense: {
        color: colors.text,
        fontSize: fontSizes.h5,
    },
    txtCaculateExpense: {
        fontSize: fontSizes.h5,
        color: 'black',
    },
    view_1_3: {
        flexDirection: 'row'
    },
    view_1_3_1: {
        flex: 1,
    },
    view_1_3_2: {
        width: '40%',
        marginTop: 5,
        height: 1,
        backgroundColor: colors.inactive,
    },
    view_1_4: {
        marginTop: 5,
        alignItems: 'flex-end',
    },
    txtMoneyChange: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: fontSizes.h5,
    },
    flShowTransaction: {
        marginTop: 10,
        flexDirection: 'column',
        flex: 0.8,
    }
})

export default ThisMonth