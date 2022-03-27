import React, { useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'
import { UIHeader } from '../../../components'
import { auth, signOut, GoogleSignin } from '../../../firebase/firebase'
import { subEmailName } from '../../../utilies/Validations'
import ModalProfile from "../components/ModalProfile"

const Profile = (props) => {

    const { navigate, goBack } = props.navigation
    const [isModalVisible, setModalVisible] = useState(false)
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return <View style={styles.container}>
        <UIHeader
            title={'Quản lý tài khoản'}
        />
        <View style={styles.view_1}>
            <Image style={styles.imageUser}
                source={images.userImage} />
            <Text style={styles.txtSubEmailName}>{subEmailName()}</Text>
            <Text style={styles.txtCurrentUser}>{auth.currentUser.email}</Text>
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
            <Text style={styles.txtForgot}>Thay đổi mật khẩu</Text>
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
            style={styles.touchableOpacitySignOut}>
            <Text style={styles.txtSignOut}>Đăng xuất</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_1: {
        marginTop: 2,
        flex: 0.35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageUser: {
        width: 100,
        height: 100,
        borderRadius: 80,
        marginBottom: 20,
        alignSelf: 'center',
    },
    txtSubEmailName: {
        fontSize: 18,
        color: 'black',
    },
    txtCurrentUser: {
        fontSize: fontSizes.h5,
        color: colors.text,
    },
    txtForgot: {
        fontSize: fontSizes.h5,
        color: colors.primary,
    },
    touchableOpacitySignOut: {
        marginTop: 40,
        flex: 0.08,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtSignOut: {
        fontSize: fontSizes.h5,
        color: colors.primary,
        fontWeight: 'bold',
    },
})

export default Profile