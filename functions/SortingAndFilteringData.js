export const sortCategoricalDataAscendingly = (data, property) => {
    data.sort((item1, item2) => {
        if (item1 > item2) return 1
        if (item1 < item2) return -1
        return 0
    })
}

export const sortCategoricalDataDescendingly = (data, property) => {
    data.sort((item1, item2) => {
        if (item1 > item2) return 1
        if (item1 < item2) return -1
        return 0
    })
}

export const sortNumericalDataAscendingly = (data, property) => {
    data.sort((currentItem, nextItem) => {
        return currentItem - nextItem
    })
}

export const sortNumericalDataDescendingly = (data, property) => {
    data.sort((currentItem, nextItem) => {
        return nextItem - currentItem
    })
}


export const filterData = (data, filter, property) => {

}