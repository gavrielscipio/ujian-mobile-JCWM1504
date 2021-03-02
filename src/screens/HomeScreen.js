import React from 'react'
import Axios from 'axios'
import { View, Text, FlatList } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

import {useDispatch, useSelector} from 'react-redux'

import {getData} from '../actions'


const HomeScreen = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getData())
    }, [])

    const {daftar} = useSelector((state) => {
        return {
            daftar: state.dataReducer.daftarCovid
        }
    })

    console.log(daftar) // GLOBALNYA GAKDAPET KAKKK
    const data = daftar.Global

    return (
        <View>
            <Text> HomeScreen </Text>
            {/* <FlatList
                data={data}
                renderItem={({})}
            /> */}

            <Card>
                <Card.Title> Total </Card.Title>
                <Card.Divider />
                <View>
                    {/* <Text> {data.TotalConfirmed}</Text> */}
                    {/* <Text> {data.NewConfirmed}</Text> */}
                </View>
            </Card>
            <Card>
                <Card.Title> Recovered </Card.Title>
                <Card.Divider />
                <View>
                    {/* <Text> {data.TotalRecovered}</Text> */}
                    {/* <Text> {data.NewRecovered}</Text> */}
                </View>
            </Card>
            <Card>
                <Card.Title> Deaths </Card.Title>
                <Card.Divider />
                <View>
                    {/* <Text> {data.TotalDeaths}</Text> */}
                    {/* <Text> {data.NewDeaths}</Text> */}
                </View>
            </Card>
        </View>
    )
}

export default HomeScreen