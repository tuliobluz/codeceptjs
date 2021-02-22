const { I } = inject();
const Payment = require('./payment');
class Order extends Payment{
  constructor() {
    super();
    this.nameId = '#input_4';
    this.emailId = '#input_5';
    this.phoneNumberId = '#input_6',
    this.submitOrderButton = '$multi-step-checkout-action-submit-order'
    this.nameRequiredMsg = '$shipping-info-forms-personal-details-input-name-message-error'
    this.emailRequiredMsg = '$shipping-info-forms-personal-details-input-email-message-error'
    this.phoneRequiredMsg = '$shipping-info-forms-personal-details-input-phone-message-error'
  };

  fillRequiredUserFields(user) {
    I.fillField(this.nameId, user.NAME);
    I.fillField(this.emailId, user.EMAIL);
    I.fillField(this.phoneNumberId, user.PHONE);
  };

  submitOrderNavigation() {
    I.click(this.submitOrderButton);
    I.waitForNavigation();
  };

  submitOrder() {
    I.click(this.submitOrderButton);
  };

  checkNameRequiredField(){
    I.seeElement(this.nameRequiredMsg)
  };

  checkEmailRequiredField(){
    I.seeElement(this.emailRequiredMsg)
  };

  checkPhoneRequiredField(){
    I.seeElement(this.phoneRequiredMsg)
  };
}

module.exports = new Order();
module.exports.Order = Order;
