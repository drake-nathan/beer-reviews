/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const ReviewView = Backbone.View.extend({
  className: 'review',

  template: Handlebars.compile($('#review-template').html()),

  render() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});
