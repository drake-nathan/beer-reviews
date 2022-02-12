/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const BeersCollection = Backbone.Collection.extend({
  model: BeerModel,

  addBeer(name, style, abv, imageUrl) {
    this.add({
      name,
      style,
      abv,
      imageUrl,
    });
  },
});
