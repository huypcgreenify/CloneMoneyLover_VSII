import React, { useState, useEffect } from "react"
import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native"
import { colors, fontSizes, images } from '../../../constants'
import ItemTransition from './ItemTransition'
import {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabase,
    doc,
    setDoc,
    collection,
    GoogleSignin,
    GoogleAuthProvider,
    signInWithCredential,
    addDoc,
    getDocs,
    getDoc,
    query
} from '../../../firebase/firebase'
import moment from 'moment'

const ThisMonth = (props) => {

    const { navigate, goBack } = props.navigation
    const [adu, setAdu] = useState([])

    // useEffect(() => {
    //     const getRa = async () => {
    //         const q = query(collection(firebaseDatabase, 'users', auth.currentUser.email, 'wallets'))
    //         const querySnapshot = await getDocs(q)
    //         setAdu(querySnapshot.docs.map((details) => ({
    //             ...details.data(),
    //             id: details.id

    //         }))) // Lấy ra toàn bộ wallets
    //         // console.log(queryData)
    //     }
    //     getRa()
    // }, [adu])

    const [transBook, setTransBook] = useState([
        {
            dayZoom: moment().format('DD'),
            monthYear: moment().format('MM-YYYY'),
            money: 10000000000,
            proceedsCurrent: 20000000000
        },
        {
            dayZoom: moment().format('DD'),
            monthYear: moment().format('MM-YYYY'),
            money: 10000000000,
            proceedsCurrent: 20000000000
        },
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
            keyExtractor={item => item.idWalletGD}
            style={{
                marginTop: 10,
                flexDirection: 'column',
                flex: 0.8,
            }}
            listKey={(item) => item.idWalletGD}
            renderItem={({ item, index }) => 
                <TouchableOpacity
                    onPress={() => {
                        navigate('EditTransactionBook')
                    }}>
                    <ItemTransition
                        item={item}
                        index={index}
                        key={item.monthYear}
                        adu={adu}
                    />
                </TouchableOpacity>
            }/>

    </View>
}

export default ThisMonth