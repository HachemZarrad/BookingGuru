import { createFilter } from 'react-native-search-filter'
import { HOTELS_SORTING_PROPERTIES, HOTELS_FILTERING_PROPERTIES } from '../constants/usefulLists'

export const sortCategoricalDataAscendingly = (data, property) => {
    return data.sort((currentItem, nextItem) => {
        if (currentItem[property] > nextItem[property]) return 1
        if (currentItem[property] < nextItem[property]) return -1
        return 0
    })
}

export const sortCategoricalDataDescendingly = (data, property) => {
    return data.sort((currentItem, nextItem) => {
        if (currentItem[property] > nextItem[property]) return -1
        if (currentItem[property] < nextItem[property]) return 1
        return 0
    })
}

export const sortNumericalDataAscendingly = (data, property) => {
    return data.sort((currentItem, nextItem) => {
        return currentItem[property] - nextItem[property]
    })
}

export const sortNumericalDataDescendingly = (data, property) => {
    return data.sort((currentItem, nextItem) => {
        return nextItem[property] - currentItem[property]
    })
}


export const filterDataByInput = (data, input, properties) => {
    return data.filter(createFilter(input, properties))
}

export const filterHotelsData = (pickedFilters, data) => {
    let finalData = [...data]
    HOTELS_FILTERING_PROPERTIES.forEach((property) => {
        Object.values(pickedFilters[property].data).forEach(value => {
            if (value) finalData = filterHotelsDataAccordingToProperty(finalData, property, value)
        })
    })
    return finalData
}

export const filterHotelsDataAccordingToProperty = (data, property, propertyValue) => {
    switch (property) {
        case (HOTELS_FILTERING_PROPERTIES[0]):
            return data.filter(createFilter(propertyValue, 'starRating'))
        case (HOTELS_FILTERING_PROPERTIES[1]):
            priceRange = propertyValue.split('_')
            const minPrice = parseInt(priceRange[0].replace('$', ''))
            const maxPrice = parseInt(priceRange[1].replace('$', ''))
            return data.filter(hotel => hotel.price >= minPrice && hotel.price <= maxPrice)
        case (HOTELS_FILTERING_PROPERTIES[2]):
            feature = propertyValue.toLowerCase().replace(/ /g, '')
            return data.filter(hotel => hotel.features[feature])
    }
}

export const sortHotelsData = (data, property) => {
    switch (property) {
        case (HOTELS_SORTING_PROPERTIES[0]):
            return sortCategoricalDataAscendingly(data, 'name')
        case (HOTELS_SORTING_PROPERTIES[1]):
            return sortNumericalDataDescendingly(data, 'starRating')
        case (HOTELS_SORTING_PROPERTIES[2]):
            return sortNumericalDataAscendingly(data, 'starRating')
        case (HOTELS_SORTING_PROPERTIES[3]):
            return sortNumericalDataDescendingly(data, 'guestReviews')
        case (HOTELS_SORTING_PROPERTIES[4]):
            return sortNumericalDataAscendingly(data, 'price')
        case (HOTELS_SORTING_PROPERTIES[5]):
            return sortNumericalDataDescendingly(data, 'price')
        default:
            return data
    }
}