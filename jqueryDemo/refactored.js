// dom ready;
$(document).ready(function () {
  page.init();
});


var page = {
  getTemplate: function (name) {
    return templates[name];
  },
  posts: posts,
  init: function (arguments) {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function (arguments) {
    var compiled = _.template(page.getTemplate("boo"));
    console.log(compiled({name: "calvin"}));
    page.posts.forEach(function (el) {
      page.loadTemplate("post", el, $('.content'));
    });

  },
  initEvents: function (arguments) {

    $('.content').on('click', '.delete', page.deletePost);
    $('.newBlogSubmit').on('click', page.addPost);
    $('.nav').on('click', 'a', page.navPages);
    $('.aboutBlogPost').on('click', 'a', page.addPost);

  },
  deletePost: function(e) {
    e.preventDefault();
    $(this).closest("article").remove();
  },
  navPages: function (event) {
    event.preventDefault();

    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  },
  addPost: function (event) {
    event.preventDefault();

    // build an object that looks like our original data
    var newPost = {
      title: $('input[name="title"]').val(),
      content: $('textarea').val(),
      author: $('input[name="author"]').val()
    };
    console.log(newPost);
     page.loadTemplate("post", newPost, $('.blog > .content'));

    // clear form
    $('input, textarea').val("");
  },
  loadTemplate: function (tmplName, data, $target) {
    var compiledTmpl = _.template(page.getTemplate(tmplName));

    $target.append(compiledTmpl(data));
  }
};
