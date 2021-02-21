const home = require("../pages/home");

Feature('Order');

Scenario('Order successfully', ({ I, homePage, searchPage, restaurantPage, orderPage, successPage}) => {
    I.amOnPage('');
    homePage.fillAddress('Dłusko 12, 78-630 Dłusko');
    searchPage.clickRestaurant();
    restaurantPage.addPopularMeal();
    restaurantPage.openComment();
    restaurantPage.addComment('no sugar');
    restaurantPage.addMealToCart('Meal One', 'accept');
    restaurantPage.addMealToCart('Meal Two', 'accept');
    restaurantPage.goToCheckout();
    orderPage.fillNameField('Take away name', 'take@away.com', '123456789');
    orderPage.selectPaymentOrder('paypal');
    
    restaurantPage.openDetailsPayment();
    restaurantPage.selectPaymentRestaurant('cash');
    restaurantPage.acceptPayment();
    restaurantPage.submitOrder();

    I.seeInCurrentUrl('/foodtracker?trackingid=');
    I.seeElement(successPage.mapElement)
    I.see('TEST Restaurant Selenium')
    I.seeElement(successPage.tipStep)
    I.seeElement(successPage.overview)
    I.seeElement(successPage.purchaseid)
});

Scenario('Not reaching the minimun value', ({ I, homePage, searchPage, restaurantPage, orderPage, successPage}) => {
    I.amOnPage('');
    homePage.fillAddress('Dłusko 12, 78-630 Dłusko');
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart('Delivery Only');
    I.seeElement("div[data-qa='cart-mov-message-not-reached']")
});

Scenario('Increase the amount in the basket', ({ I, homePage, searchPage, restaurantPage, orderPage, successPage}) => {
    I.amOnPage('');
    homePage.fillAddress('Dłusko 12, 78-630 Dłusko');
    searchPage.clickRestaurant();
    restaurantPage.addMealToCart('Delivery Only');
    restaurantPage.increaseAmount();
});