export class ServiceModel {
    constructor(
        public _id: String,
        public carmake: String,
        public carmodel: String,
        public caryear: String,
        public pickupdate: String,
        public pickupmode: String,
        public customerid: String,
        public orderdate: String,
        public ordertime: String,
        public deliverydate: String,
        public deliverymode: String,
        public repairslist: String,
        public cost: Number,
        public status: String
    ) { }
}