const assert = require('assert');
const testData = require('../config/testData.js');

Feature('Restaurant');

Scenario('Not reaching the minimun value', ({homePage, searchPage, restaurantPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress(testData.variables.ADDRESS);
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart(testData.variables.NOT_REACHABLE_MEAL);
    restaurantPage.checkNotReachingMessage();
});

Scenario('Increase the amount in the basket', async ({homePage, searchPage, restaurantPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress(testData.variables.ADDRESS);
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart(testData.variables.NOT_REACHABLE_MEAL);
    restaurantPage.checkNotReachingMessage();
    restaurantPage.increaseAmount();
    
    const quantity = await restaurantPage.checkQuantity();
    assert.equal(quantity, 2);
    restaurantPage.checkNotVisibleNotReachingMessage();
});

Scenario('Decrease the amount in the basket', ({homePage, searchPage, restaurantPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress(testData.variables.ADDRESS);
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart(testData.variables.NOT_REACHABLE_MEAL);
    restaurantPage.decreaseAmount();
    restaurantPage.checkEmptyCart();
});
