import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import LiveUpdateScreen from '../screens/LiveUpdateScreen'

const TabsScreen = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='LiveUpdate' component={LiveUpdateScreen}/>
        </Tab.Navigator>
    )
}

export default TabsScreen