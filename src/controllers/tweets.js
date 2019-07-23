const { Tweet, validate } = require('../models/tweet');
const Comment = require('./../models/comment');
const mongoose = require('mongoose');
const PAGE_LIMIT = 2;


/**
 * tweet :)
 * @route POST tweets/
 * @returns {tweet}
 */
addTweet = async ({ decoded, body }, res, next) => {
    const { error } = validate(body);
    if (error) return res.status(400).send(error.details[0].message);
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
    res.json({ tweet });
}

/**
 * @route GET /tweets
 * @param optional page in search query for pagination
 */

getTweets = async ({ decoded, query }, res, next) => {
    let findQuery = {};
    if(query.commentsNumber) { findQuery.commentsNumber =  { $eq: query.commentsNumber } };
    let x = Tweet.find(findQuery)
    query.lastCreated == 'true' ? x.sort({createdAt: -1}): null;
    let tweets = await x.exec(); //.skip(query.page * PAGE_LIMIT || 0).limit(PAGE_LIMIT);
    res.json({ tweets });

}



getTweetWithComments = async ( req, res, next ) => {
    const  tweetId = req.params.id;
    if(!tweetId || !mongoose.Types.ObjectId.isValid(tweetId))
        return res.json( { msg: 'Invalid tweet Id Provided'});

    // get tweet
    let tweet = await Tweet.findById(tweetId);

    // get Comments
    let comments = await Comment.find({ tweet: tweetId}).populate('user', 'name img').populate(' subComments.user', 'name img');

    res.json({ tweet, comments });
}


module.exports = {
    addTweet,
    getTweets,
    getTweetWithComments
}