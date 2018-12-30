  $(document).ready(function(){
    $( "a" ).each(function(i) {
      $(this).click(function() {
        $(this).siblings().each(function(i) {
          $(this).css("color", "");
          $(this).data("selected", false);
          // $(this).css("border", "");
        })
        $(this).css("color", "#FFD700");
        $(this).data("selected", true);
        // $(this).css("border", "1px solid #FFD700");
      });

    $(this).hover(
      function() {
        $(this).css("background-color", "#6495ED");
        $(this).css("font-weight", "bold");
        if( $(this).data("selected") ) {
          $(this).css("color", "#FFD700");
        } else {
          $(this).css("color", "#0000C0");
        }
      },
      function(){
        $(this).css("background-color", "#0000C0");
        $(this).css("font-weight", "normal");
        if( $(this).data("selected") ) {
          $(this).css("color", "#FFD700");
        } else {
          $(this).css("color", "");
        }
      });

    });

  });
