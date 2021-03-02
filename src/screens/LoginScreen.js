import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import {login} from '../actions'


const LoginScreen = ({navigation}) => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {name, pass} = useSelector((state) => {
        return {
            name : state.userReducer.username,
            pass : state.userReducer.password
        }
    })

    const dispatch = useDispatch()

    const handleLogin = () => {
        const input = {username, password}

        dispatch(login(input))
        setUsername('')
        setPassword('')
    }

    React.useEffect(() => {
        if (name) return navigation.navigate('Drawer', {screen : 'TabsScreen'})
    }, [name])

    return (
        <View>
            <Text> LoginScreen </Text>
            <TextInput 
                placeholder='username'
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={setUsername}
                value={username}
            />
            <TextInput 
                placeholder='password'
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={setPassword}
                value={password}
            />

            <Button
                onPress={handleLogin}
                title="Login"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default LoginScreen