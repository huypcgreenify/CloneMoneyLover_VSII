import React, { useState, useEffect } from "react"
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native"
import { colors, fontSizes, images } from '../../../constants'
import ItemTransition from './ItemTransition'
import {
    auth,
    firebaseDatabase,
    collection,
    getDocs,
    query,
    onSnapshot,
    where,
    updateDoc,
    doc
} from '../../../firebase/firebase'
import moment from 'moment'

const ThisMonth = (props) => {

    const { navigate, goBack } = props.navigation
    const [adu, setAdu] = useState([])
    const [adu2, setAdu2] = useState('')
    

    useEffect(() => {
        const q = query(collection(firebaseDatabase, 'users', auth.currentUser.email, 'wallets'))
        onSnapshot(q, (querySnapshot) =>
            setAdu(querySnapshot.docs.map((details) => ({
                ...details.data(),
                id: details.id
            }))))
    }, [])

    useEffect(() => {
        const q = query(collection(firebaseDatabase, 'users'), where('email', '==', auth.currentUser.email))
        onSnapshot(q, (querySnapshot) =>
            setAdu2(querySnapshot.docs.map((details) => {
                console.log(details.data().numberMoneyWallet)
                return details.data().numberMoneyWallet
            })))
    }, [])

  


    const aduuu = adu.reduce((total, currentValue) => total = total + Number(currentValue.money), 0)

    

    const small_animals2 = adu.filter((animal) => {
        return animal.type === 'thu'
    }).reduce((total, currentValue) => total = total + Number(currentValue.money), 0)
    const tong = Number(adu2) + small_animals2

    const small_animals = adu.filter((animal) => {
        return animal.type === 'chi'
    }).reduce((total, currentValue) => total = total + Number(currentValue.money), 0)
    console.log(small_animals)
    const hieu = tong - small_animals

    console.log(hieu)
    // useEffect(() => {
    //     let newUserRef = doc(firebaseDatabase, 'users', auth.currentUser.email)
    //     updateDoc(newUserRef, {
    //         numberMoneyWallet: hieu,
    //     })
    // }, [])
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
                }}> {tong} ₫</Text>
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
                }}> {small_animals} ₫</Text>
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
                }}>{hieu} ₫</Text>
            </View>
        </View>
        <FlatList
            data={adu}
            style={{
                marginTop: 10,
                flexDirection: 'column',
                flex: 0.8,
            }}
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
                    />
                </TouchableOpacity>
            } />

    </View>
}

export default ThisMonth