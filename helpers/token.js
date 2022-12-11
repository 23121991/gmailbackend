const jwt = require("jsonwebtoken");

const tokenGenerator = (email) => {
    const token = jwt.sign(
        { email },
        process.env.JWT_KEY)

    return token;


}

const tokenValidator = async (token) => {
    try {
        const data = await jwt.verify(token, process.env.JWT_KEY);
        return data;
    } catch (err) {
        return false;
    }

}


module.exports.tokenGenerator = tokenGenerator;
module.exports.tokenValidator = tokenValidator;