$(function() {
  
    $(".devour-button").on("click", function(event) {
      var id = $(this).data("id");
  
      var changeState = {
        devoured: true 
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: changeState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("submit", function(event) {

      event.preventDefault();
  
      let name = $("#nameDiv").val().trim();
      if (name == "")
        return;
      var newBurger = {
        name: name,
        devoured: false
      };
  
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {

          location.reload();
        }
      );
    });
  });