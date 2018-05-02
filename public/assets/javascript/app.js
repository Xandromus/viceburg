$(function () {
  $("#addburger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger: $("#burger").val().trim()
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

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: { devoured: true }
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