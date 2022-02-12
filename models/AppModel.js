/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const AppModel = Backbone.Model.extend({
  defaults() {
    return {
      beers: new BeersCollection(),

      current_beer: null,

      show_reviews: false,
    };
  },

  showReviews() {
    this.set('show_reviews', true);
  },

  updateCurrentBeer(id) {
    const allBeers = this.get('beers');
    const currentBeer = allBeers.findWhere({ id: parseInt(id) });

    this.set('current_beer', currentBeer);
  },

  showBeers() {
    this.set('show_reviews', false);
  },
});
