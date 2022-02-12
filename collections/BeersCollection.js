/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const BeersCollection = Backbone.Collection.extend({
  url: 'https://new-beers.herokuapp.com/beers',
  model: BeerModel,

  addBeer(name, style, abv, image_url) {
    this.create(
      {
        name,
        style,
        abv,
        image_url,
      },
      { wait: true }
    );
  },

  parse(response) {
    return response.map((beer) => {
      const newObj = {
        reviews: new ReviewsCollection(beer.reviews),
      };

      return { ...beer, ...newObj };
    });
  },
});
