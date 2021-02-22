const { I } = inject();

class Payment {
  constructor() {
    this.changePayment = '$multi-step-checkout-details-payment-element',
    this.doneButton = '$payment-modal-action-submit',
    this.cancelPaypalCss = {css: "#login .cancelUrl"}
  }

  selectPayment(payment){
    I.click(this.changePayment);
    I.click(`div[data-qa='payment-modal-${payment}']`);
    I.click(this.doneButton);
  };

  cancelPaypalPayment(){
    I.click(this.cancelPaypalCss);
    I.waitForNavigation();
  };
}

module.exports = Payment;
