var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieView = require('./movieView');

module.exports = Backbone.View.extend({
  el: '#movies',
  initialize: function () {
    
    this.addAll();
    this.listenTo(this.collection, 'update', this.reload);
  },
  reload: function () {
    this.$el.html('');
    this.addAll();
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },
  addOne: function (movie) {
    var movieView = new MovieView({model: movie});
    this.$el.append(movieView.render().el);

  }
});
