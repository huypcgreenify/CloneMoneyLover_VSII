import React, { useState } from "react"
import { Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'
import { UIHeader } from '../../../components'
import {
    auth,
    signOut
} from '../../../firebase/firebase'

const Profile = (props) => {

    const { navigate, goBack } = props.navigation
    //Subtring email
    const indexEmail = (auth.currentUser.email).indexOf('@')
    const subEmail = (auth.currentUser.email).substring(0, indexEmail).toUpperCase()

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
            }}>{subEmail}</Text>
            <Text style={{
                fontSize: fontSizes.h5,
                color: colors.text
            }}>{auth.currentUser.email}</Text>
        </View>
        <TouchableOpacity
            onPress={() => {

            }}
            style={{
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

        <TouchableOpacity
            onPress={() => {
                signOut(auth)
                    .then((re) => {
                        // debugger
                        console.log(re)
                        navigate('Welcome')
                        // debugger
                    }).catch((error) => {
                        console.log(error)
                        alert(`Cannot sign in, error: ${error.message}`)
                    })
            }}
            style={{
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