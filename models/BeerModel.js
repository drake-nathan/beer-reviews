/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const BeerModel = Backbone.Model.extend({
  defaults: {
    id: null,
    name: '',
    style: '',
    abv: 0,
    imageUrl: '',
    editing: false,
  },

  toggleEdit() {
    this.set('editing', !this.get('editing'));
  },
});
