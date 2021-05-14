exports.BASE_URL = process.env.MICROSERVICES_BASE_URL || 'http://localhost:8882';

exports.services = {
    VENDORS_SERVICE: process.env.VENDOR_SERVICE_URL || `${this.BASE_URL}/vendors`,
    PRODUCTS_SERVICE: process.env.PRODUCT_SERVICE_URL || `${this.BASE_URL}/products`,
    ACCOUNTS_SERVICE: process.env.ACCOUNT_SERVICE_URL || `${this.BASE_URL}/accounts`,
    INVOICES_SERVICE: process.env.INVOICE_SERVICE_URL || `${this.BASE_URL}/invoices`,
    COMPANY_METADATA_SERVICE: process.env.COMPANY_METADATA_SERVICE_URL || `${this.BASE_URL}/company-metadata`,
}