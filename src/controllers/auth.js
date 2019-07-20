const { User, validate } = require('./../models/user');

register = async (req, res, next) => {
    try {
        const { error } = validate(req.body);
        if (error) res.status(400).send(error.details[0].message);
        let user = await User.findOne({ email: req.body.email });
        if (user) res.status(400).send('This email already registered!');

        user = new User({
            name: req.body.name,
            password: req.body.password,
            bio: req.body.bio,
            email: req.body.email,
            img: `https://api.adorable.io/avatars/285/${req.body.email}.png`
        });
        user = await user.save();
        const token = user.generateAuthToken();
        res.header('authorization', token).send({ user: { 
            name: user.name,
            _id: user._id,
            img: user.img
        }});
    }
    catch (e) {
        next(e);
    }

}

login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user || !user.validPassword(password))
            res.status(400).send('Invalid email or password');
        const token = user.generateAuthToken();
        res.header('authorization', token).send({ user: { 
            name: user.name,
            _id: user._id,
            img: user.img
        }});
    }
    catch (e) {
        next();
    }

}

module.exports = {
    register,
    login
}