import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, BackHandler } from 'react-native'
import { images, colors, fontSizes } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import UITabTopTransactionBook from '../navigations/UITabTopTransactionBook'
import { auth, firebaseDatabase, collection, query, onSnapshot, where, } from '../../../firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

const TransactionBook = (props) => {

    const [moneyWalletList, setMoneyWalletList] = useState([])
    useEffect(() => {
        const q = query(collection(firebaseDatabase, 'users'), where('email', '==', auth.currentUser.email))
        onSnapshot(q, (querySnapshot) => {
            const storageObject = new Object()
            let storageData = ''
            querySnapshot.docs.map((details) => {
                storageObject.nameWallet = details.data().nameWallet
                storageObject.numberMoneyWallet = details.data().numberMoneyWallet
                storageObject.numberMoneyWalletCalculate = details.data().numberMoneyWalletCalculate
                storageData = details.data().numberMoneyWallet
            })
            setMoneyWalletList(storageObject)
            AsyncStorage.setItem('numberMoneyWallet', storageData.toString())
        })
    }, [])

    const backAction = () => {
        if (props.navigation.isFocused()) {
            Alert.alert('Chú ý!', 'Bạn muốn thoát app chứ?', [
                {
                    text: 'Không',
                    onPress: () => null,
                    style: 'cancel',
                },
                {
                    text: 'Có',
                    onPress: () => BackHandler.exitApp()
                },
            ])
            return true
        }
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction)
        return () => BackHandler.removeEventListener('hardwareBackPress', backAction)
    }, [])

    return <View style={styles.container}>
        <View style={styles.view_1}>
            <TouchableOpacity
                onPress={() => {
                    alert('Comming soon!')
                }}
                style={styles.touchableOpacity_1}>
                <Image source={images.wallet}
                    style={styles.imageWallet} />
                <Icon name={'caret-down'}
                    size={14}
                    style={{
                        marginLeft: 7
                    }}
                    color={colors.text} />
            </TouchableOpacity>
            <View style={styles.view_2}>
                <Text style={styles.txtNameWallet}>{moneyWalletList.nameWallet}</Text>
                <Text style={styles.txtNumberMoneyWallet}>{moneyWalletList.numberMoneyWallet} ₫</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    alert('Comming soon!')
                }}
                style={styles.touchableOpacity_2}>
                <Icon name={'bell'}
                    color={'black'}
                    size={23}
                    style={{ marginLeft: 7, }} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    alert('Comming soon!')
                }}
                style={styles.touchableOpacity_3}>
                <Icon name={'ellipsis-v'}
                    color={'black'}
                    size={23}
                    style={{ marginLeft: 7, }} />
            </TouchableOpacity>
        </View>
        <UITabTopTransactionBook />
    </View >
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_1: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    touchableOpacity_1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 20,
        marginTop: 9,
    },
    imageWallet: {
        width: 28,
        height: 28,
    },
    view_2: {
        marginTop: 9,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtNameWallet: {
        color: colors.text,
        textAlign: 'center',
        fontSize: fontSizes.h6,
    },
    txtNumberMoneyWallet: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    touchableOpacity_2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 9,
    },
    touchableOpacity_3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 20,
        marginTop: 9,
        marginEnd: 10,
    }
})
export default TransactionBook