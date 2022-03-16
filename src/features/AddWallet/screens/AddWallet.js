import React, { useState, useEffect } from "react"
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native"
import { UIHeader } from '../../../components'
import { images, icons, colors, fontSizes } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DateTimePickerr from '../components/DateTimePickerr'
import { isValInput } from '../../../utilies/Validations'
import ItemPickerGroup from '../components/ItemPickerGroup'
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
    getDocs
} from '../../../firebase/firebase'

const AddWallet = (props) => {

    const { navigate, goBack } = props.navigation
    const [money, setMoney] = useState('')
    const [adu, setAdu] = useState('')
    const test3 = collection(firebaseDatabase, 'wallets')

    useEffect(() => {
        const getRa = async () => {
            const data = await getDocs(test3)
            setAdu(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getRa()
    }, [])

    return <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : 'height'}
        style={{
            flex: 1,
        }}>
        <UIHeader
            title={'Thêm Giao Dịch'}
            leftIconName={'arrow-left'}
            textUIHeader={'Lưu'}
            rightIconName={undefined}
            onPressLeftIcon={() => {
                goBack()
            }}
            onPressRightIcon={async () => {
                // alert(`${auth.currentUser.uid}`)
                // await addDoc(test3, {
                //     userId: auth.currentUser.uid,
                //     money: money
                // }).then(() => {
                //     console.log('OK')
                // }).catch((error) => {
                //     console.log(error)
                // })

            }}
        />
        <ScrollView>
            <View style={{
                marginTop: 20,
                backgroundColor: 'white',
                marginTop: 35,
                flexDirection: 'row',
                paddingTop: 5
            }}>
                <View style={{
                    flex: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginTop: 5,
                        marginBottom: 6,
                        flex: 0.2,
                        justifyContent: 'center',
                    }}>
                        <View
                            style={{
                                marginTop: 22,
                                borderWidth: 1,
                                height: 33,
                                width: 55,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                                borderColor: '#E6E6E6'
                            }}><Text
                                style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: fontSizes.h5,
                                    color: colors.inactive
                                }}>VNSD</Text>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 8,
                        marginBottom: 10,
                        flex: 0.2,
                        justifyContent: 'center',

                    }}>
                        <View
                            style={{
                                height: 40,
                                width: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 30,
                                backgroundColor: '#E6E6E6'
                            }}><View
                                style={{
                                }}></View>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 2,
                        marginBottom: 5,
                        justifyContent: 'center',
                        flex: 0.2
                    }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 30,
                            }}>
                            <Icon
                                colors={colors.text}
                                name={'sticky-note'}
                                size={22}></Icon>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                        flex: 0.2,
                        justifyContent: 'center',
                    }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 30,
                            }}>
                            <Icon
                                colors={colors.text}
                                name={'calendar-alt'}
                                size={22}></Icon>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 15,
                        marginBottom: 5,
                        flex: 0.2,
                        justifyContent: 'center',
                    }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 30,
                            }}>
                            <View
                                style={{
                                    width: 26,
                                    height: 26,
                                }} />
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 0.8,
                    flexDirection: 'column',
                }}>
                    <View style={{
                        borderBottomWidth: 1,
                        borderColor: '#E6E6E6',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: colors.text,
                            fontSize: fontSizes.h5,
                        }}>Số tiền</Text>
                        <TextInput
                            value={money}
                            onChangeText={(text) => {
                                { isValInput(text) || text === '' ? setMoney(text) : '' }
                            }}
                            placeholderTextColor={colors.text}
                            keyboardType='numeric'
                            placeholder='0'
                            style={{
                                fontSize: 30,
                                color: 'black'
                            }} />
                    </View>
                    <View style={{
                        borderBottomWidth: 1,
                        borderColor: '#E6E6E6',
                        paddingVertical: 3,
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <ItemPickerGroup />
                            <Text style={{
                                fontSize: 42
                            }}></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#E6E6E6',
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <TextInput
                                placeholderTextColor={colors.text}
                                placeholder='Nhập ghi chú'
                                maxLength={50}
                                numberOfLines={1}
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                }}></TextInput>
                        </View>
                    </View>
                    <View style={{
                        paddingVertical: 15,
                        justifyContent: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#E6E6E6',
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <DateTimePickerr />
                            <Icon style={{
                                paddingEnd: 15,
                            }}
                                color={colors.text}
                                name='chevron-right'
                                size={15} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        paddingVertical: 15,
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>

                            {adu.map((aduu) => {
                                return <View>
                                    <Text style={{
                                        fontSize: 16,
                                        color: 'black',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}>{aduu.money}</Text>
                                </View>
                            })}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    </KeyboardAvoidingView>
}

export default AddWallet