var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieModel = require('./movie');

module.exports = Backbone.View.extend({
  className: 'movieForm',
  template: _.template($('#formTmpl').html()),
  initialize: function (options) {
    this.el = options.el;
    if(!this.model) {
      this.model = new MovieModel();
    }
    this.render();
  },
  events: {
    "submit form": "handleSubmit"
  },
  render: function () {
    var myModel = this.model.isNew() ? {} : this.model.toJSON();
    myModel.isNew = this.model.isNew();
    var markup = this.template(myModel);
    this.$el.html(markup);
    return this;
  },
  handleSubmit: function (event) {
    event.preventDefault();
    this.model.set({
      title: this.$el.find('input[name="title"]').val(),
      cover: this.$el.find('input[name="cover"]').val(),
      plot: this.$el.find('textarea[name="plot"]').val()
    });
    this.model.save();
    this.collection.add(this.model);
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
  }
});
