// dom ready;
$(document).ready(function () {
  page.init();
});


var page = {

  url: "http://tiy-fee-rest.herokuapp.com/collections/tacobell",
  init: function () {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function () {

    page.loadPosts();
  },
  initEvents: function () {

    $('.content').on('click', '.delete', page.deletePost);
    $('.newBlogSubmit').on('click', page.addPost);
    $('.nav').on('click', 'a', page.navPages);
    $('.aboutBlogPost').on('click', 'a', page.addPost);

    $('.content').on('click', '.editPost', function (e) {
      e.preventDefault();
      $(this).next().toggleClass('active');
    });

    $('.content').on('click', '.submitEdit', function (e) {
      e.preventDefault();
      var $thisEditing = $(this).closest('.editing');
      var postId = $(this).closest('article').data('id');
      var updatedPost = {
        title: $thisEditing.find('.editTitle').val(),
        content: $thisEditing.find('.editContent').val(),
        author: $thisEditing.find('.editAuthor').val()
      };

      page.updatePost(updatedPost, postId);


    });


  },

  addOnePostToDOM: function (post) {
    page.loadTemplate("post", post, $('.blog > .content'));
  },
  addAllPostsToDOM: function (postCollection) {
    _.each(postCollection, page.addOnePostToDOM);
  },
  loadPosts: function () {

    $.ajax({
      url: page.url,
      method: 'GET',
      success: function (data) {
        console.log(data);
        page.addAllPostsToDOM(data);
      },
      error: function (err) {

      }
    });


  },
  createPost: function (newPost) {

    $.ajax({
      url: page.url,
      method: 'POST',
      data: newPost,
      success: function (data) {

        page.addOnePostToDOM(data);
        console.log("success!!: ", data);
      },
      error: function (err) {
        console.log("error ", err);
      }
    });

  },
  updatePost: function (editedPost, postId) {

    $.ajax({
      url: page.url + '/' + postId,
      method: 'PUT',
      data: editedPost,
      success: function (data) {
        $('.content').html('');
        page.loadPosts();
        
      },
      error: function (err) {}
    });


  },
  deletePost: function(e) {
    e.preventDefault();

    $.ajax({
      url: page.url + "/" + $(this).closest('article').data('id'),
      method: 'DELETE',
      success: function (data) {
        console.log(this);
        $('.content').html('');
        page.loadPosts();
      }
    });
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
    page.createPost(newPost);

    // clear form
    $('input, textarea').val("");
  },
  loadTemplate: function (tmplName, data, $target) {
    var compiledTmpl = _.template(page.getTemplate(tmplName));

    $target.append(compiledTmpl(data));
  },
  getTemplate: function (name) {
    return templates[name];
  }
};
