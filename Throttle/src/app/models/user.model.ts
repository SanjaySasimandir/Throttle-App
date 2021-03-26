export class UserModel {
    constructor(
        public _id: String,
        public firstName: String,
        public lastName: String,
        public email: String,
        public password: Number,
        public phone: Number,
        public address: Array<10>,
        public role: String
    ) { }
}