"use strict";

/* Constant variables */

var taxRate = 0.15;

var phone = {
    "price": 199.99,
    "extras": {
        " + memory upgrade": 30,
        " + camera upgrade": 45,
        " + battery upgrade": 60
    }
};

/* Helper functions */

function calculateTax(cost, taxRate) {
    return cost + (cost * taxRate);
}

function formatPrice(price) {
    return "$" + price.toFixed(2);
}

function printReceipt(items, total) {
    var toPrint = ["You have purchased: "].concat(items);
    toPrint.push("Total: " + formatPrice(total), "Thank you! Enjoy your purchase!");

    toPrint.forEach(function (item) {
        console.log(item);
    });
}

function completeTransaction(customer) {
    var total = calculateTax(customer.runningTotal, taxRate);

    if (customer.canAfford(total)) {
        customer.completeTransaction(total);
        printReceipt(customer.shoppingCart, total);

    } else {
        console.log("Sorry! Your purchase total exceeds your account balance.");
    }
}

function goShopping(customer) {

    function addExtra(item) {
        if (customer.underThreshold()) {
            customer.updateCart(item, phone.extras[item]);
        }
    }

    while (customer.underThreshold()) {
        customer.updateCart("phone", phone.price);
        Object.keys(phone.extras).forEach(addExtra);
    }

    completeTransaction(customer);
}

/* Customer object constructor */

function Customer() {

    var accountBalance = Number(prompt("Enter account balance: ")) || 0;
    var spendingThreshold = Number(prompt("Enter spending threshold: ")) || 0;

    this.shoppingCart = [];
    this.runningTotal = 0;

    this.canAfford = function (cost) {
        return cost <= accountBalance;
    };

    this.underThreshold = function () {
        return this.runningTotal <= spendingThreshold;
    };

    this.completeTransaction = function (cost) {
        accountBalance -= cost;
    };

    this.updateCart = function (item, price) {
        this.shoppingCart.push(item);
        this.runningTotal += price;
    };
}

/* Run program */

var customer = new Customer();
goShopping(customer);
