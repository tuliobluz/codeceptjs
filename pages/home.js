const { I } = inject();

module.exports = {

  // insert your locators and methods here
  // setting locators
  fields: {
    addressData: '#imysearchstring',
    addressDataName: 'a[data-name="Dłusko 12, 78-630 Dłusko"]'
  },

  fillAddress(address) {
    I.fillField(this.fields.addressData, address);
    I.click(this.fields.addressDataName);
  },
}
