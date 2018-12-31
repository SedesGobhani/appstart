
  $(document).ready(function(){

    //console.log(menu); // debug
    console.log(colors); // debug

    // insert menu into DOM
    var n;
    for (n=0; n<menu.length; n++) {
      var newlink = "<a href=" + menu[n].href + ">" + menu[n].name + "</a>";
      $("nav").append(newlink);
    }
    // initial settings for header
    $("header").css("background-color", colors.background);
    $("header").css("color", colors.foreground);
    // initial settings for menu items
    $("a").each(function(i) {
      $(this).css("color", colors.button_foreground);
      $(this).css("background", colors.button_background);
      $(this).css("border-style", "solid");
      $(this).css("border-width", "1px");
      $(this).css("border-color", colors.button_border);
    });

    // menu events drive css
    // for each button
    $( "a" ).each(function(i) {

      // establish click functions
      $(this).click(function() {  // click occurred
        // clear previously selected button
        $(this).siblings().each(function(i) {
          if( $(this).data("selected") ) {
            $(this).data("selected", false);
            $(this).css("color", colors.button_foreground);
            $(this).css("background", colors.button_background);
            $(this).css("border-color", colors.button_border);
          }
        });
        // set this selected button
        $(this).data("selected", true);
        $(this).css("color", colors.selbtn_foreground);
        $(this).css("background", colors.selbtn_background);
        $(this).css("border-color", colors.selbtn_border);
      })

    // establish hover functions
    $(this).hover(
      function() { // hover activated
        $(this).css("color", colors.hvrbtn_foreground);
        $(this).css("background", colors.hvrbtn_background);
        $(this).css("border-color", colors.hvrbtn_border);
      },
      function(){ // hover deactivated
        if( $(this).data("selected") ) {
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
