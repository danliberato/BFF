const utils = require ('../utils');

exports.accounts = (data) => {
    let response = [];

    data.forEach(account => {
        response.push({
            id: account._id,
            pais : account.country,
            email: account.owner.email,
            nome: utils.nameComposer(account.owner.firstName, account.owner.lastName)
        });
    });
    
    return response;
}