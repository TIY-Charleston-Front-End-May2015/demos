var tmplString;

$(document).ready(function() { // The DOM is now ready to interact with.

// 1.load the _.template with the template string
var compiledTmpl = _.template(templates.post);
  tmplString = "";

posts.forEach(function(el) {
  console.log(compiledTmpl(el));
  // 2. add the data to the compiled template
  tmplString += compiledTmpl(el);

// loadTemplate("post", el, $('.content'));

});
// 3. put the template that's merged with data in the DOM
$('.blog > .content').append(tmplString);
loadTemplate("about", {}, $('.about'));

$('.content').on('click', '.delete', function(e) {
  e.preventDefault();
  $(this).closest("article").remove();
});


// adds new post
$('.newBlogSubmit').on('click', function (event) {
  event.preventDefault();
  // build an object that looks like our original data
  var newPost = {
    title: $('input[name="title"]').val(),
    content: $('textarea').val(),
    author: $('input[name="author"]').val()
  };

   loadTemplate("post", newPost, $('.blog > .content'));

  // clear form
  $('input, textarea').val("");
});

// displaying and hiding different pages by clicking the navigation
$('.nav').on('click', 'a', function (event) {
  event.preventDefault();
  console.log("this element ",$(this).attr('rel'));
  var clickedPage = $(this).attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickedPage).addClass('active');
});

});

/**
* small function to handle using the _.template function and putting it on the page
* @param {string} name Name of the template from the templates object
* @param {object} data The data you want to merge with your string template
* @param {object} $target jQuery object used to append the compiled template with data to the page.
*/
 function loadTemplate(name, data, $target) {
   var compiledTmpl = _.template(templates[name]);
   $target.append(compiledTmpl(data));
 }
