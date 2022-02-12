/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const ReviewsCollection = Backbone.Collection.extend({
  url: '',
  model: ReviewModel,

  addReview(name, notes) {
    this.create(
      {
        name,
        notes,
      },
      { wait: true }
    );
  },

  updateUrl(id) {
    this.url = `https://new-beers.herokuapp.com/beers/${id}/reviews`;
  },
});
