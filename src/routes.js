const httpProxy = require('express-http-proxy');
const path = require('../environment');

const bffService = require('./service/bff');

exports.init = (app) => {
    
    const accountsServiceProxy = httpProxy(path.services.ACCOUNTS);
    const productsServiceProxy = httpProxy(path.services.PRODUCTS);
    const vendorsServiceProxy = httpProxy(path.services.VENDORS);

    app.get('/accounts', (req, res, next) => {
        console.log("'/accounts' (bypass) endpoint called.");
       accountsServiceProxy(req, res, next);
    });

    app.get('/products', (req, res, next) => {
        console.log("'/products' (bypass) endpoint called.");
        productsServiceProxy(req, res, next);
    });
    
    app.get('/vendors', (req, res, next) => {
        console.log("'/vendors' (bypass) endpoint called.");
        vendorsServiceProxy(req, res, next);
    });

    app.get('/pt/products', (req, res, next) => {
        console.log("'/pt/products' endpoint called.");
        bffService.getProducts(req, res, next);
    });

    app.get('/pt/accounts', (req, res, next) => {
        console.log("'/pt/accounts' endpoint called.");
        bffService.getAccounts(req, res, next);
    });

    app.get('/bff/orchestrator', (req, res, next) => {
        console.log("'/bff/orchestrator' endpoint called.");
        bffService.getAccountsAndVendors(req, res, next);
    });
}