import React, { useEffect } from "react"
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    useWindowDimensions,
    Alert,
    BackHandler
} from 'react-native'
import { images, icons, colors, fontSizes } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import UITabTopTransactionBook from '../navigations/UITabTopTransactionBook'

const TransactionBook = (props) => {

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

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', backAction)
    }, [])

    return <View style={{
        flex: 1,
    }}>
        <View style={{
            height: 50,
            backgroundColor: 'white',
            flexDirection: 'row'
        }}>
            <TouchableOpacity
                onPress={() => {
                    alert('ok')
                }}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginStart: 20,
                    marginTop: 9
                }}>
                <Image source={images.wallet}
                    style={{
                        width: 28,
                        height: 28
                    }} />
                <Icon name={'caret-down'}
                    size={14}
                    style={{
                        marginLeft: 7
                    }}
                    color={colors.text} />
            </TouchableOpacity>
            <View style={{
                marginTop: 9,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: colors.text,
                    textAlign: 'center',
                    fontSize: fontSizes.h6
                }}>Tiền mặt</Text>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black'
                }}>2.000.000.000 ₫</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    alert('ok')
                }}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 9
                }}>
                <Icon name={'bell'}
                    color={'black'}
                    size={23}
                    style={{
                        marginLeft: 7,
                    }} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    alert('OKK')
                }}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginStart: 20,
                    marginTop: 9,
                    marginEnd: 10
                }}>
                <Icon name={'ellipsis-v'}
                    color={'black'}
                    size={23}
                    style={{
                        marginLeft: 7,
                    }} />
            </TouchableOpacity>
        </View>
        <UITabTopTransactionBook />
    </View >
}

export default TransactionBook