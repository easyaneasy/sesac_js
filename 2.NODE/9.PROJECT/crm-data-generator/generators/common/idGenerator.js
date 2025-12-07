const { v4: uuidv4 } = require('uuid');

class IdGenerator {
    generate() {
        return uuidv4();
    }
}

module.exports = IdGenerator;