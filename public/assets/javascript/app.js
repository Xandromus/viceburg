  $("#addburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger: $("#burger").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".change-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let id = $(this).data("id");
    let newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to ", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });