/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const BeerDetailView = Backbone.View.extend({
  className: 'reviews-container-inner',

  events: {
    'click .submit-review': 'createReview',
  },

  initialize() {
    this.listenTo(this.model.get('reviews'), 'add', this.renderReview);
  },

  template: Handlebars.compile($('#beer-detail-template').html()),

  createReview() {
    this.model
      .get('reviews')
      .addReview(
        this.$('#review-name-input').val(),
        this.$('#review-notes-input').val()
      );
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  renderReview(review) {
    const reviewView = new ReviewView({ model: review });
    this.$('.review-list').append(reviewView.render().el);
  },

  renderAllReviews() {
    this.model.get('reviews').each(function (m) {
      this.renderReview(m);
    }, this);
  },
});
