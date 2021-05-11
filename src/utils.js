exports.priceToBRL = (price) => {
    price= parseFloat(price).toFixed(2).split('.');
    price[0] = "R$ " + price[0].split(/(?=(?:...)*$)/).join('.');
    return price.join(',').replace('.', '');
}

exports.nameComposer = (firstName, lastName) => {
    return firstName + " " +lastName;
}