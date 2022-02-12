/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const ReviewsCollection = Backbone.Collection.extend({
  model: ReviewModel,

  addReview(name, notes) {
    this.add({
      name,
      notes,
    });
  },
});
