import React, { useState, useRef } from "react"
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, } from "react-native"
import { UIHeader } from '../../../components'
import { images, icons, colors, fontSizes } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DateTimePickerr from '../components/DateTimePickerr'
import { isValInput } from '../../../utilies/Validations'
import ItemPickerGroup from '../components/ItemPickerGroup'
import { auth, firebaseDatabase, doc, setDoc, collection, updateDoc, } from '../../../firebase/firebase'
import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { guidGenerator, formatMoneyInput } from "../../../utilies/Validations"

const AddWallet = (props) => {


    const { navigate, goBack } = props.navigation
    const [lastTime, setLastTime] = useState(0)
    const [money, setMoney] = useState('')
    const [selectedValueGroup, setSelectedValueGroup] = useState('')
    const [descriptionAdd, setDescriptionAdd] = useState('')
    const [text, setText] = useState(moment().format('DD-MM-YYYY'))
    const checkNumberZeroVal = money - 0
    const isValidtionOk = () => checkNumberZeroVal != 0 && selectedValueGroup.length != ''
    const setDefaultValue = () => {
        setMoney(0)
        setSelectedValueGroup('')
        setDescriptionAdd('')
        setText(moment().format('DD-MM-YYYY'))
    }

    return <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : 'height'}
        style={{
            flex: 1,
        }}>
        <UIHeader
            isCheck={isValidtionOk()}
            title={'Thêm Giao Dịch'}
            leftIconName={'arrow-left'}
            textUIHeader={'Lưu'}
            rightIconName={undefined}
            onPressLeftIcon={() => {
                goBack()
            }}
            onPressRightIcon={async (obj) => {
                try {
                    console.log('Last time: ', obj.nativeEvent.timestamp)
                    if ((obj.nativeEvent.timestamp - lastTime) > 1500) {
                        console.log('First time: ', obj.nativeEvent.timestamp)
                        setLastTime(obj.nativeEvent.timestamp)
                        const removeReplace = money.replace(/,/g, '')
                        const checkNumberZero = removeReplace - 0
                        const subStringSelect = selectedValueGroup.slice(0, selectedValueGroup.length - 4)
                        const subStringType = selectedValueGroup.slice(-3)
                        const colRef = doc(collection(firebaseDatabase, 'users', auth.currentUser.email, 'wallets'))
                        await setDoc(colRef, {
                            money: checkNumberZero,
                            selectedValueGroup: subStringSelect,
                            descriptionAdd: descriptionAdd,
                            textTime: text,
                            idWalletGD: guidGenerator(),
                            type: subStringType,
                        }).then(async () => {
                            try {
                                let moneyTotal = await AsyncStorage.getItem('numberMoneyWallet')
                                let newUserRef = doc(firebaseDatabase, 'users', auth.currentUser.email)
                                let colRef = doc(collection(firebaseDatabase, 'users', auth.currentUser.email, 'timeline'))
                                await updateDoc(newUserRef, {
                                    numberMoneyWallet: subStringType == 'thu'
                                        ? parseInt(moneyTotal) + parseInt(checkNumberZero)
                                        : parseInt(moneyTotal) - parseInt(checkNumberZero)
                                })
                                await setDoc(colRef, {
                                    money: checkNumberZero,
                                    textTime: text,
                                })
                                setDefaultValue()
                                navigate('TransactionBook')
                            } catch (error) {
                                console.log(error)
                            }
                        }).catch((error) => {
                            console.log(error)
                        })
                    } else {
                        return;
                    }
                } catch (e) {
                    console.log(e)
                }
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
                                }}>VND</Text>
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
                        marginTop: 5,
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
                                alignSelf: 'center',
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
                            maxLength={15}
                            value={money}
                            onChangeText={(text) => {
                                isValInput(text) || text === '' ? setMoney(formatMoneyInput(text)) : ''
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
                            <ItemPickerGroup selectedValue={selectedValueGroup} setSelectedValue={setSelectedValueGroup} />
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
                                value={descriptionAdd}
                                placeholderTextColor={colors.text}
                                onChangeText={(text) => {
                                    setDescriptionAdd(text)
                                }}
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
                            <DateTimePickerr text={text} setText={setText} />
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
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <View style={{
                                flexDirection: 'column'
                            }}><Text style={{
                                fontSize: 16,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}></Text>
                            </View>
                            {/* {adu.map((gigi) => {
                                return <View style={{
                                    flexDirection: 'column'
                                }}><Text style={{
                                    fontSize: 16,
                                    color: 'black',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}>{gigi.money}</Text>
                                </View>
                            })} */}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
}

export default AddWallet