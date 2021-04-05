import { createFilter } from 'react-native-search-filter'
import { HOTELS_SORTING_PROPERTIES } from '../constants/usefulLists'


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

export const sortHotelsData = (data, property) => {
    const originalData = data
    switch (property) {
        case (HOTELS_SORTING_PROPERTIES[0]):
            return originalData
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
    }
}