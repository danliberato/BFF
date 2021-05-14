const utils = require ('../utils');

exports.accounts = (data) => {
    let response = [];

    data.forEach(account => {
        response.push({
            id: account._id,
            country : account.country,
            email: account.owner.email,
            name: utils.nameComposer(account.owner.firstName, account.owner.lastName)
        });
    });
    
    return response;
}