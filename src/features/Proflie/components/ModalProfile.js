import React, { useState } from "react"
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button, TextInput } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'
import {
    auth,
    signOut,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider
} from '../../../firebase/firebase'
import Modal from "react-native-modal"
import {
    isValidEmail,
    isValidPassword,
    subEmailName
} from '../../../utilies/Validations'
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
        style={{
            margin: 0,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        isVisible={isModalVisible}>
        <View style={{
            backgroundColor: 'white',
            width: '80%',
            borderRadius: 10,
            paddingVertical: 30,
            paddingHorizontal: 20,
            elevation: 20
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: fontSizes.h3,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 20
            }}>
                Đổi mật khẩu(không khả dụng với tài khoản Google)
            </Text>

            <TextInput
                value={currentPassword}
                onChangeText={(text) => {
                    setErrorPassword(isValidPassword(text) == true ? '' : 'Mật khẩu phải trên 6 kí tự')
                    setCurrentPassword(text)
                }}
                style={{
                    backgroundColor: colors.btnLR,
                    height: 40,
                    borderWidth: 0,
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 15
                }}
                placeholder='Nhập mật khẩu cũ'
                // keyboardType='password'
                secureTextEntry={isSecureEntry}
            />
            <TextInput
                value={passwordNew}
                onChangeText={(text) => {
                    setErrorPassword(isValidPassword(text) == true ? '' : 'Mật khẩu phải trên 6 kí tự')
                    setPasswordNew(text)
                }}
                style={{
                    backgroundColor: colors.btnLR,
                    height: 40,
                    borderWidth: 0,
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 10
                }}
                placeholder='Nhập mật khẩu mới'
                // keyboardType='password'
                secureTextEntry={isSecureEntry}
            />
            <TouchableOpacity
                onPress={() => {
                    setIsSecureEntry(!isSecureEntry)
                }}
                style={{
                    marginLeft: 5,
                    flexDirection: 'row', 
                    marginBottom: 15
                }}>
                <Icon
                    name={isSecureEntry ? 'eye' : 'eye-slash'}
                    size={18}
                />
                <Text style={{ marginLeft: 10 }}>Hiển thị mật khẩu</Text>
            </TouchableOpacity>
            {passwordNew.length > 0 || currentPassword.length > 0 ? (errorPassword ?
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                    marginBottom: 10,
                    textAlign: 'center'
                }}>{errorPassword}</Text>
                : <View></View>) : <View></View>
            }
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20
            }}>
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
                    <Text style={{
                        fontSize: fontSizes.h3,
                        fontWeight: 'bold',
                        color: 'white'
                    }}>Lưu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.facebook,
                        width: 100,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                    }}
                    onPress={toggleModal}
                ><Text style={{
                    fontSize: fontSizes.h3,
                    fontWeight: 'bold',
                    color: 'white'
                }}>Hủy</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
}

export default ModalProfile