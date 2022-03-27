import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'
import { auth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from '../../../firebase/firebase'
import Modal from "react-native-modal"
import { isValidPassword, } from '../../../utilies/Validations'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ModalProfile = (props) => {

    const {
        isModalVisible,
        toggleModal,
    } = props
    const [errorPassword, setErrorPassword] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [passwordNew, setPasswordNew] = useState('')
    const isValidtionOk = () => passwordNew.length > 0
        && isValidPassword(passwordNew) == true
    const user = auth.currentUser
    const emailCred = EmailAuthProvider.credential(
        user.email, currentPassword);
    const [isSecureEntry, setIsSecureEntry] = useState(true)

    return <Modal
        style={styles.container}
        isVisible={isModalVisible}>
        <View style={styles.view_1}>
            <Text style={styles.txtForgot}>
                Đổi mật khẩu(không khả dụng với tài khoản Google)
            </Text>
            <TextInput
                value={currentPassword}
                onChangeText={(text) => {
                    setErrorPassword(isValidPassword(text) == true ? '' : 'Mật khẩu phải trên 6 kí tự')
                    setCurrentPassword(text)
                }}
                style={styles.txtInputCurrentPass}
                placeholder='Nhập mật khẩu cũ'
                placeholderTextColor={colors.text}
                secureTextEntry={isSecureEntry}
            />
            <TextInput
                value={passwordNew}
                onChangeText={(text) => {
                    setErrorPassword(isValidPassword(text) == true ? '' : 'Mật khẩu phải trên 6 kí tự')
                    setPasswordNew(text)
                }}
                style={styles.txtInputPasswordNew}
                placeholderTextColor={colors.text}
                placeholder='Nhập mật khẩu mới'
                secureTextEntry={isSecureEntry}
            />
            <TouchableOpacity
                onPress={() => {
                    setIsSecureEntry(!isSecureEntry)
                }}
                style={styles.touchableOpacityHidePass}>
                <Icon
                    name={isSecureEntry ? 'eye' : 'eye-slash'}
                    size={18}
                    color={colors.text}
                />
                <Text style={styles.txtHidePass}>Hiển thị mật khẩu</Text>
            </TouchableOpacity>
            {passwordNew.length > 0 || currentPassword.length > 0 ? (errorPassword ?
                <Text style={styles.txtErrorPass}>{errorPassword}</Text>
                : <View></View>) : <View></View>
            }
            <View style={styles.view_1_1}>
                <TouchableOpacity
                    disabled={!isValidtionOk() == true}
                    style={{
                        backgroundColor: isValidtionOk() == true ? colors.facebook : colors.inactive,
                        width: 100,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                    }}
                    onPress={() => {
                        reauthenticateWithCredential(user, emailCred).then(() => {
                            updatePassword(user, passwordNew).then(() => {
                                alert('Thay đổi mật khẩu thành công')
                                toggleModal()
                            }).catch((error) => {
                                console.log(error)
                            });
                        }).catch((error) => {
                            console.log(error)
                            alert('Sai mật khẩu cũ hoặc đã đăng nhập tài khoản Google!')
                        })
                    }}>
                    <Text style={styles.txtSave}>Lưu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchableOpacityToggleModal}
                    onPress={toggleModal}
                ><Text style={styles.txtCancel}>Hủy</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_1: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
        elevation: 20,
    },
    txtForgot: {
        textAlign: 'center',
        fontSize: fontSizes.h3,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    txtInputCurrentPass: {
        color: 'black',
        backgroundColor: colors.btnLR,
        height: 40,
        borderWidth: 0,
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
    },
    txtInputPasswordNew: {
        color: 'black',
        backgroundColor: colors.btnLR,
        height: 40,
        borderWidth: 0,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    touchableOpacityHidePass: {
        marginLeft: 5,
        flexDirection: 'row',
        marginBottom: 15,
    },
    txtErrorPass: {
        color: 'red',
        fontSize: fontSizes.h6,
        marginBottom: 10,
        textAlign: 'center',
    },
    view_1_1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    txtHidePass: {
        marginLeft: 10,
        color: colors.text,
    },
    txtSave: {
        fontSize: fontSizes.h3,
        fontWeight: 'bold',
        color: 'white',
    },
    touchableOpacityToggleModal: {
        backgroundColor: colors.facebook,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    txtCancel: {
        fontSize: fontSizes.h3,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default ModalProfile