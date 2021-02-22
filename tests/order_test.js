const assert = require('assert');

const constant = require("../helpers/constant");
Feature('Order');

Scenario('Order successfully', ({homePage, orderPage, searchPage, restaurantPage, successPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress(constant.variables.ADDRESS);

    searchPage.clickRestaurant();

    restaurantPage.addPopularMeal();
    restaurantPage.openComment();
    restaurantPage.addComment('no sugar');
    restaurantPage.addMealToCart(constant.variables.FIRST_MEAL, 'accept');
    restaurantPage.addMealToCart(constant.variables.SECOND_MEAL, 'accept');
    restaurantPage.goToCheckout();

    orderPage.fillRequiredUserFields(constant.variables.USER);
    orderPage.selectPayment(constant.variables.PAYMENT_PAYPAL);
    orderPage.submitOrderNavigation();
    orderPage.cancelPaypalPayment();
        
    restaurantPage.openDetailsPayment();
    restaurantPage.selectPaymentRestaurant(constant.variables.PAYMENT_CASH);
    restaurantPage.acceptPayment();
    restaurantPage.submitOrderRestaurant();

    successPage.checkUrlTracking();
    successPage.checkElementTipVisible();
    successPage.checkElementMap();
    successPage.checkOverview();
    successPage.checkPurschaseId();
});

Scenario('Not reaching the minimun value', ({homePage, searchPage, restaurantPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress(constant.variables.ADDRESS);
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart(constant.variables.NOT_REACHABLE_MEAL);
    restaurantPage.checkNotReachingMessage();
});

Scenario('Increase the amount in the basket', async ({homePage, searchPage, restaurantPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress(constant.variables.ADDRESS);
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart(constant.variables.NOT_REACHABLE_MEAL);
    restaurantPage.checkNotReachingMessage();
    restaurantPage.increaseAmount();
    
    const quantity = await restaurantPage.checkQuantity();
    assert.equal(quantity, 2);
    restaurantPage.checkNotVisibleNotReachingMessage();
});

Scenario('Decrease the amount in the basket', ({homePage, searchPage, restaurantPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress(constant.variables.ADDRESS);
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart(constant.variables.NOT_REACHABLE_MEAL);
    restaurantPage.decreaseAmount();
    restaurantPage.checkEmptyCart();
});

Scenario('Order Required fields', ({homePage, searchPage, restaurantPage, orderPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress(constant.variables.ADDRESS);

    searchPage.clickRestaurant();

    restaurantPage.addMealToCart(constant.variables.FIRST_MEAL, 'accept');
    restaurantPage.addMealToCart(constant.variables.SECOND_MEAL, 'accept');
    restaurantPage.goToCheckout();
    orderPage.submitOrder();

    orderPage.checkNameRequiredField();
    orderPage.checkEmailRequiredField();
    orderPage.checkPhoneRequiredField();
});

Scenario('Required address', ({homePage}) => {
    homePage.goToHomePage();
    homePage.checkNotVisibleAddressRequiredMsg();
    homePage.clickSearch();
    homePage.checkAddressRequireMsg();
});
