const testData = require('../config/testData.js');

Feature('Order');

Scenario('Order successfully', ({homePage, orderPage, searchPage, restaurantPage, successPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress(testData.variables.ADDRESS);

    searchPage.clickRestaurant();

    restaurantPage.addPopularMeal();
    restaurantPage.openComment();
    restaurantPage.addComment('no sugar');
    restaurantPage.addMealToCart(testData.variables.FIRST_MEAL, 'accept');
    restaurantPage.addMealToCart(testData.variables.SECOND_MEAL, 'accept');
    restaurantPage.goToCheckout();

    orderPage.fillRequiredUserFields(testData.variables.USER);
    orderPage.selectPayment(testData.variables.PAYMENT_PAYPAL);
    orderPage.submitOrderNavigation();
    orderPage.cancelPaypalPayment();
        
    restaurantPage.openDetailsPayment();
    restaurantPage.selectPaymentRestaurant(testData.variables.PAYMENT_CASH);
    restaurantPage.acceptPayment();
    restaurantPage.submitOrderRestaurant();

    successPage.checkUrlTracking();
    successPage.checkElementTipVisible();
    successPage.checkElementMap();
    successPage.checkOverview();
    successPage.checkPurschaseId();
});

Scenario('Order Required fields', ({homePage, searchPage, restaurantPage, orderPage}) => {
    homePage.goToHomePage();
    homePage.fillAddress(testData.variables.ADDRESS);

    searchPage.clickRestaurant();

    restaurantPage.addMealToCart(testData.variables.FIRST_MEAL, 'accept');
    restaurantPage.addMealToCart(testData.variables.SECOND_MEAL, 'accept');
    restaurantPage.goToCheckout();
    orderPage.submitOrder();

    orderPage.checkNameRequiredField();
    orderPage.checkEmailRequiredField();
    orderPage.checkPhoneRequiredField();
});
