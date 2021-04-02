import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Icon from '../components/icon'
import SortingList from '../components/sortingList'

import Colors from '../constants/colors'
import IconLibrary from '../constants/iconLibrary'




const PlayWithData = props => {

    const { sortingList } = props
    const [showList, setShowList] = useState(false)
    const navigation = useNavigation()
    const [sortingProperty, setSortingProperty] = useState(null)

    const goToCustomizeFiltersScreen = () => {
        navigation.navigate('CustomizeFilters')
    }

    const showSortingList = () => {
        setShowList(!showList)
    }

    const saveSortingListStateAfterRerender = (property) => {
        setSortingProperty(property)
    }

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                    {...props}
                    style={styles.button}
                    onPress={showSortingList}
                >
                    <Icon
                        library={IconLibrary.FontAwesome5}
                        name="sort-numeric-down"
                        size={24}
                        color='black'
                    />
                    <Text style={styles.textButton}>Sort Your List</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    {...props}
                    style={styles.button}
                    onPress={goToCustomizeFiltersScreen}
                >
                    <Icon
                        library={IconLibrary.Entypo}
                        name="funnel"
                        size={24}
                        color='black'
                    />
                    <Text style={styles.textButton}>Customize Filter</Text>
                </TouchableOpacity>
            </View>

            {!showList ? null : (
                <SortingList
                    list={sortingList}
                    visibility={showSortingList}
                    setInitial={saveSortingListStateAfterRerender}
                    initial={sortingProperty}
                />
            )
            }
        </View>
    )
}

export default PlayWithData

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    button: {
        flexDirection: 'row',
        width: '50%',
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
})
