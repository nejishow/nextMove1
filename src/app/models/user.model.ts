export class User {
    constructor(
        public idUser: number,
        public firstName: string,
        public name: string,
        public email: string,
        public password: string,
        public address: string,
        public number: number,
        public created_time,
        public role: number,
        public enabled: string

    ) { }
}
