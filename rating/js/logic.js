
  var stars = document.querySelector(".stars");
  var ratings = document.querySelectorAll('.rating');
  stars.addEventListener('click', function(evt) {
    var currentRating = Number(evt.target.dataset.rating);
    // hide all
    for (var i = 0; i < ratings.length; i++) {
        // remove all the checked options
        ratings[i].classList.remove("checked");
    }
    // showing the right ones
    for (var i = 1; i <= currentRating; i++) {
        // add checked to all the right ones
        ratings[i-1].classList.add("checked");
    }
  });

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
