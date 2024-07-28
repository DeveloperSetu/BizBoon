// ========================> Header <=============================//
window.onscroll = function() {myFunction()};

 var header = document.querySelector("#headerContainer");
console.log(header);
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// ========================Toggle menu JS========================//

var bar = document.querySelector("#bar")
var crossBar = document.querySelector("#crossBar")
var menu = document.querySelector("#menu")

bar.addEventListener("click", ()=>{ 
  bar.style.display= "none";
  menu.style.display= "block";
});


crossBar.addEventListener("click", ()=>{ 
  bar.style.display= "block";
  menu.style.display= "none";
})
