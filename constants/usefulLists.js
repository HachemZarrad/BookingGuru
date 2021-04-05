//Used For Booking
export const RESIDENCECHOICE = ['All Inclusive', 'Half Board']
export const BEDCHOICE = ['1 Bed', '2 Beds']

//Used For user's profile info
export const GENDER = ['Male', 'Female']
export const TITLE = ['Mr.', 'Ms.']

//Filters to guarantee better User Experience
export const HOTELS_FILTERS = ['starRating', 'price', 'freeCancellation', 'paymentPreference', 'noCCRequired']
export const FLIGHTS_FILTERS = ['destination', 'Airport']
export const TRAINS_FILTERS = ['type', 'name', 'description', 'distance']
export const BUSES_FILTERS = ['mode', 'line', 'direction', 'date', 'departure_time', 'operator_name']
export const TAXIS_FILTERS = ['Large People Carrier', 'Executive People Carrier', 'Luxury', 'Standar', 'People Carrier', 'Executive']
export const FOOD_FILTERS = []


export const HOTELS_FILTERS1 = {
    starRating: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'],
    price: {},
    features:
    {
        freeCancellation: false,
        paymentPreference: false,
        noCCRequired: false
    }
}


//Properties According to Which User Can Sort Displayed Data
export const HOTELS_SORTING_PROPERTIES = ['Popularity', 'Rating (high to low)', 'Rating (low to high)', 'Guest Reviews', 'Price(low to high)', 'Price(high to low)']


