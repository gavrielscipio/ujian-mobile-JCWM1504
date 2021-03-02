import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Table, Row, Rows, Col, Cols } from 'react-native-table-component'
import { useSelector, useDispatch } from 'react-redux'
import { ListItem } from 'react-native-elements'

import { getData } from '../actions'

const LiveUpdateScreen = () => {
    const dispatch = useDispatch()

    const { daftar } = useSelector((state) => {
        return {
            daftar: state.dataReducer.daftarCovid
        }
    })

    React.useEffect(() => {
        dispatch(getData())
    }, [])

    const data = daftar.Countries

    return (
        <ScrollView>
            {
                data.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{l.Country}</ListItem.Title>
                            <ListItem.Title>New confirmed :  {l.NewConfirmed}</ListItem.Title>
                            <ListItem.Title>Total Death : {l.TotalDeaths}</ListItem.Title>
                            <ListItem.Title>Total Recovered : {l.TotalRecovered}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </ScrollView>
    )
}

export default LiveUpdateScreen