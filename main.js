/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const appModel = new AppModel();

appModel.get('beers').add([
  {
    id: 1,
    name: '120 Minute IPA',
    style: 'IPA',
    imageUrl:
      'http://48tk9j3a74jb133e1k2fzz2s.wpengine.netdna-cdn.com/wp-content/uploads/2014/11/Dogfish-Head-120-Minute-IPA-2011-Bottle.jpg',
    abv: 18,
  },
  {
    id: 2,
    name: 'Breakfast Stout',
    style: 'Stout',
    imageUrl:
      'https://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_14956.jpg',
    abv: 9,
  },
  {
    id: 3,
    name: 'Big Bad Baptist',
    style: 'Imperial Stout',
    imageUrl:
      'http://www.totalwine.com/media/sys_master/twmmedia/h5a/h80/8813243072542.png',
    abv: 11,
  },
]);

const appView = new AppView({ model: appModel });
