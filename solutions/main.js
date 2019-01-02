document.querySelector(".heart").addEventListener("click", function() {
  alert("Liked! ❤️");
});

// Challenge #J1 - Make it so that someone can post another comment
document.querySelector(".comment").addEventListener("click", function() {
  var user = prompt("What's your name?");
  var comment = prompt("Enter your comment below!");
  document.querySelector("#comment").innerHTML =
    `<b>${user}</b>` + " " + comment;
});

// Challenge #J2 - Make it so that the # of likes increases by 1 when someone clicks on the heart icon
count = 99
document.querySelector(".heart").addEventListener("click", function() {
    count += 1;
    document.querySelector("#likes").innerHTML =
      count + " likes";
});

// Challenge #J3 - Make it so that someone can post another picture
