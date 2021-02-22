Feature('Home');

Scenario('Required address', ({homePage}) => {
    homePage.goToHomePage();
    homePage.checkNotVisibleAddressRequiredMsg();
    homePage.clickSearch();
    homePage.checkAddressRequireMsg();
});
