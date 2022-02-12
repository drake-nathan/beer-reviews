/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-beer': 'createBeer',
    'click .view-beer': 'viewBeer',
    'click .back': 'goBack',
  },

  detailView: null,

  initialize() {
    this.listenTo(this.model.get('beers'), 'reset', this.renderBeers);
    this.listenTo(this.model.get('beers'), 'add', this.renderBeer);
    this.listenTo(this.model, 'change:show_reviews', this.renderPage);
    this.listenTo(this.model, 'change:current_beer', this.renderDetailView);

    this.renderBeers();
  },

  viewBeer(e) {
    const clickedBeerId = $(e.currentTarget).data().id;

    this.model.updateCurrentBeer(clickedBeerId);
    this.model.showReviews();
  },

  createBeer() {
    this.model
      .get('beers')
      .addBeer(
        this.$('#name-input').val(),
        this.$('#style-input').val(),
        this.$('#abv-input').val(),
        this.$('#img-input').val()
      );
  },

  renderPage() {
    this.$('.reviews-container').toggleClass(
      'show',
      this.model.get('show_reviews')
    );

    this.$('.beers-container').toggleClass(
      'show',
      !this.model.get('show_reviews')
    );
  },

  renderDetailView() {
    if (this.detailView) {
      this.detailView.remove();
    }

    this.detailView = new BeerDetailView({
      model: this.model.get('current_beer'),
    });
    this.$('.reviews-container').append(this.detailView.render().el);

    this.detailView.renderAllReviews();
  },

  goBack() {
    this.model.showBeers();
  },

  renderBeer(beer) {
    const beerView = new BeerView({ model: beer });
    this.$('.beer-list').append(beerView.render().el);
  },

  renderBeers() {
    this.model.get('beers').each(function (m) {
      this.renderBeer(m);
    }, this);
  },
});
