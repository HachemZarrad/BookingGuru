import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'

const FilteredData = props => {
    const {data} = props
    return (
        <ScrollView>
            {data.map(hotel => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('HotelDetails', hotel)} key={hotel._id}>
                        <View style={styles.filteredList}>
                            <Avatar
                                source={{
                                    uri: hotel.thumbnailUrl,
                                }}
                            >
                                <Accessory />
                            </Avatar>
                            <View style={styles.hotelName}>
                                <Text>{hotel.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

export default FilteredData

const styles = StyleSheet.create({})
