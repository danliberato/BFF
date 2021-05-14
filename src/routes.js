const {createProxyMiddleware} = require('http-proxy-middleware');
const path = require('../environment');

const bffService = require('./service/bff');

exports.init = (app) => {

    const accountsServiceProxy = createProxyMiddleware({target: path.services.ACCOUNTS_SERVICE, changeOrigin: false});
    const productsServiceProxy = createProxyMiddleware({target: path.services.PRODUCTS_SERVICE, changeOrigin: false});
    const vendorsServiceProxy = createProxyMiddleware({target: path.services.VENDORS_SERVICE, changeOrigin: false});
    const invoicesServiceProxy = createProxyMiddleware({target: path.services.INVOICES_SERVICE, changeOrigin: false});
    const companyMetadataServiceProxy = createProxyMiddleware({target: path.services.COMPANY_METADATA_SERVICE, changeOrigin: false});

    app.all('/accounts', (req, res, next) => {
        console.log("[%s] endpoint called. (via proxy)", req.url);
        accountsServiceProxy(req, res, next);
    });

    app.all('/products', (req, res, next) => {
        console.log("[%s] endpoint called. (via proxy)", req.url);
        productsServiceProxy(req, res, next);
    });

    app.all('/vendors', (req, res, next) => {
        console.log("[%s] endpoint called. (via proxy)", req.url);
        vendorsServiceProxy(req, res, next);
    });

    app.all('/invoices', (req, res, next) => {
        console.log("[%s] endpoint called. (via proxy)", req.url);
        invoicesServiceProxy(req, res, next);
    });

    app.all('/company-metadata', (req, res, next) => {
        console.log("[%s] endpoint called. (via proxy)", req.url);
        companyMetadataServiceProxy(req, res, next);
    });

    app.get('/pt/products', (req, res, next) => {
        console.log("[%s] endpoint called. (via bff)", req.url);
        bffService.getProducts(req, res, next);
    });

    app.get('/pt/accounts', (req, res, next) => {
        console.log("[%s] endpoint called. (via bff)", req.url);
        bffService.getAccounts(req, res, next);
    });

    app.get('/account/vendor', (req, res, next) => {
        console.log("[%s] endpoint called. (via bff)", req.url);
        bffService.getAccountAndVendor(req, res, next);
    });
}