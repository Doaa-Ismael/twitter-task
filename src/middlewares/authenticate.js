var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            const decodedToken = jwt.verify(token, 'twitter-app');
            req.decoded = decodedToken;
            return next();
        }
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    } catch {
        res
        .status(401)
        .json({ success: false, message: 'Failed to authenticate token.' });
    }
};