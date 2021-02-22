const { I } = inject();

module.exports = {
  fields: {
    addressDataId: '#imysearchstring',
    addressDataName: 'a[data-name="Dłusko 12, 78-630 Dłusko"]'
  },

  fillAddress(address) {
    I.fillField(this.fields.addressDataId, address);
    I.click(this.fields.addressDataName);
    I.waitForNavigation();
  },

  clickSearch(){
    I.click('#submit_deliveryarea') 
  },

  goToHomePage(){
    I.amOnPage('');
  }
}
