import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import NormalButton from '../components/normalButton'
import Title from '../components/title'
import Filters from '../components/filters'


const CustomizeFiltersScreen = ({ route }) => {

    const dataFilters = route?.params?.filtersList
    // const clear = route?.params?.clear
    const applyUserFilters = route?.params?.applyUserFilters
    const pickedFilters = JSON.parse(JSON.stringify(dataFilters))  
    const navigation = useNavigation()

    const pickFilter = (property, filter) => {
        if (!pickedFilters[property].multipleSelection) {
            Object.keys(pickedFilters[property].data).forEach(key => {
                if (key !== filter) pickedFilters[property].data[key] = false
            })
        }
        pickedFilters[property].data[filter] = !pickedFilters[property].data[filter]
    }

    const dispatchPickedFilters = () => {
        applyUserFilters(pickedFilters)
        navigation.navigate('Hotels',
        {
            screen: 'HotelsOverview',
        })
    }


    return (
        <View style={styles.screen}>
            <ScrollView >
                <View style={styles.list}>
                    {Object.keys(dataFilters).map((property) => {
                        return (
                            <View key={property}>
                                <Title title={property} />
                                <Filters
                                    property={property}
                                    dataFilters={dataFilters}
                                    pickFilter={pickFilter}
                                />
                            </View>
                        )
                    })
                    }
                </View>
            </ScrollView>
            <NormalButton
                title='Confirm'
                onPress={dispatchPickedFilters}
                style={styles.button}
            />
        </View>
    );
}

export default CustomizeFiltersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    list: {
        padding: 10,
    },
    button: {
        alignSelf: 'center',
        marginVertical: 20
    }
})
