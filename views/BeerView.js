/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const BeerView = Backbone.View.extend({
  className: 'beer',

  template: Handlebars.compile($('#beer-template').html()),

  initialize() {
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change:editing', this.renderEdit);
    this.listenTo(this.model, 'change:name', this.render);
  },

  events: {
    'click .remove': 'removeBeer',
    'click .edit': 'editBeer',
    'keypress .edit-mode': 'handleBeerEdit',
  },

  removeBeer() {
    this.model.destroy();
  },

  editBeer() {
    this.model.toggleEdit();
  },

  handleBeerEdit(e) {
    if (e.keyCode === 13) {
      const newName = this.$('.edit-mode').val();

      this.model.set('name', newName);
      this.model.toggleEdit();
    }
  },

  renderEdit() {
    this.$el.toggleClass('editing', this.model.get('editing'));
  },

  render() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});
