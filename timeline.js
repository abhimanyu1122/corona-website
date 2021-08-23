 var items = document.querySelectorAll(".timeline li");
  /* function to check whether list item passes as parameter has its
  margin area falling inside document's visible width and height.
  Returns true in case above condition is met. */
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top/2 >= 0 &&
      rect.left/2 >= 0 &&
      rect.bottom /2<= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right /2<= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function abc(){
       for(i=0;i<items.length;i=i+1)
       {
            if(isElementInViewport(items[i]))
            {items[i].classList.add("anim")}
           // else{items[i].classList.remove("anim")}//
       }
  }
  window.addEventListener("scroll",abc)