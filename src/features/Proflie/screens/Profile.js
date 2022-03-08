import React from "react"
import { Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'
import { UIHeader } from '../../../components'

const Profile = (props) => {
    return <SafeAreaView style={{
        flex: 1,
    }}>
        <UIHeader
            title={'Quản lý tài khoản'}
        />
        <View style={{
            marginTop: 2,
            flex: 0.35,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image style={{
                width: 100,
                height: 100,
                borderRadius: 80,
                marginBottom: 20,
                alignSelf: 'center',
            }}
                source={images.userImage} />
            <Text style={{
                fontSize: 18,
                color: 'black'
            }}> huy</Text>
            <Text style={{
                fontSize: fontSizes.h5,
                color: colors.text
            }}> huy@gmail.com</Text>
        </View>
        <TouchableOpacity style={{
            marginTop: 40,
            flex: 0.08,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: fontSizes.h5,
                color: colors.primary
            }}>Thay đổi mật khẩu</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{
            marginTop: 40,
            flex: 0.08,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: fontSizes.h5,
                color: colors.primary, 
                fontWeight: 'bold'
            }}>Đăng xuất</Text>
        </TouchableOpacity>
    </SafeAreaView>
}

export default Profile