const utils = require ('../utils');

exports.products = (data) => {
    let response = [];

    data.forEach(product => {
        response.push({
            id: product.id,
            descricao: product.description,
            preco: utils.priceToBRL(product.price)
        });
    });
    
    return response;
}