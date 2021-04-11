//Used For Booking
export const RESIDENCECHOICE = ['All Inclusive', 'Half Board']
export const BEDCHOICE = ['1 Bed', '2 Beds']

//Used For user's profile info
export const GENDER = ['Male', 'Female']
export const TITLE = ['Mr.', 'Ms.']

//Filters to guarantee better User Experience
export const FLIGHTS_FILTERS = ['destination', 'Airport']
export const TRAINS_FILTERS = ['type', 'name', 'description', 'distance']
export const BUSES_FILTERS = ['mode', 'line', 'direction', 'date', 'departure_time', 'operator_name']
export const TAXIS_FILTERS = ['Large People Carrier', 'Executive People Carrier', 'Luxury', 'Standar', 'People Carrier', 'Executive']
export const FOOD_FILTERS = []

export const HOTELS_FILTERING_PROPERTIES = ["starRating", "price", "features"]
export const HOTELS_FILTERS = {
    "StarRating": {
        "data": {
            '1': false,
            '2': false,
            '3': false,
            '4': false,
            '5': false
        },
        "multipleSelection": false
    },
    "Price": {
        "data": {
            '1000$_4000$': false,
            '4000$_6000$': false,
            '6000$_8000$': false,
            '8000$_10000$': false
        },
        "multipleSelection": false
    },
    "Features": {
        "data": {
            'Free Cancellation': false,
            'Payment Preference': false,
            'No CC Required': false,
        },
        "multipleSelection": true
    }
}


//Properties According to Which User Can Sort Displayed Data
export const HOTELS_SORTING_PROPERTIES = ['Popularity', 'Rating (high to low)', 'Rating (low to high)', 'Guest Reviews', 'Price(low to high)', 'Price(high to low)']


