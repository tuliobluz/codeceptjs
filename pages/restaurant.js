const { I } = inject();

module.exports = {

  // insert your locators and methods here
  popularItem: {css: "div[data-qa='popular-items-list']"},
  acceptChoices: {css: "button[data-qa='menu-item-choices-action-submit']"},
  checkoutButton: {css: "button[data-qa='sidebar-action-checkout']"},
  detailsPayment: {css: "div[data-qa='sidebar-overview-details-payment-element-panel']"},
  payment: {css: "div[data-qa='payment-modal-cash-element-element-element']"},
  doneButton: {css: "button[data-qa='payment-modal-action-submit']"},
  submitOrderButton: {css: "button[data-qa='proceed-checkout-button-action-submit-order']"},

  addPopularItem(){
    I.click(this.popularItem);
    I.click(this.acceptChoices);
  },

  goToCheckout(){
    I.click(this.checkoutButton);
  },

  openDetailsPayment(){
    I.click(this.detailsPayment);
  },

  selectPayment(){
    I.click(this.payment);
  },

  acceptPayment(){
    I.click(this.doneButton);
  },

  submitOrder(){
    I.click(this.submitOrderButton);
  }
}
