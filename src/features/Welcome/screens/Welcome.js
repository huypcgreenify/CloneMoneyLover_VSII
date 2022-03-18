import React, { useState, useRef, useEffect } from "react"
import { Text, View, Image, TouchableOpacity, FlatList, Animated, useWindowDimensions } from "react-native"
import { images, icons, colors, fontSizes } from '../../../constants'
import { UIButton } from '../../../components'
import slide from '../components/slide'
import ItemWelcome from '../components/ItemWelcome'
import Paginator from '../components/Paginator'
import {
    auth,
    onAuthStateChanged,
    firebaseDatabase,
    doc,
    setDoc,
    collection
} from '../../../firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Welcome = (props) => {

    //navigation
    const { navigation, route } = props
    //function of navigation to/back
    const { navigate, goBack } = navigation

    //sldie
    const { width } = useWindowDimensions()
    const [currentIndex, setCurrentIdex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIdex(viewableItems[0].index)
    }).current
    const slideRef = useRef(null)
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    //BTN
    const [registerAndLogin, setRegisterAndLogin] = useState([
        {
            title: 'Đăng ký miễn phí',
            isSelected: true,
            alertShow: 'Alo1',
            navigated: 'Register'
        },
        {
            title: 'Đăng nhập',
            isSelected: false,
            alertShow: 'Alo2',
            navigated: 'Login'
        },
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (responseUser) => {
            if (responseUser) {
                let user = {
                    userId: responseUser.uid,
                    email: responseUser.email,
                }
                // lưu user ddến lưu trữ local: yarn add @react-native-async-storage/async-storage
                AsyncStorage.setItem('users', JSON.stringify(user))
                navigate('UITabView')
            }
        })
    },[])

    return <View style={{
        flex: 1,
        backgroundColor: 'white',
    }}>
        <View style={{
            marginTop: 10,
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: 10,
        }}>
            <Image source={images.logoApp}
                style={{
                    width: 130,
                    height: 40
                }} />
            <TouchableOpacity style={{
                marginTop: 6.5,
                marginEnd: 10
            }}
                onPress={() => {
                    alert('Comming soon')
                }}>
                <Text style={{
                    backgroundColor: 'rgba(233, 233, 233, 0.5)',
                    padding: 5,
                    paddingHorizontal: 10,
                    fontSize: fontSizes.h5,
                    borderRadius: 6,
                    fontWeight: 'bold',
                    color: colors.primary
                }}>Tiếng Việt</Text>
            </TouchableOpacity>
        </View >
        <View style={{
            flex: 0.7,
            marginTop: 120,
            alignItems: 'center',
        }}>
            <FlatList
                data={slide}
                renderItem={({ item, index }) => <ItemWelcome item={item} index={index} />}
                horizontal
                showsHorizontalScrollIndicator={false}//tắt thanh trượt dưới
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                    }
                )}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slideRef}
            />
            <Paginator
                data={slide}
                scrollX={scrollX} />
        </View>
        {/**---------------------------------*/}
        <View style={{
            flex: 0.3,
            padding: 10,
            marginTop: 5
        }}>
            {registerAndLogin.map(eachRegisterAndLogin =>
                <UIButton onPress={() => {
                    setRegisterAndLogin(registerAndLogin.map(eachRegisterAndLoginX2 => {
                        navigate(eachRegisterAndLogin.navigated)
                        return {
                            ...eachRegisterAndLoginX2,
                            isSelected: eachRegisterAndLoginX2.title == eachRegisterAndLogin.title
                        }
                    }))
                }}
                    key={eachRegisterAndLogin.title}
                    title={eachRegisterAndLogin.title}
                    isSelected={eachRegisterAndLogin.isSelected}>
                </UIButton>
            )}
            <Text style={{
                marginTop: 5,
                alignSelf: 'center',
                color: '#CFCFCF',
                fontSize: 10
            }}>Clone by HuyPham</Text>
        </View>
    </View >
}

export default Welcome