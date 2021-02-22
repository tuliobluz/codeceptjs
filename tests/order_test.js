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
    orderPage.submitOrder();
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

Scenario('Increase the amount in the basket', ({homePage, searchPage, restaurantPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress('Dłusko 12, 78-630 Dłusko');
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart(constant.variables.NOT_REACHABLE_MEAL);
    restaurantPage.checkNotReachingMessage();
    restaurantPage.increaseAmount();
    restaurantPage.checkNotVisibleNotReachingMessage();
});

Scenario.skip('Order Required fields', ({ I, homePage, searchPage, restaurantPage, orderPage, successPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress('Dłusko 12, 78-630 Dłusko');
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart(constant.variables.NOT_REACHABLE_MEAL, 'accept');
    restaurantPage.addMealToCart(constant.variables.NOT_REACHABLE_MEAL, 'accept');
    restaurantPage.goToCheckout();
    orderPage.submitOrder();

    I.seeElement("div[data-qa='cart-mov-message-not-reached']")
});

Scenario.skip('Required address', ({ I, homePage}) => {
    homePage.goToHomePage();
    I.seeElement("#ideliveryareaerror:none");

    homePage.clickSearch();

    I.seeElement("#ideliveryareaerror *([style*='display: block']");
});
