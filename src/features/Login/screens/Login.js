import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValidEmail, isValidPassword } from '../../../utilies/Validations'
import { auth, signInWithEmailAndPassword, GoogleSignin, GoogleAuthProvider, signInWithCredential } from '../../../firebase/firebase'

const Login = (props) => {

    const { navigate, goBack } = props.navigation
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidtionOk = () => email.length > 0
        && password.length > 0
        && isValidEmail(email) == true
        && isValidPassword(password) == true
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [focusEmail, setFocusEmail] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)

    const signInWithGoogleAsync = async () => {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = GoogleAuthProvider.credential(idToken)
        const user_sign_in = signInWithCredential(auth, googleCredential)
        user_sign_in.then((users) => {
            navigate('UITabView')
            console.log(users)
        }).catch((error) => {
            console.log(error)
        })
    }

    return <View style={styles.container}>
        <ScrollView>
            <TouchableOpacity
                onPress={() => {
                    goBack()
                }}
                style={{ padding: 15 }}><Icon name={'arrow-left'} size={18} color={'black'} />
            </TouchableOpacity>
            <View style={styles.view_1}>
                <Text style={styles.txtSign}>Đăng nhập</Text>
                <TouchableOpacity
                    onPress={() => {
                        signInWithGoogleAsync()
                    }}
                    style={styles.touchableOpacitySignGG}>
                    <Icon style={{ paddingStart: 2 }} name={'google'} size={20} color={colors.google} />
                    <Text style={styles.txtSignGG}>Kết nối với Google</Text>
                </TouchableOpacity>
                <Text style={styles.txtSecurity}>Chúng tôi sẽ không đăng thông tin mà không có sự cho phép của bạn</Text>
                <View style={styles.view_1_1}>
                    <View style={styles.view_1_1_1}></View>
                    <Text style={styles.txtOr}>HOẶC</Text>
                    <View style={styles.view_1_1_2}></View>
                </View>
                <View style={styles.view_1_2}>
                    <TextInput
                        value={email}
                        onChangeText={(text) => {
                            setErrorEmail(isValidEmail(text) == true ? '' : 'Email không đúng định dạng')
                            setEmail(text)
                        }}
                        onFocus={() => {
                            setFocusEmail(true)
                        }}
                        onBlur={() => {
                            setFocusEmail(false)
                        }}
                        style={{
                            color: 'black',
                            height: 40,
                            margin: 12,
                            borderWidth: 0,
                            padding: 10,
                            borderBottomWidth: 2,
                            borderColor: focusEmail ? colors.primary : colors.text
                        }}
                        placeholderTextColor={focusEmail ? colors.primary : colors.text}
                        placeholder='Email'
                        keyboardType='email-address'
                    />

                    <TextInput
                        value={password}
                        onChangeText={(text) => {
                            setErrorPassword(isValidPassword(text) == true ? '' : 'Mật khẩu phải trên 6 kí tự')
                            setPassword(text)
                        }}
                        onFocus={() => {
                            setFocusPassword(true)
                        }}
                        onBlur={() => {
                            setFocusPassword(false)
                        }}
                        style={{
                            color: 'black',
                            height: 40,
                            margin: 12,
                            borderWidth: 0,
                            padding: 10,
                            borderBottomWidth: 2,
                            borderColor: focusPassword ? colors.primary : colors.text
                        }}
                        placeholder='Mật khẩu'
                        placeholderTextColor={focusPassword ? colors.primary : colors.text}
                        secureTextEntry={isSecureEntry}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setIsSecureEntry(!isSecureEntry)
                        }}
                        style={{
                            position: 'absolute',
                            bottom: 23,
                            right: 25
                        }}>
                        <Icon
                            name={isSecureEntry ? 'eye' : 'eye-slash'}
                            size={18}
                            color={colors.text}
                        />
                    </TouchableOpacity>
                </View>
                {email.length > 0 ? (errorEmail ?
                    <Text style={styles.txtErrorEmail}>{errorEmail}</Text>
                    : <View></View>) : <View></View>
                }
                {password.length > 0 ? (errorPassword ? <Text style={styles.txtErrorPass}>{errorPassword}</Text>
                    : <View></View>) : <View></View>
                }
                <View style={styles.view_1_3}>
                    <TouchableOpacity
                        disabled={!isValidtionOk() == true}
                        onPress={() => {
                            signInWithEmailAndPassword(auth, email, password)
                                .then((re) => {
                                    console.log(re)
                                    navigate('UITabView')
                                }).catch((error) => {
                                    let errorCode = error.code;
                                    let errorMessage = error.message;
                                    console.log(errorCode)
                                    console.log(errorMessage)
                                    errorCode === 'auth/user-not-found'
                                        ? alert('Tài khoản không tồn tại!')
                                        : (errorCode === 'auth/wrong-password' ? alert('Nhập sai mật khẩu!')
                                            : (errorCode === 'auth/too-many-requests' ? alert('Đăng nhập quá nhiều!')
                                                : alert('Có lỗi xảy ra, vui lòng thử lại!')))
                                })
                        }}
                        style={{
                            backgroundColor: isValidtionOk() == true ? colors.primary : colors.inactive,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            height: 35,
                        }}>
                        <Text style={styles.txtSignSmall}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                    <View style={styles.view_1_3_1}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate('Register')
                            }}
                            style={{ padding: 5 }}>
                            <Text style={styles.txtRegister}>Đăng ký</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                alert('Comming soon!')
                            }}
                            style={{ padding: 5 }}>
                            <Text style={styles.txtForgot}>Quên mật khẩu?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    view_1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtSign: {
        fontSize: fontSizes.h1,
        color: 'black',
    },
    touchableOpacitySignGG: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 5,
        borderColor: 'red',
        width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        height: 40,
    },
    txtSignGG: {
        color: 'red',
        fontSize: fontSizes.h5,
        marginLeft: '10%',
    },
    txtSecurity: {
        color: colors.inactive,
        fontSize: fontSizes.h6,
        width: '70%',
        textAlign: 'center',
        marginTop: 12,
    },
    view_1_1: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    view_1_1_1: {
        backgroundColor: colors.inactive,
        height: 1,
        flex: 1,
    },
    txtOr: {
        color: colors.inactive,
        alignItems: 'center',
        padding: 8,
        fontSize: fontSizes.h5,
    },
    view_1_1_2: {
        backgroundColor: colors.inactive,
        height: 1,
        flex: 1,
    },
    view_1_2: {
        width: '85%',
        marginTop: 14,
    },
    txtErrorEmail: {
        color: 'red',
        fontSize: fontSizes.h6,
        marginBottom: 10,
    },
    txtErrorPass: {
        color: 'red',
        fontSize: fontSizes.h6,
        marginBottom: 10,
    },
    view_1_3: {
        marginTop: 15,
        width: '78%',
    },
    txtSignSmall: {
        padding: 8,
        fontSize: fontSizes.h5,
        color: 'white',
    },
    view_1_3_1: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtRegister: {
        paddingVertical: 10,
        fontSize: fontSizes.h5,
        color: colors.primary,
    },
    txtForgot: {
        paddingVertical: 10,
        fontSize: fontSizes.h5,
        color: colors.primary,
    },
})

export default Login