const { I } = inject();

module.exports = {

  addressData: {css: "div[data-qa='restaurant-card-test-restaurant-selenium']"},

  clickRestaurant(){
    I.click(this.addressData);
  }
}
