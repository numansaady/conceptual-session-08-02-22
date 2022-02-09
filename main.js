{
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
}

{
  // Count
  let count = 0;
  //   document.getElementById("plus").addEventListener("click", function (e) {
  //     // count = count + 1;
  //     // count += 1;
  //     count++;
  //     // document.getElementById(id).innerText = count;   or using function
  //     output("count");
  //   });
  //   document.getElementById("minus").addEventListener("click", function (e) {
  //     // count = count - 1;
  //     // count -= 1;
  //     count--;
  //     // document.getElementById(id).innerText = count;  or using function
  //     output("count");
  //   });

  // Alternaive Short format of count

  function add(e) {
    count++;
    output("count");
  }
  function minus(e) {
    count--;
    output("count");
  }

  function output(id) {
    document.getElementById(id).innerText = count;
  }
}
