import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TabsScreen from './TabsScreen'
import Account from '../screens/Account'

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator()

    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Feed' component={TabsScreen}/>
            <Drawer.Screen name='Account' component={Account}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation