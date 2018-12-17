document.getElementById("heart_icon").addEventListener("click", function() {
  alert("Liked! ❤️");
});

// Homework #H1 - Make it so that someone can post another comment
document.getElementById("comment_icon").addEventListener("click", function() {
  var user = prompt("What's your name?");
  var comment = prompt("Enter your comment below!");
  document.getElementById("comment").innerHTML =
    `<b>${user}</b>` + " " + comment;
});

// Homework #H2 - Make it so that the # of likes increases by 1 when someone clicks on the heart icon
count = 99
document.getElementById("heart_icon").addEventListener("click", function() {
    count += 1;
    document.getElementById("likes").innerHTML =
      count + " likes";
});

// Homework #H3 - Make it so that someone can post another picture

