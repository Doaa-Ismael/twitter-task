const { Tweet, validate } = require('../models/tweet');
const PAGE_LIMIT = 2;

addTweet = async ({decoded, body}, res, next) => {

    try {
        const { error } = validate(body);
        if(error) return res.status(400).send(error.details[0].message);
        let tweet = new Tweet({
            user: {
                ref: decoded._id, 
                name: decoded.name,
                img: decoded.img, 
            }, 
            title: body.title, 
            content: body.content
        });
        await tweet.save();
        res.json({tweet});
    }
    catch (e) {
        console.log(e);
    }
    

}


getTweets = async ({decoded, query}, res, next) => {
    try {
        let tweets = await Tweet.find().skip(query.page*PAGE_LIMIT || 0).limit(PAGE_LIMIT);
        res.json({tweets});
    }
    catch (e) {
        next();
        console.log(e);
    }
    

}


module.exports = {
    addTweet,
    getTweets
}