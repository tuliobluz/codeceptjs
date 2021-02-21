const { I } = inject();

class Payment {
  constructor() {
    this.changePaymentCss = {css: "div[data-qa='multi-step-checkout-details-payment-element']"},
    this.doneButtonCss = {css: "button[data-qa='payment-modal-action-submit']"},
    this.submitOrderButtonCss = {css: "button[data-qa='multi-step-checkout-action-submit-order']"},
    this.cancelPaypalCss = {css: "#login .cancelUrl"}
  }

  selectPaymentOrder(payment){
    I.click(this.changePaymentCss);
    I.click(`div[data-qa='payment-modal-${payment}']`);
    I.click(this.doneButtonCss);
    I.click(this.submitOrderButtonCss);
  };

  cancelPaypalPayment(){
    I.waitForNavigation();
    I.click(this.cancelPaypalCss);
    I.waitForNavigation();
  };
}

module.exports = Payment;
