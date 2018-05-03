$(function () {
  $("#addburger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger: $("#burger").val().trim().toLowerCase()
    };

    if (newBurger.burger !== "") {

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
      $("#burger").val("");
    }
  });

  $(".change-burger").on("click", function (event) {

    let id = $(this).data("burgerid");
    let newDevoured = $(this).data("newdevoured");

    if (newDevoured === 0) {
      newDevoured = 1;
    } else {
      newDevoured = 0;
    }

    let newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("moved to devoured column");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {

    let id = $(this).data("burgerid");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});