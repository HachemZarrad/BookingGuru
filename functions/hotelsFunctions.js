import {
    adaptFilterKey, sortCategoricalDataAscendingly,
    sortNumericalDataAscendingly, sortNumericalDataDescendingly
} from './sortingAndFilteringData'
import { HOTELS_SORTING_PROPERTIES, HOTELS_FILTERS } from '../constants/usefulLists'



export const filterHotelsData = (hotels, pickedFilters = HOTELS_FILTERS) => {
    const starsFilter = handleStarsFilter(hotels, pickedFilters)
    const priceFilter = handlePriceFilter(starsFilter, pickedFilters)
    const featuresFilter = handleFeaturesFilter(priceFilter, pickedFilters)
    return featuresFilter
}

const handleStarsFilter = (data, pickedFilters) => {
    let starFilteredData = [...data]
    Object.keys(pickedFilters.StarRating.data).forEach(starsNumber => {
        if (pickedFilters.StarRating.data[starsNumber])
            starFilteredData = data.filter(hotel =>
                hotel.starRating == starsNumber || hotel.starRating == starsNumber + '.5')
    })
    return starFilteredData
}

const handlePriceFilter = (data, pickedFilters) => {
    let priceFilteredData = [...data]
    Object.keys(pickedFilters.Price.data).forEach(price => {
        if (pickedFilters.Price.data[price]) {
            const priceRange = price.split('_')
            const minPrice = priceRange[0].replace('$', '')
            const maxPrice = priceRange[1].replace('$', '')
            priceFilteredData = data.filter(hotel =>
                hotel.price >= minPrice && hotel.price <= maxPrice)
        }
    })
    return priceFilteredData
}

const handleFeaturesFilter = (data, pickedFilters) => {
    let pickedFeatures = 0
    let featuresFilteredData = [...data]
    const features = new Object()
    for (const [key, value] of Object.entries(pickedFilters.Features.data)) {
        features[adaptFilterKey(key)] = value
        if (value) pickedFeatures++
    }
    if (pickedFeatures !== 0) featuresFilteredData = data.filter(hotel =>
        hotel.features.paymentPreference === features.paymentPreference &&
        hotel.features.noCCRequired === features.noCCRequired &&
        hotel.features.freeCancellation === features.freeCancellation)
    return featuresFilteredData
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