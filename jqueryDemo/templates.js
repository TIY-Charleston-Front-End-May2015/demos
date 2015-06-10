
var templates = {};

// single post template
templates.post = [
  "<article class='post' data-id='<%= _id %>'>",
  "<h3><%= title %></h3>",
  "<p><%= content %></p>",
  "<blockquote cite='http://calvin.io'>",
  "<%= author %></blockquote>",
  "<a href='' class='delete btn btn-danger'>delete</a> | <a href='' class='editPost'>edit</a>",
  "<div class='editing'>",
  "<input type='text' class='editTitle' value='<%= title %>'>",
  "<input type='text' class='editAuthor' value='<%= author %>'>",
  "<textarea class='editContent' name='editContent' rows='8' cols='40'>",
  "<%= content %>",
  "</textarea>",
  "<button type='button' class='submitEdit btn btn-warning'>Update</button>",
  "</div>",
  "</article>"
].join("");
templates.boo = [
  "<ul>",
    "<li><%= name %></li>",
  "</ul>"
].join("");

// about me page template
templates.about = [
  "<h1>More About Me</h1>",
  "<p>ThiCompiles JavaScript templates into functions that can be evaluated for rendering. Useful for rendering complicated bits of HTML from JSON data sources. Template functions can both interpolate values, using something, as well as execute arbitrary JavaScript code, with something. If you wish to interpolate a value, and have it be HTML-escaped, use something. When you evaluate a template function, pass in a data object that has properties corresponding to the template's free variables. The settings argument should be a hash containing any _.templateSettings that should be overridden.</p>"
].join("");
