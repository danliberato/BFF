const axios = require('axios');
const accountsAdapter = require('../adapter/accounts');
const productsAdapter = require('../adapter/products');
const vendorsAdapter = require('../adapter/vendors');
const path = require('../../environment');

exports.getProducts = (req, res, next) => {
    const productsService = axios.get(path.services.PRODUCTS);

    Promise.all([productsService]).then(
       ([products]) => res.json({
            products: productsAdapter.products(products.data)
        })
    );
}

exports.getAccounts = (req, res, next) => {
    const accountsService =  axios.get(path.services.ACCOUNTS);

    Promise.all([accountsService]).then(
       ([accounts]) => res.json({
            accounts: accountsAdapter.accounts(accounts.data)
        })
    );
}

exports.getVendors = (req, res, next) => {
    const vendorsService =  axios.get(path.services.VENDORS);

    Promise.all([vendorsService]).then(
       ([vendors]) => res.json({
            vendors: vendorsAdapter.vendors(vendors.data)
        })
    );
}

exports.getAccountsAndVendors = (req, res, next) => {
    const accountsService =  axios.get(path.services.ACCOUNTS);
    const vendorsService =  axios.get(path.services.VENDORS);

    //TODO: implement some business rule using the account.vendorId and the vendor._id
    //      to show a handled response

    Promise.all([vendorsService, accountsService]).then(
       ([vendors, accounts]) => res.json({
            vendors: vendorsAdapter.vendors(vendors.data),
            accounts: accountsAdapter.accounts(accounts.data),
        })
    );
}