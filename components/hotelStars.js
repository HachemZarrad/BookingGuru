import React from 'react'
import { StyleSheet, View } from 'react-native'

import IconLibrary from '../constants/iconLibrary'
import Icon from './icon'

const HotelStars = props => {

    const STARSVIEWSCHEMA = [1, 2, 3, 4, 5] // ARRAY FOR TRACKING EACH STAR TO DISPLAY RATING PROPERLY

    const starsNumber = props.rating
    const isInteger = starsNumber % 1 === 0 // VARIALBLE TO CHECK WETHER ANY HALF STAR EXISTS

    const starIcon = (starsNumber, starsCounter, isInteger) => {
        if (starsCounter <= starsNumber) return "star"
        if (!isInteger && (starsCounter === parseInt(starsNumber + 1))) return "star-half-empty"
        return "star-o"
    }

    const star = (starsCounter, starType) => {
        return (
            <View key={starsCounter}>
                <Icon library={IconLibrary.FontAwesome}
                    name={starType}
                    size={30}
                    color="gold"
                />
            </View>
        )

    }


    const Rating = () => {
        const stars = STARSVIEWSCHEMA.map(number => {
            const starType = starIcon(starsNumber, number, isInteger)
            return (
                star(number, starType)
            )
        })
        return stars
    }


    return (
        <View style={styles.container}><Rating /></View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10
    }
})

export default HotelStars