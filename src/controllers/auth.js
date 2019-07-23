const { User, validate } = require('./../models/user');


/**
 * Route to register user
 * @route POST /auth/registerUser
 */
register = async (req, res, next) => {
    try {
        // validate User and Ensure Email is not exist
        const { error } = validate(req.body);
        if (error) return res.status(400).json({msg: error.details[0].message});
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).json({ msg: 'This email already registered!'});
        // Add new user to database
        user = new User({
            name: req.body.name,
            password: req.body.password,
            bio: req.body.bio,
            email: req.body.email,
            img: `https://api.adorable.io/avatars/285/${req.body.email}.png` // autogenerate img for profile picture
        });
        user = await user.save();
        const token = user.generateAuthToken();
        res.json({ 
            token,
            user: { 
            name: user.name,
            _id: user._id,
            img: user.img
        }});
    }
    catch (e) {
        next(e);
    }

}

/**
 * Route to login user
 * @Route POST auth/loginUser
 */
login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({msg: 'Invalid email or password'});
        if(!user.validPassword(password))
            return res.status(400).json({msg: 'Invalid email or password'});
        const token = user.generateAuthToken();
        res.json({ 
            token,
            user: { 
                name: user.name,
                _id: user._id,
                img: user.img
        }});
    }
    catch (e) {
        res.status(500).json({msg: 'Invalid email or password'});
        next();
    }

}

module.exports = {
    register,
    login
}