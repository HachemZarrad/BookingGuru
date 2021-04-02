import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

import { Avatar, Accessory } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'


const FilteredData = props => {
    const { data, nextScreen } = props
    const navigation = useNavigation()


    return (
        <ScrollView>
            {data.map(entity => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate(nextScreen, entity)} key={entity._id}>
                        <View style={styles.filteredList}>
                            <Avatar
                                source={{
                                    uri: entity?.thumbnailUrl ? entity?.thumbnailUrl : entity?.image,
                                }}
                            >
                                <Accessory />
                            </Avatar>
                            <View style={styles.entityName}>
                                <Text>{entity.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

export default FilteredData

const styles = StyleSheet.create({
    filteredList: {
        flexDirection: 'row',
        margin: 6,
    },
    entityName: {
        marginLeft: 10,
    },

})
