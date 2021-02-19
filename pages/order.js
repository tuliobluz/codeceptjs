const { I } = inject();

module.exports = {

  fields: {
    name: '#input_4',
    email: '#input_5',
    phoneNumber: '#input_6'
  },

  changePayment: {css: "div[data-qa='multi-step-checkout-details-payment-element']"},
  doneButton: {css: "button[data-qa='payment-modal-action-submit']"},
  submitOrder: {css: "button[data-qa='multi-step-checkout-action-submit-order']"},
  cancelPaypal: {css: "#login .cancelUrl"},

  fillNameField(name, email, phoneNumber) {
    I.fillField(this.fields.name, name);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.phoneNumber, phoneNumber);
  },

  selectPaymentOrder(payment){
    I.click(this.changePayment);
    I.click(`div[data-qa='payment-modal-${payment}']`);
    I.click(this.doneButton);
    I.click(this.submitOrder);

    if(payment === 'paypal'){
      I.waitForNavigation();
      I.click(this.cancelPaypal);
      I.waitForNavigation();
    }
  }
}
