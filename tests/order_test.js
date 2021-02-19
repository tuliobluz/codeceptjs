Feature('Order');

Scenario('Order successfully', ({ I }) => {
    I.amOnPage('');
    I.fillField('#imysearchstring', 'Dłusko 12, 78-630 Dłusko');
    I.click('a[data-name="Dłusko 12, 78-630 Dłusko"]');
    I.click("div[data-qa='restaurant-card-test-restaurant-selenium']");
    I.click("div[data-qa='popular-items-list']");
    I.click("button[data-qa='menu-item-choices-action-submit']");
    /*I.click('Miniburger / Menü');
    I.click("button[data-qa='menu-item-choices-action-submit']");
    I.click('Meal Three');
    I.click("button[data-qa='menu-item-choices-action-submit']");*/
    I.click("button[data-qa='sidebar-action-checkout']");
    I.fillField("#input_4", 'Take away name');
    I.fillField("#input_5", 'take@away.com');
    I.fillField("#input_6", '123456789');
    I.click("div[data-qa='multi-step-checkout-details-payment-element']");
    I.click("div[data-qa='payment-modal-paypal-element-element-element']");
    I.click("button[data-qa='payment-modal-action-submit']")
    I.click("button[data-qa='multi-step-checkout-action-submit-order']");
    I.waitForNavigation()
    I.click("#login .cancelUrl")
    pause();
    I.click("div[data-qa='sidebar-overview-details-payment-element-panel']");
    I.click("div[data-qa='payment-modal-cash-element-element-element']");
    I.click("button[data-qa='payment-modal-action-submit']")

});
