/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const BeerModel = Backbone.Model.extend({
  defaults() {
    return {
      id: null,
      name: '',
      style: '',
      abv: 0,
      image_url: '',
      editing: false,
      reviews: new ReviewsCollection(),
    };
  },

  toggleEditMode() {
    this.set('editing', !this.get('editing'));
  },

  updateName(name) {
    this.set('name', name);
  },
});
