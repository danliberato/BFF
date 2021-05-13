const { createProxyMiddleware }  = require('http-proxy-middleware');
const path = require('../environment');

const bffService = require('./service/bff');

exports.init = (app) => {

    const accountsServiceProxy = createProxyMiddleware({ target: path.services.ACCOUNTS_SERVICE, changeOrigin: true });
    const productsServiceProxy = createProxyMiddleware({ target: path.services.PRODUCTS_SERVICE, changeOrigin: true });
    const vendorsServiceProxy = createProxyMiddleware({ target: path.services.VENDORS_SERVICE, changeOrigin: true });
    const invoicesServiceProxy = createProxyMiddleware({ target: path.services.INVOICES_SERVICE, changeOrigin: true });

    app.get('/accounts', (req, res, next) => {
        console.log("'/accounts' (proxy) endpoint called.");
       accountsServiceProxy(req, res, next);
    });

    app.get('/products', (req, res, next) => {
        console.log("'/products' (proxy) endpoint called.");
        productsServiceProxy(req, res, next);
    });
    
    app.get('/vendors', (req, res, next) => {
        console.log("'/vendors' (proxy) endpoint called.");
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