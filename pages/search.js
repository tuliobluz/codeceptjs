const { I } = inject();

module.exports = {

  // insert your locators and methods here
  addressData: {css: "div[data-qa='restaurant-card-test-restaurant-selenium']"},

  clickRestaurant(){
    I.click(this.addressData);
  }
}
