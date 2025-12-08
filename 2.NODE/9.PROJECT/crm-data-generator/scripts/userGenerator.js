const IdGenerator = require('../generators/common/IdGenerator');
const UserNameGenerator = require('../generators/user/UserNameGenerator');
const GenderGenerator = require('../generators/user/GenderGenerator');
const AgeGenerator = require('../generators//user/AgeGenerator');
const BirthdateGenerator = require('../generators/user/BirthdateGenerator');
const AddressGenerator = require('../generators/common/AddressGenerator');

class UserGenerator {
    constructor() {
        this.idGen = new IdGenerator();
        this.nameGen = new UserNameGenerator();
        this.genderGen = new GenderGenerator();
        this.ageGen = new AgeGenerator();
        this.birthGen = new BirthdateGenerator();
        this.addressGen = new AddressGenerator();
    }

    generate(count) {
        const csvRows = ['Id,Name,Gender,Age,Birthdate,Address'];
        for (let i = 0; i < count; i++) {
            csvRows.push([
                this.idGen.generate(),
                this.nameGen.generate(),
                this.genderGen.generate(),
                this.ageGen.generate(),
                this.birthGen.generate(),
                this.addressGen.generate()
            ].join(','));
        }
        return csvRows;
    }
}

module.exports = UserGenerator;