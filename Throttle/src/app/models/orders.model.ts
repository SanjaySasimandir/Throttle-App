export class OrdersModel {
    constructor(
        public _id: String,
        public carid: String,
        public deliverydate: String,
        public deliverymode: String,
        public customerid: String,
        public orderdate: String,
        public ordertime: String,
        public status: String
    ) { }
}