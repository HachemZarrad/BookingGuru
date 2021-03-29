class User {
    constructor(id, firstname, lastname, admin, email, phoneNumber, Country,
            Address, City, CreditCardNumber, dateOfBirth, gender) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.admin = admin;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.Country = Country;
        this.Address = Address;
        this.City = City;
        this.CreditCardNumber = CreditCardNumber;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
    }
}


export default User;