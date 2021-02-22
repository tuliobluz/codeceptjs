const { I } = inject();

module.exports = {
  popularItem:'$popular-items-list',
  acceptChoices: '$menu-item-choices-action-submit',
  checkoutButton: '$sidebar-action-checkout',
  detailsPayment: '$sidebar-overview-details-payment-element-panel',
  doneButton: '$payment-modal-action-submit',
  submitOrderButton: '$proceed-checkout-button-action-submit-order',
  increaseAmountButton: '$cart-item-amount-action-increment',
  commentButton: '$cart-item-action-add-comment',
  commentField: '$cart-item-comment-textarea',
  addCommentButton: '$cart-item-comment-action-add',

  addPopularMeal(){
    I.click(this.popularItem);
    I.click(this.acceptChoices);
  },

  openComment(){
    I.click(this.commentButton);
  },

  addComment(text){
    I.waitForElement(this.commentField)
    I.fillField(this.commentField, text);
    I.click(this.addCommentButton)
  },

  addMealToCart(text, accept){
    I.click(`//h3[contains(text(),'${text}')]`);
    if(accept){
      I.click(this.acceptChoices);
    }
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

  submitOrderRestaurant(){
    I.click(this.submitOrderButton);
  },

  increaseAmount(){
    I.click(this.increaseAmountButton);
  },

  checkNotReachingMessage(){
    I.seeElement("div[data-qa='cart-mov-message-not-reached']")
  },

  checkNotVisibleNotReachingMessage(){
    I.dontSee("div[data-qa='cart-mov-message-not-reached']")
  }
}
