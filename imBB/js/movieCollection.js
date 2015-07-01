var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var MovieModel = require('./movie');

module.exports = Backbone.Collection.extend({
  model: MovieModel,
  url:'http://tiy-fee-rest.herokuapp.com/collections/imbb',
  initialize: function () {
    console.log('collections are awesome!');
  }


});
