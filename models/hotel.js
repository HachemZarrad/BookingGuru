 export class Hotel {
    constructor(id, name, thumbnailUrl, starRating, address,
         guestReviews, price, features){
            this.id = id;
            this.name = name; 
            this.thumbnailUrl = thumbnailUrl;
            this.starRating = starRating;
            this.address = address;
            this.guestReviews = guestReviews;
            this.price = price;
            this.features = features;
        }
    }
  
export class Address {
    constructor(streetAddress, extendedAddress, locality, postalCode, region,
         countryName,  countryCode) {
            this.streetAddress = streetAddress;
            this.extendedAddress = extendedAddress;
            this.locality = locality;
            this.postalCode = postalCode;
            this.region = region;
            this.countryName = countryName;
            this.countryCode = countryCode;
    }
}

export class Feature {
    constructor(freeCancellation, paymentPreference, noCCRequired) {
        this.freeCancellation = freeCancellation;
        this.paymentPreference = paymentPreference;
        this.noCCRequired = noCCRequired;  
    }
}

