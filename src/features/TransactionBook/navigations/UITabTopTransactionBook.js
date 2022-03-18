import React from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ThisMonth from '../components/ThisMonth'
import NextMonth from '../components/NextMonth'
import PreviousMonths from '../components/PreviousMonths'

const Tab = createMaterialTopTabNavigator();

const UITabTopTransactionBook = (props) => {

    return <Tab.Navigator
        initialRouteName='ThisMonth'
        tabBarOptions={{
            options: {
                tabBarLabelStyle: { fontSize: 12 },
                tabBarItemStyle: { width: 100 },
                tabBarActiveTintColor: 'white',
                tabBarStyle: { backgroundColor: 'powderblue' },
            }
        }
        }>
        <Tab.Screen
            options={{
                tabBarLabel: 'Các tháng trước',
            }}
            component={PreviousMonths}
            name={'PreviousMonths'}
        />
        <Tab.Screen
            options={{
                tabBarLabel: 'Tháng này'
            }}
            component={ThisMonth}
            name={'ThisMonth'}
        />
        <Tab.Screen
            options={{
                tabBarLabel: 'Tương lai'
            }}
            component={NextMonth}
            name={'NextMonth'}
        />
    </Tab.Navigator>
}

export default UITabTopTransactionBook