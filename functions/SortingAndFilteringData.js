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

export const adaptFilterKey = (key) => {
    return key[0].toLowerCase() + key.slice(1).replace(/ /g, '')
}

