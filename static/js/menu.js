
  $(document).ready(function(){

    //console.log(menuItems); // debug
    var n;
    for (n=0; n<menuItems.length; n++) {
      var newlink = "<a href=" + menuItems[n].href + ">" + menuItems[n].name + "</a>";
      $("nav").append(newlink);
    }

    $( "a" ).each(function(i) {

      $(this).click(function() {  // click occurred
        $(this).siblings().each(function(i) {
          $(this).css("border", "");
          $(this).data("selected", false);
          $(this).css("color", "");
        })
        $(this).css("border", "1px solid tomato");
        $(this).data("selected", true);
      });

    $(this).hover(
      function() { // hover activated
        $(this).css("color", "tomato");
      },
      function(){ // hover deactivated
        if( $(this).data("selected") ) {
          $(this).css("color", "tomato");
        } else {
          $(this).css("color", "");
        }
      });

    });

  });
