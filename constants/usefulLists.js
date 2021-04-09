//Used For Booking
export const RESIDENCECHOICE = ['All Inclusive', 'Half Board']
export const BEDCHOICE = ['1 Bed', '2 Beds']

//Used For user's profile info
export const GENDER = ['Male', 'Female']
export const TITLE = ['Mr.', 'Ms.']

//Filters to guarantee better User Experience
export const HOTELS_FILTERS1 = ['starRating', 'price', 'freeCancellation', 'paymentPreference', 'noCCRequired']
export const FLIGHTS_FILTERS = ['destination', 'Airport']
export const TRAINS_FILTERS = ['type', 'name', 'description', 'distance']
export const BUSES_FILTERS = ['mode', 'line', 'direction', 'date', 'departure_time', 'operator_name']
export const TAXIS_FILTERS = ['Large People Carrier', 'Executive People Carrier', 'Luxury', 'Standar', 'People Carrier', 'Executive']
export const FOOD_FILTERS = []


export const HOTELS_FILTERS = {
    "StarRating": {
        "data": [1, 2, 3, 4, 5],
        "multipleSelection": false
    },
    "Price": {
        "data": ['10$_40$', '40$_60$', '60$_80$', '80$_100$'],
        "multipleSelection": false
    },
    "Features": {
        "data": ['Free Cancellation', 'Payment Preference', 'No CC Required'],
        "multipleSelection": true
    }
}


//Properties According to Which User Can Sort Displayed Data
export const HOTELS_SORTING_PROPERTIES = ['Popularity', 'Rating (high to low)', 'Rating (low to high)', 'Guest Reviews', 'Price(low to high)', 'Price(high to low)']


