// Write your solution in this file!
var customerName = 'bob'
var bestCustomer
const leastFavoriteCustomer = 'fred'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'george';
    return leastFavoriteCustomer;
}