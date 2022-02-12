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

  initialize() {
    this.listenTo(this, 'change:current_beer', this.updateReviewCollectionUrl);
  },

  updateReviewCollectionUrl() {
    this.get('current_beer')
      .get('reviews')
      .updateUrl(this.get('current_beer').get('_id'));
  },

  showReviews() {
    this.set('show_reviews', true);
  },

  updateCurrentBeer(id) {
    const allBeers = this.get('beers');
    const currentBeer = allBeers.findWhere({ _id: id });

    this.set('current_beer', currentBeer);
  },

  showBeers() {
    this.set('show_reviews', false);
  },
});
