class Person {
    constructor(street, city, postalCode) {
        this.address = {
            street: street,
            city: city,
            postalCode: postalCode
        };
    }

    get street() {
        return this.address.street;
    }

    set street(newStreet) {
        this.address.street = newStreet;
    }

    get city() {
        return this.address.city;
    }

    set city(newCity) {
        this.address.city = newCity;
    }

    get postalCode() {
        return this.address.postalCode;
    }

    set postalCode(newPostalCode) {
        this.address.postalCode = newPostalCode;
    }

    get fullAddress() {
        return `${this.address.street}, ${this.address.city}, ${this.address.postalCode}`;
    }

    set fullAddress(newAddress) {
        const addressParts = newAddress.split(',');
        if (addressParts.length === 3) {
            this.address.street = addressParts[0];
            this.address.city = addressParts[1];
            this.address.postalCode = addressParts[2];
        } else {
            console.log('Address must contain street, city, and postal code');
        }
    }
}

const person = new Person('Soborna str', 'Lviv', '55555');

console.log(person.street);
console.log(person.city);
console.log(person.postalCode);
console.log(person.fullAddress);

console.log('--------------------');

person.fullAddress = 'Soborna str, Kyiv, 6666';
person.fullAddress = 'Soborna str, Lviv';  // error

console.log(person.fullAddress);
