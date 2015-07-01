var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var FormView = require('./formView');

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  events: {
    'click .trash': 'delete',
    'click .editing': 'toggleEdit'
  },
  toggleEdit: function (evt) {
    evt.preventDefault();
    new FormView({model: this.model, el: this.$el.find('.edit-movie')});
    this.$el.find('.edit-movie').toggleClass('active');
  },
  template: _.template($('#movieTmpl').html()),
  initialize: function () {

    this.listenTo(this.model, 'destroy', this.remove);
  },
  delete: function (evt) {
    evt.preventDefault();
  
    this.model.destroy();
  },
  remove: function () {
    console.log('in remove method in mod view');
    this.$el.remove();
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
