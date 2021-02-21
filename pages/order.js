const { I } = inject();
const Payment = require('./payment');
class Order extends Payment{
  constructor() {
    super();
    this.nameId = '#input_4';
    this.emailId = '#input_5';
    this.phoneNumberId = '#input_6'
  };

  fillNameField(user) {
    I.fillField(this.nameId, user.NAME);
    I.fillField(this.emailId, user.EMAIL);
    I.fillField(this.phoneNumberId, user.PHONE);
    };

  submitOrder() {
    I.click(this.submitOrderButton);
  };
}

// For inheritance
module.exports = new Order();
module.exports.Order = Order; // for inheritance



// module.exports = {

//   fields: {
//     name: '#input_4',
//     email: '#input_5',
//     phoneNumber: '#input_6'
//   },

//   changePayment: {css: "div[data-qa='multi-step-checkout-details-payment-element']"},
//   doneButton: {css: "button[data-qa='payment-modal-action-submit']"},
//   submitOrderButton: {css: "button[data-qa='multi-step-checkout-action-submit-order']"},
//   cancelPaypal: {css: "#login .cancelUrl"},

//   fillNameField(name, email, phoneNumber) {
//     I.fillField(this.fields.name, name);
//     I.fillField(this.fields.email, email);
//     I.fillField(this.fields.phoneNumber, phoneNumber);
//   },

//   selectPaymentOrder(payment){
//     I.click(this.changePayment);
//     I.click(`div[data-qa='payment-modal-${payment}']`);
//     I.click(this.doneButton);
//     I.click(this.submitOrderButton);
//   },

//   cancelPaypalPayment(){
//     I.waitForNavigation();
//     I.click(this.cancelPaypal);
//     I.waitForNavigation();
//   },

//   submitOrder(){
//     I.click(this.submitOrderButton);
//   }
// }
