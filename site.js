function navbarMin() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementsByClassName("headerA")[0].style.fontSize = "40px";
    //document.getElementsByClassName("headerA")[0].style.float = "left";
} else {
  document.getElementsByClassName("headerA")[0].style.fontSize = "70px";
  //document.getElementsByClassName("headerA")[0].style.float = "none";
  }
}

window.onscroll = function(){navbarMin()};
