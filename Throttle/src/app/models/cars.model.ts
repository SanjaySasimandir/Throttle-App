export class CarsModel {
    constructor(
        public _id: String,
        public model: String,
        public brand: String,
        public year: String,
        public price: Number,
        public img: String,
        public transmission: String,
        public horsepower: Number,
        public description: String
    ) { }
}