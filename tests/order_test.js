Feature('Order');

Scenario('Order successfully', ({ I, homePage, searchPage, restaurantPage, orderPage  }) => {
    I.amOnPage('');
    homePage.fillAddress('Dłusko 12, 78-630 Dłusko');
    searchPage.clickRestaurant();
    restaurantPage.addPopularItem();
    restaurantPage.goToCheckout();
    orderPage.fillNameField('Take away name', 'take@away.com', '123456789');
    orderPage.selectPayment();
    
    restaurantPage.openDetailsPayment();
    restaurantPage.selectPayment();
    restaurantPage.acceptPayment();
    restaurantPage.submitOrder();

    I.seeInCurrentUrl('/foodtracker?trackingid=');
    I.seeElementInDOM('.css-drhbsp-Map')

});
