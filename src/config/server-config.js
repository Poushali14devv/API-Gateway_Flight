// const dotenv = require('dotenv');

// dotenv.config();

// module.exports = {
//     PORT: process.env.PORT
// }
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    SALT_ROUNDS: process.env.SALT_ROUNDS
}