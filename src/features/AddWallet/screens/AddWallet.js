import React, { useState } from "react"
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native"
import { UIHeader } from '../../../components'
import { images, icons, colors, fontSizes } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DateTimePickerr from '../components/DateTimePickerr'
import { isValInput } from '../../../utilies/Validations'
import ItemPickerGroup from '../components/ItemPickerGroup'

const AddWallet = (props) => {

    const { navigate, goBack } = props.navigation
    const [money, setMoney] = useState('')

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
            onPressRightIcon={() => {
                alert('phải')
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
                            <Icon name={'sticky-note'} size={22}></Icon>
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
                            <Icon name={'calendar-alt'} size={22}></Icon>
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
                            fontSize: fontSizes.h5,
                        }}>Số tiền</Text>
                        <TextInput
                            value={money}
                            onChangeText={(text) => {
                                { isValInput(text) || text === '' ? setMoney(text) : '' }
                            }}
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
                            <Text style={{
                                fontSize: 16,
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}>...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    </KeyboardAvoidingView>
}

export default AddWallet