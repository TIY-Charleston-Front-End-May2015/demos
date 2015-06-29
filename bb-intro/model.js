var PostModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/bb-demo',
  idAttribute: '_id',
  defaults: function () {
    return {
      title: "Default Title",
      author: "calvin"
    };
  },
  initialize: function (options) {
    // console.log('options name', options);
  }
});

var PostCollection = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://tiy-fee-rest.herokuapp.com/collections/bb-intro'
});
