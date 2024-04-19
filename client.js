class Client {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    toString() {
        return this.name;
    }
}

module.exports = Client;