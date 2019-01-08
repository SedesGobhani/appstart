// menu configuration variables (from server)
var menu = header.links;
var colors = header.colors;
var selected = header.misc.selected;

// element selector variables
var menuElement = document.getElementById("navbar");
var menuItems = menuElement.getElementsByTagName("a");
// var menuItems = menuElement.childNodes;

console.log(header); // debug
console.log("Selected = " + selected);

document.addEventListener("DOMContentLoaded", function(event) { 

  // create full menu
  var n;
  for (n=0; n<menu.length; n++) {
    var newLink = document.createElement("a");
    if (menu[n].name == selected) {
      newLink.classList.add('selected');
      // newLink.setAttribute('class','selected');
    }
    newLink.setAttribute('href', menu[n].href);
    newLink.innerHTML = menu[n].name;
    menuElement.appendChild(newLink); // add link to navbar
  }

  // initial settings for header
  document.querySelector("header").style.background = colors.background;
  document.querySelector("header").style.color = colors.foreground;

  // initial settings for menu items
  for (n=0; n<menuItems.length; n++) {
    menuItems[n].style.borderStyle = "solid";
    menuItems[n].style.borderWidth = "1px";
    if( menuItems[n].classList.contains('selected')) {
      menuItems[n].style.color = colors.selbtn_foreground;
      menuItems[n].style.backgroundColor = colors.selbtn_background;
      menuItems[n].style.borderColor = colors.selbtn_border;
    } else {
      menuItems[n].style.color = colors.button_foreground;
      menuItems[n].style.backgroundColor = colors.button_background;
      menuItems[n].style.borderColor = colors.button_border;
    }
  }

  // menu item event handlers that drive css
  for (n=0; n<menuItems.length; n++) {



  }



  $( "a" ).each(function(i) {

    // establish "click" functions
    $(this).click(function() {  // click occurred
      // clear previously selected button
      $(this).siblings().each(function(i) {
        if( $(this).hasClass("selected") ) {
          $(this).removeClass("selected"); 
          $(this).css("color", colors.button_foreground);
          $(this).css("background", colors.button_background);
          $(this).css("border-color", colors.button_border);
        }
      });
      // set this selected button
      $(this).addClass("selected");
      $(this).css("color", colors.selbtn_foreground);
      $(this).css("background", colors.selbtn_background);
      $(this).css("border-color", colors.selbtn_border);
    })

    // establish "hover" functions
    $(this).hover(
      function() { // hover activated
        if( !$(this).hasClass("selected") ) {
          $(this).css("color", colors.hvrbtn_foreground);
          $(this).css("background", colors.hvrbtn_background);
          $(this).css("border-color", colors.hvrbtn_border);
        }
      },
      function(){ // hover deactivated
        if( $(this).hasClass("selected") ) {
          $(this).css("color", colors.selbtn_foreground);
          $(this).css("background", colors.selbtn_background);
          $(this).css("border-color", colors.selbtn_border);
        } else {
          $(this).css("color", colors.button_foreground);
          $(this).css("background", colors.button_background);
          $(this).css("border-color", colors.button_border);
        }
      });

    });

  });
