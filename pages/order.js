const { I } = inject();
const Payment = require('./payment');
class Order extends Payment{
  constructor() {
    super();
    this.nameId = '#input_4';
    this.emailId = '#input_5';
    this.phoneNumberId = '#input_6',
    this.submitOrderButton = '$multi-step-checkout-action-submit-order'
  };

  fillRequiredUserFields(user) {
    I.fillField(this.nameId, user.NAME);
    I.fillField(this.emailId, user.EMAIL);
    I.fillField(this.phoneNumberId, user.PHONE);
  };

  submitOrder() {
    I.click(this.submitOrderButton);
    I.waitForNavigation();
  };
}

module.exports = new Order();
module.exports.Order = Order;
