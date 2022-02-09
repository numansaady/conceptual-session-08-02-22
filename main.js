const btnGroup = document.getElementsByClassName("btn");
for (const btn of btnGroup) {
  btn.addEventListener("click", function (e) {
    if (e.target.id == "first-btn") {
      document.getElementById("heading").style.color = "red";
    } else {
      document.getElementById("heading").style.color = "green";
    }
  });
}
