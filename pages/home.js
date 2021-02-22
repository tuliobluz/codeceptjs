const { I } = inject();

module.exports = {
  fields: {
    addressDataId: '#imysearchstring',
  },
  addressDataName: 'a[data-name="Dłusko 12, 78-630 Dłusko"]',
  requiredMsg: "#ideliveryareaerror[style='display: block;']",

  fillAddress(address) {
    I.fillField(this.fields.addressDataId, address);
    I.click(this.addressDataName);
    I.waitForNavigation();
  },

  clickSearch(){
    I.click('#submit_deliveryarea') 
  },

  goToHomePage(){
    I.amOnPage('');
  },

  checkNotVisibleAddressRequiredMsg(){
    I.dontSee(this.requiredMsg)
  },

  checkAddressRequireMsg(){
    I.seeElement(this.requiredMsg);
  }
}
