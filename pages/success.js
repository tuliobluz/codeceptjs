const { I } = inject();

module.exports = {

  mapElementCss: {css: '.css-drhbsp-Map'},
  tipStepCss: {css: '.tipping.js-tipping-step5'},
  overviewCss: {css: '.orderoverview__content'},
  purchaseIdCss: {css: '.order-purchaseid'},

  checkElementTipVisible(){
    I.seeElement(this.tipStepCss);
  },

  checkUrlTracking(){
    I.seeInCurrentUrl('/foodtracker?trackingid=');
  },

  checkElementMap(){
    I.seeElement(this.mapElementCss); 
  },

  checkOverview(){
    I.seeElement(this.overviewCss)
  },

  checkPurschaseId(){
    I.seeElement(successPage.purchaseIdCss)
  }
}
