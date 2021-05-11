const utils = require ('../utils');

exports.vendors = (data) => {
    let response = [];

    data.forEach(vendor => {
        response.push({
            id: vendor._id,
            name : vendor.name,
            hasWellsFargoPayments: vendor.vendorParticipation.hasWellsFargoPayments
        });
    });
    
    return response;
}