class Train {
    constructor(id, type, name, image, description, latitude,
         longitude, accuracy, atcocode, distance){
            this.id = id;
            this.type = type;
            this.name = name; 
            this.image = image;
            this.description = description;
            this.latitude = latitude;
            this.longitude = longitude;
            this.accuracy = accuracy;
            this.atcocode = atcocode;
            this.distance = distance;
        }
    }

export default Train;