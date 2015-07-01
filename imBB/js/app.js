// var mockData = require('./data');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Router = require('./router');

module.exports = $(function () {
  new Router();
  Backbone.history.start();

});
