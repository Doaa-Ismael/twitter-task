const { User } = require('./../models/user');

getUsers = async ({query}, res, next) => {
    console.log(query);
    let term  = query.searchTerm;
    const users = await User
        .find({ name: { $regex: new RegExp(term), $options: 'i'  }})
    //    .sort({ score : { $meta : 'textScore' } })
    res.json({users});
}


module.exports = {
    getUsers
}