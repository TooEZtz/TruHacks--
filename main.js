const scroller = document.querySelectorAll(".scroller");

function addAnimation(){
  scroller.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  });
}