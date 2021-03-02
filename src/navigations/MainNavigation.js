import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector, useDispatch } from 'react-redux'

// import navigation
import DrawerNavigation from './DrawerNavigation'

// import screens
import LoginScreen from '../screens/LoginScreen'

import { keepLogin } from '../actions'


const MainNavigation = () => {
    const Stack = createStackNavigator()

    const {name, pass} = useSelector((state) => {
        return {
            name : state.userReducer.username,
            pass : state.userReducer.password
        }
    })

    const dispatch = useDispatch()

    React.useEffect(() => {
        console.log('use effect trigered')
        dispatch(keepLogin())
    },[])


    return (
        /* headerMode false ini membuat header hilang */ 
        <Stack.Navigator>
            {name
            ?
            <Stack.Screen name="Drawer" component={DrawerNavigation} options={{headerShown: false}}/>
            :
            <>
            <Stack.Screen name="Login" component={LoginScreen} />
            </>
            }
        </Stack.Navigator>
    )
}

export default MainNavigation
        
        
        