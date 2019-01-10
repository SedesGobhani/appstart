// menu configuration variables (from server)
var menu = header.links;
var colors = header.colors;
var selIndex = header.selIndex;

// element selector variables
var navbar = document.getElementById("navbar");

// @start
document.addEventListener("DOMContentLoaded", function(event) { 

  // Create Menu HTML
  var n;
  for (n=0; n<menu.length; n++) {
    var newLink = document.createElement("a");
    newLink.setAttribute('href', menu[n].href);
    newLink.innerHTML = menu[n].name;
    navbar.appendChild(newLink); // add link to navbar
  }

  // Select appropriate element by index from server
  navbar.children[selIndex].classList.add('selected');

});
