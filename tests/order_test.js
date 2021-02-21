const constant = require("../helpers/constant");
//const Order = require("../pages/order");
Feature('Order');

Scenario('Order successfully', ({ I, homePage, orderPage, searchPage, restaurantPage, successPage}) => {
    I.amOnPage('');
    homePage.fillAddress(constant.variables.ADDRESS);
    searchPage.clickRestaurant();
    restaurantPage.addPopularMeal();
    restaurantPage.openComment();
    restaurantPage.addComment('no sugar');
    restaurantPage.addMealToCart(constant.variables.FIRST_MEAL, 'accept');
    restaurantPage.addMealToCart(constant.variables.SECOND_MEAL, 'accept');
    restaurantPage.goToCheckout();
    orderPage.fillNameField(constant.variables.USER);
    orderPage.selectPaymentOrder(constant.variables.PAYMENT_PAYPAL);
    orderPage.cancelPaypalPayment();
        
    restaurantPage.openDetailsPayment();
    restaurantPage.selectPaymentRestaurant(constant.variables.PAYMENT_CASH);
    restaurantPage.acceptPayment();
    restaurantPage.submitOrder();

    I.seeInCurrentUrl('/foodtracker?trackingid=');
    I.seeElement(successPage.mapElement)
    I.see('TEST Restaurant Selenium')
    successPage.checkElementTipVisible()
    //I.seeElement(successPage.tipStep)
    I.seeElement(successPage.overview)
    I.seeElement(successPage.purchaseid)
});

Scenario.skip('Not reaching the minimun value', ({ I, homePage, searchPage, restaurantPage, }) => {
    I.amOnPage('');
    homePage.fillAddress(constant.variables.ADDRESS);
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart(constant.variables.NOT_REACHABLE_MEAL);
    I.seeElement("div[data-qa='cart-mov-message-not-reached']")
});

Scenario('Increase the amount in the basket', ({ I, homePage, searchPage, restaurantPage, orderPage, successPage}) => {
    I.amOnPage('');
    homePage.fillAddress('Dłusko 12, 78-630 Dłusko');
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart(constant.variables.NOT_REACHABLE_MEAL);
    I.seeElement("div[data-qa='cart-mov-message-not-reached']")
    restaurantPage.increaseAmount();
    I.dontSee("div[data-qa='cart-mov-message-not-reached']")
});

Scenario.skip('Order Required fields', ({ I, homePage, searchPage, restaurantPage, orderPage, successPage}) => {
    I.amOnPage('');
    homePage.fillAddress('Dłusko 12, 78-630 Dłusko');
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart('Meal One', 'accept');
    restaurantPage.addMealToCart('Meal Two', 'accept');
    restaurantPage.goToCheckout();
    orderPage.submitOrder();

    I.seeElement("div[data-qa='cart-mov-message-not-reached']")
});

Scenario.skip('Required address', ({ I, homePage, searchPage, restaurantPage, orderPage, successPage}) => {
    I.amOnPage('');
    I.seeElement("#ideliveryareaerror:none");

    homePage.clickSearch();

    I.seeElement("#ideliveryareaerror *([style*='display: block']");
});