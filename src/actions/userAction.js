import asyncStorage from '@react-native-async-storage/async-storage'

export const login = (data) => {
    return async (dispatch) => {
        try{
            await asyncStorage.setItem('username', data.username)
            dispatch({type: 'LOGIN', payload: data})
        }
        catch(err){
            console.log(err)
        }
    }
}

export const keepLogin = () => {
    return async (dispatch) => {
        try{
            const data = await asyncStorage.getItem('username')
            dispatch({type: 'KEEPLOGIN', payload: data})
        }
        catch(err) {
            console.log(err)
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try{
            console.log('logout')
            await asyncStorage.clear()
            dispatch({type: 'LOGOUT'})
        }
        catch(err) {
            console.log(err)
        }
    }
}