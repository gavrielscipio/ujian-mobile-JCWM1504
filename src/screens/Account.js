import React from 'react'
import { View, Text } from 'react-native'
import {Button} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'

import {logout} from '../actions'

const Account = ({navigation}) => {
    const dispatch = useDispatch()

    const { name } = useSelector((state) => {
        return {
            name: state.userReducer.username
        }
    })

    React.useEffect(() => {
        // redirect ke loginscreen kalau tidak ada id
        if(!name) {
            navigation.navigate('Login')
        }
    })

    const handleLogout = () => {
        console.log('aklskl')
        dispatch(logout()) 
    }

    return (
        <View>
            <Text> Logout </Text>
            <Button
                title='Logout'
                onPress={handleLogout}
            />
        </View>
    )
}

export default Account