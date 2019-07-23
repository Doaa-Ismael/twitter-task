var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers['authorization'];
            if (token) {
            const decodedToken = jwt.verify(token, 'twitter-app');
            req.decoded = decodedToken;
            return next();
        }
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    } catch(ex) {
        res
        .status(401)
        .json({ success: false, message: 'Failed to authenticate token.' });
    }
};