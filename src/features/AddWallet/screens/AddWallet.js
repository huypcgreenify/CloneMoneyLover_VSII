import React, { useState } from "react"
import { Text, View, TouchableOpacity, Image, TouchableHighlight } from "react-native"
import { UIHeader } from '../../../components'
import { images, icons, colors, fontSizes } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DateTimePickerr from '../components/DateTimePickerr'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

const AddWallet = (props) => {

    const { navigate, goBack } = props.navigation


    return <View style={{
        flex: 1,
    }}>
        <UIHeader
            title={'Thêm Giao Dịch'}
            leftIconName={'arrow-left'}
            rightIconName={undefined}
            onPressLeftIcon={() => {
                goBack()
            }}
            onPressRightIcon={() => {
                alert('phải')
            }}
        />
        <View style={{
            marginTop: 20,
            backgroundColor: 'white',
            flex: 0.5,
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
                    flex: 0.23,
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            alert('VND')
                        }}
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
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 0.23,
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            alert('Nhóm')
                        }}
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
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 0.18,
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            alert('Ghi chú')
                        }}
                        style={{
                            height: 44,
                            width: 44,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 30,
                        }}>
                        <Icon name={'sticky-note'} size={22}></Icon>
                    </TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center',
                    flex: 0.18,
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            alert('Lịch')
                        }}
                        style={{
                            height: 44,
                            width: 44,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 30,
                        }}>
                        <Icon name={'calendar-alt'} size={22}></Icon>
                    </TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center',
                    flex: 0.18,
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            alert('Tiền mặt')
                        }}
                        style={{
                            height: 44,
                            width: 44,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 30,
                        }}>
                        <Image source={images.wallet}
                            style={{
                                width: 26,
                                height: 26,
                            }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex: 0.8,
                flexDirection: 'column',
            }}>
                <View style={{
                    borderBottomWidth: 1,
                    borderColor: '#E6E6E6',
                    flex: 0.23,
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: fontSizes.h5,
                    }}>Số tiền</Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 30,
                            color: 'black'
                        }}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    borderBottomWidth: 1,
                    borderColor: '#E6E6E6',
                    flex: 0.23,
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text style={{
                            fontSize: 22,
                            color: colors.inactive,
                        }}>Chọn nhóm</Text>
                        <Icon style={{
                            paddingEnd: 15,
                        }}
                            name='chevron-right'
                            size={15} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 0.18,
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
                        <Text style={{
                            fontSize: 16,
                            color: 'black',
                        }}>Ghi chú</Text>
                        <Icon style={{
                            paddingEnd: 15,
                        }}
                            name='chevron-right'
                            size={15} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 0.18,
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
                        {/* <Text style={{
                            fontSize: 16,
                            color: 'black',
                        }}>{moment().format('DD-MM-YYYY')}</Text> */}
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
                    flex: 0.18,
                }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text style={{
                            fontSize: 16,
                            color: 'black',
                        }}>Tiền mặt</Text>
                        <Icon style={{
                            paddingEnd: 15,
                        }}
                            name='chevron-right'
                            size={15} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
}

export default AddWallet