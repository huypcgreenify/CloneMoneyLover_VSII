/**
 yarn add react-navigation
 yarn add react-native-safe-area-context //dùng cho đt có tai thỏ
 yarn add @react-navigation/bottom-tabs
 yarn add @react-navigation/native
 yarn add @react-navigation/native-stack // dùng để di chuyển từ màn hình này sang màn hình kia
 yarn add react-native-screens
 */
import React from 'react';
import { Image } from "react-native"
import { TransactionBook} from '../features'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { images, icons, colors, fontSizes } from '../constants';

const Tab = createBottomTabNavigator()

const screenOptions = ({ route }) => ({
    tabBarStyle: {
        height: 55,
        paddingBottom: 5,
    },
    headerShown: false,
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: colors.inactive,
    tabBarActiveBackgroundColor: 'white',
    tabBarInactiveBackgroundColor: 'white',
    // tabBarIcon: ({ focused, coler, size }) => {// 3 thuộc tính chuẩn của đối tượng( focused là có bấm vào icon không, true à bấm vào)
    //     return <Image
    //         style={{
    //             width: route.name == 'AddWallet' ? 55 : 25,
    //             height: route.name == 'AddWallet' ? 55 : 25,
    //             marginBottom: route.name == 'AddWallet' ? 10 : undefined,
    //             tintColor: route.name == 'AddWallet' ? undefined :
    //                 (focused ? 'black' : colors.inactive)
    //         }}
    //         source={route.name == 'TransactionBook' ? images.walleticon :
    //             (route.name == 'AddWallet' ? images.plus :
    //                 (route.name == 'Profile' ? images.profileicon : ''))
    //         } />
    // },
})

const UITabView = (props) => {

    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
            name={'TransactionBook'}
            component={TransactionBook}
            options={{
                tabBarLabel: 'Sổ giao dịch',
            }}></Tab.Screen>
        {/* <Tab.Screen
            name={'AddWallet'}
            component={AddWallet}
            options={{
                tabBarLabel: '',
                tabBarStyle: { display: "none" },
            }}></Tab.Screen>
        <Tab.Screen
            name={'Profile'}
            component={Profile}
            options={
                { tabBarLabel: 'Tài khoản' }
            }></Tab.Screen> */}
    </Tab.Navigator>


}

export default UITabView