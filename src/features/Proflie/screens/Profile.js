import React, { useState } from "react"
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button, TextInput } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'
import { UIHeader } from '../../../components'
import {
    auth,
    signOut,
    GoogleSignin
} from '../../../firebase/firebase'
import Modal from "react-native-modal"
import {
    isValidEmail,
    isValidPassword,
    subEmailName
} from '../../../utilies/Validations'
import ModalProfile from "../components/ModalProfile"

const Profile = (props) => {

    const { navigate, goBack } = props.navigation
    const [isModalVisible, setModalVisible] = useState(false)
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return <View style={{
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
            }}>{subEmailName()}</Text>
            <Text style={{
                fontSize: fontSizes.h5,
                color: colors.text
            }}>{auth.currentUser.email}</Text>
        </View>

        <TouchableOpacity
            onPress={toggleModal}
            style={{
                display: auth.currentUser.photoURL ? 'none' : 'flex',
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
        <ModalProfile isModalVisible={isModalVisible} toggleModal={toggleModal} />
        <TouchableOpacity
            onPress={async () => {
                try {
                    await GoogleSignin.signOut()
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
                } catch (error) {
                    console.log(error)
                }
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
    </View>
}

export default Profile