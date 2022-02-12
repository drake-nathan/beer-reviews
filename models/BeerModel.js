/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const BeerModel = Backbone.Model.extend({
  idAttribute: '_id',

  defaults() {
    return {
      name: '',
      style: '',
      abv: 0,
      image_url: '',
      editing: false,
      reviews: new ReviewsCollection(),
    };
  },

  parse(beer) {
    if (beer.reviews instanceof Backbone.Collection) {
      return beer;
    }

    const newObj = {
      reviews: new ReviewsCollection(beer.reviews),
    };
    return { ...beer, ...newObj };
  },

  toggleEdit() {
    this.set('editing', !this.get('editing'));

    if (!this.get('editing')) {
      this.save();
    }
  },

  updateName(name) {
    this.set('name', name);
  },
});
