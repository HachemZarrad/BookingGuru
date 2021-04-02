import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { RadioButton } from 'react-native-paper';


const SortingList = props => {

    const { list, visibility, setInitial, initial } = props
    const [checked, setChecked] = useState(initial ? initial : list[0]);


    const confirmProperty = (property) => {
        setChecked(property)
        setInitial(property)
        setTimeout(() => {
            visibility()
        }, 1000);
    }


    return (
        <View style={styles.list}>
            {list.map((property) => {
                return (
                    <View style={styles.radioButton} key={property}>
                        <Text>{property}</Text>
                        <RadioButton
                            data
                            value={property}
                            status={checked === property ? 'checked' : 'unchecked'}
                            onPress={() => confirmProperty(property)}
                        />
                    </View>
                )
            })
            }
        </View>
    );
}

export default SortingList

const styles = StyleSheet.create({
    list: {
        width: 190,
        height: 220,
    },
    radioButton: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})
