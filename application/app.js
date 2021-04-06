document.addEventListener("DOMContentLoaded", () => {
  var myElement = document.getElementById("sample");
  var data = document.getElementById("sample").innerHTML;

  var datarewrite = "hello advance javscript";

  document.getElementById("sample").innerHTML = datarewrite;

  setInterval(changeBirdImage, 5000); // 5000 mili seconds

  console.log(myElement);

  console.log(` the data we are looking is "${data}"`);

  function changeBirdImage() {
    console.log("entering here");
    var birdImage = document.getElementById("bird");
    birdImage.setAttribute("src", "sample2.jpg");
  }
});
