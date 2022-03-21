import React, { useState } from "react"
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native'
import { images, icons, colors, fontSizes } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValInput } from '../../../utilies/Validations'
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

const AddWalletTransaction = (props) => {
    
    const { navigate, goBack } = props.navigation

    const [nameWallet, setNameWallet] = useState('Tiền mặt')
    const [numberMoneyWallet, setNumberMoneyWallet] = useState('')
    const [focusNameWallet, setFocusNameWallet] = useState(false)
    const [focusNumberMoneyWallet, setFocusNumberMoneyWallet] = useState(false)
    const isValidtionOk = () => nameWallet.length > 0
        && numberMoneyWallet.length > 0

    return <ScrollView style={{
        backgroundColor: 'white',
    }}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h1,
                fontWeight: 'bold',
            }}>Đầu tiên, hãy tạo ví</Text>
            <Text style={{
                color: colors.text,
                fontSize: fontSizes.h5,
                width: '80%',
                textAlign: 'center',
                marginTop: 10
            }}>Money Lover giúp bạn ghi chép chi tiêu từ nhiều Ví khác nhau. Mỗi ví đại diện cho một nguồn tiền.</Text>
            <Image
                source={images.wallet}
                style={{
                    width: 55,
                    height: 55,
                    marginTop: 30
                }}
            />
        </View>
        <View style={{
            marginHorizontal: 30,
            justifyContent: 'center',
        }}>
            <Text style={{
                color: colors.text,
                fontSize: fontSizes.h5,
                marginTop: 40
            }}>Tên ví</Text>
            <TextInput
                value={nameWallet}
                onChangeText={(text) => {
                    setNameWallet(text)
                }}
                onFocus={() => {
                    setFocusNameWallet(true)
                }}
                onBlur={() => {
                    setFocusNameWallet(false)
                }}
                style={{
                    color: 'black',
                    height: 40,
                    borderBottomWidth: 2,
                    borderColor: focusNameWallet ? colors.primary : colors.text,
                    fontSize: fontSizes.h5,
                }}
                placeholderTextColor={focusNameWallet ? colors.primary : colors.text}
            />

            <Text style={{
                color: colors.text,
                fontSize: fontSizes.h5,
                marginTop: 30
            }}>Đơn vị tiền</Text>
            <TextInput
                editable={false}
                style={{
                    color: 'black',
                    height: 40,
                    borderBottomWidth: 2,
                    borderColor: colors.text,
                    fontSize: fontSizes.h5,
                    fontWeight: 'bold',
                }}
                value={'VND'}
            />
            <Text style={{
                color: colors.text,
                fontSize: fontSizes.h5,
                marginTop: 30
            }}>Số dư</Text>
            <TextInput
                value={numberMoneyWallet}
                onChangeText={(text) => {
                    { isValInput(text) || text === '' ? setNumberMoneyWallet(text) : '' }
                }}
                keyboardType='numeric'
                onFocus={() => {
                    setFocusNumberMoneyWallet(true)
                }}
                onBlur={() => {
                    setFocusNumberMoneyWallet(false)
                }}
                style={{
                    color: 'black',
                    height: 40,
                    borderBottomWidth: 2,
                    borderColor: focusNumberMoneyWallet ? colors.primary : colors.text,
                    fontSize: fontSizes.h5,
                }}
                placeholderTextColor={focusNumberMoneyWallet ? colors.primary : colors.text}
            />
            <TouchableOpacity
                disabled={!isValidtionOk() == true}
                onPress={async () => {
                    const colRef = doc(collection(firebaseDatabase, 'users', auth.currentUser.email, 'wallettransaction'))
                    await setDoc(colRef, {
                        nameWallet: nameWallet,
                        numberMoneyWallet: numberMoneyWallet,
                    }).then(() => {
                        console.log('OK')
                        navigate('UITabView')
                    }).catch((error) => {
                        console.log(error)
                    })
                    console.log(colRef.id)

                }}
                style={{
                    marginTop: 60,
                    backgroundColor: isValidtionOk() == true ? '#EBF8EE' : colors.inactive,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 35,
                    height: 35,
                }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h5,
                    color: isValidtionOk() == true ? colors.primary : 'white',
                }}>TẠO VÍ</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
}

export default AddWalletTransaction