import React, { useState, useReducer } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { Checkbox } from 'react-native-paper'

import HotelStars from '../components/hotelStars'

import Colors from '../constants/colors'


const multipleChoiceReducer = (state, action) => {
    return { ...state, [action.type]: !action.payload }
}


const Filters = props => {

    const { property, dataFilters } = props
    
    const [checked, setChecked] = useState(null)

    const multipleChoiceObject = dataFilters[property].data
    const [multipleChoice, dispatchMultipleChoice] = useReducer(multipleChoiceReducer, multipleChoiceObject)

    const manageMultipleSelection = (filter, state) => {
        dispatchMultipleChoice({ type: filter, payload: state })
    }

    const manageSelection = (filter) => {
        setChecked(filter)
    }

    return (
        <View style={styles.checkBoxContainer}>
            {Object.keys(dataFilters[property].data).map((filter) => {
                return (
                    <TouchableOpacity key={filter} style={styles.checkBox}>
                        {property === 'StarRating' ?
                            <HotelStars rating={filter} />
                            :
                            <Text style={styles.text}>{filter}</Text>
                        }
                        {dataFilters[property].multipleSelection ?
                            <Checkbox
                                status={multipleChoice[filter] ? 'checked' : 'unchecked'}
                                color={Colors.button}
                                onPress={() => manageMultipleSelection(filter, multipleChoice[filter])}
                            />
                            :
                            <Checkbox
                                status={checked === filter ? 'checked' : 'unchecked'}
                                color={Colors.button}
                                onPress={() => manageSelection(filter)}
                            />
                        }
                    </TouchableOpacity>
                )
            })
            }
        </View>
    )
}

export default Filters

const styles = StyleSheet.create({
    checkBoxContainer: {
        width: '80%',
        margin: 20,
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 15
    },
})
