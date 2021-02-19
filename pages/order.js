const { I } = inject();

module.exports = {

  // insert your locators and methods here
  // setting locators
  fields: {
    name: '#input_4',
    email: '#input_5',
    phoneNumber: '#input_6'
  },

  changePayment: {css: "div[data-qa='multi-step-checkout-details-payment-element']"},
  payment: {css: "div[data-qa='payment-modal-paypal-element-element-element']"},
  doneButton: {css: "button[data-qa='payment-modal-action-submit']"},
  submitOrder: {css: "button[data-qa='multi-step-checkout-action-submit-order']"},
  cancelPaypal: {css: "#login .cancelUrl"},

  fillNameField(name, email, phoneNumber) {
    I.fillField(this.fields.name, name);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.phoneNumber, phoneNumber);
  },

  selectPayment(){
    I.click(this.changePayment);
    I.click(this.payment);
    I.click(this.doneButton);
    I.click(this.submitOrder);
    I.waitForNavigation();
    I.click(this.cancelPaypal);
    I.waitForNavigation();
  }
}
