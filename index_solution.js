document.getElementById("heart_icon").addEventListener("click", function() {
  alert("Liked! ❤️");
});

// Homework #1 - Make it so that someone can enter another comment
document.getElementById("comment_icon").addEventListener("click", function() {
  var user = prompt("What's your name?");
  var comment = prompt("Enter your comment below!");
  if (user != null && comment != null) {
    document.getElementById("comment").innerHTML =
      `<b>${user}</b>` + " " + comment;
  }
});

// Homework #2 - Make it so that someone can upload another picture

// Homework #3 - Make it so that the # of 'Likes' increases by 1 when someone clicks on the heart icon
