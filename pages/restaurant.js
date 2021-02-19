const { I } = inject();

module.exports = {

  popularItem: {css: "div[data-qa='popular-items-list']"},
  acceptChoices: {css: "button[data-qa='menu-item-choices-action-submit']"},
  checkoutButton: {css: "button[data-qa='sidebar-action-checkout']"},
  detailsPayment: {css: "div[data-qa='sidebar-overview-details-payment-element-panel']"},
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

  selectPaymentRestaurant(payment){
    I.click(`div[data-qa='payment-modal-${payment}']`);
  },

  acceptPayment(){
    I.click(this.doneButton);
  },

  submitOrder(){
    I.click(this.submitOrderButton);
  }
}
