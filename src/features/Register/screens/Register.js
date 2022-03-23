import React, { useState } from "react"
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    useWindowDimensions,
    TextInput,
    BackHandler
} from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValidEmail, isValidPassword } from '../../../utilies/Validations'
import {
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabase,
    doc,
    setDoc,
    collection,
    GoogleSignin,
    GoogleAuthProvider,
    signInWithCredential,
    addDoc, 
    getDocs,
    
} from '../../../firebase/firebase'

const Register = (props) => {

    const { width } = useWindowDimensions()
    //Email&Pass - Validate...
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const isValidtionOk = () => email.length > 0
        && password.length > 0
        && isValidEmail(email) == true
        && isValidPassword(password) == true
    const [focusEmail, setFocusEmail] = useState(false)
    const [focusPassword, setFocusPassword] = useState(false)
    //function of navigation to/back
    const { navigate, goBack } = props.navigation

    const signInWithGoogleAsync = async () => {
        try {
            const { idToken } = await GoogleSignin.signIn();
            // console.log('id: ' + idToken)
            const googleCredential = GoogleAuthProvider.credential(idToken)
            // console.log('id: ' + googleCredential)
            const user_sign_in = signInWithCredential(auth, googleCredential)
            // console.log(user_sign_in)
            user_sign_in.then(async (users) => {
                let newUserRef = doc(firebaseDatabase, 'users', auth.currentUser.email)
                await addDoc(newUserRef, { email })
                navigate('UITabView')
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return <View style={{
        backgroundColor: 'white',
        flex: 1,
    }}>
        <ScrollView>
            <TouchableOpacity style={{
                padding: 15
            }}
                onPress={() => {
                    goBack();
                }}
            ><Icon name={'arrow-left'} size={18} color={'black'} />
            </TouchableOpacity>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: fontSizes.h1,
                    color: 'black'
                }}>Đăng ký</Text>
                <TouchableOpacity
                    onPress={signInWithGoogleAsync}
                    style={{
                        flexDirection: 'row',
                        borderWidth: 1,
                        padding: 5,
                        borderColor: 'red',
                        width: '80%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        borderRadius: 5,
                        marginTop: 20,
                        height: 40
                    }}>
                    <Icon style={{
                        paddingStart: 2
                    }}
                        name={'google'}
                        size={20}
                        color={colors.google} />
                    <Text style={{
                        color: 'red',
                        fontSize: fontSizes.h5,
                        marginLeft: '10%'
                    }}>Kết nối với Google</Text>
                </TouchableOpacity>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h6,
                    width: '70%',
                    textAlign: 'center',
                    marginTop: 12
                }}>Chúng tôi sẽ không đăng thông tin mà không có sự cho phép của bạn</Text>
                <View style={{
                    height: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15
                }}>
                    <View style={{
                        backgroundColor: colors.inactive,
                        height: 1,
                        flex: 1
                    }}></View>
                    <Text style={{
                        color: colors.inactive,
                        alignItems: 'center',
                        padding: 8,
                        fontSize: fontSizes.h5
                    }}>HOẶC</Text>
                    <View style={{
                        backgroundColor: colors.inactive,
                        height: 1,
                        flex: 1
                    }}></View>
                </View>
                <View style={{
                    width: '85%',
                    marginTop: 14
                }}>
                    <TextInput
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
                        placeholder='Email'
                        placeholderTextColor={focusEmail ? colors.primary : colors.text}
                        keyboardType='email-address'
                    />

                    <TextInput
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
                    <Text style={{ color: 'red', fontSize: fontSizes.h6, marginBottom: 10 }}>{errorEmail}</Text>
                    : <View></View>) : <View></View>
                }
                {password.length > 0 ? (errorPassword ? <Text style={{ color: 'red', fontSize: fontSizes.h6, marginBottom: 10 }}>{errorPassword}</Text>
                    : <View></View>) : <View></View>
                }
                <View style={{
                    marginTop: 15,
                    width: '78%',
                }}>
                    <TouchableOpacity
                        disabled={!isValidtionOk() == true}
                        onPress={async () => {
                            let flag = true
                            const querySnapshot = await getDocs(collection(firebaseDatabase, "users"))
                            querySnapshot.forEach((doc) => {
                                if (doc.id == email) {
                                    flag = false
                                }
                                // doc.id == email ? flag = true : ''
                            })
                            flag ? navigate('AddWalletTransaction', { email: email, password: password }) : alert('Tài khoản đã có!')
                        }}
                        style={{
                            backgroundColor: isValidtionOk() == true ? colors.primary : colors.inactive,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            height: 35,
                        }}>
                        <Text style={{
                            padding: 8,
                            fontSize: fontSizes.h5,
                            color: 'white'
                        }}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigate('Login')
                        }}
                        style={{
                            marginTop: 5,
                            padding: 5
                        }}>
                        <Text style={{
                            padding: 8,
                            fontSize: fontSizes.h5,
                            color: colors.primary,
                            alignSelf: 'center'
                        }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    </View >
}

export default Register