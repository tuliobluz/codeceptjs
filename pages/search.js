const { I } = inject();
module.exports = {
  addressData: '$restaurant-card-test-restaurant-selenium',

  clickRestaurant(){
    I.click(this.addressData);
  }
}
