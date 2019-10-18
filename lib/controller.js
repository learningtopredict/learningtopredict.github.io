// controls the flow of the page

var scroll_top = 0;
var scroll_bottom = 1;
$(document).scroll(function(){
  scroll_top = $(document).scrollTop();
  scroll_bottom = scroll_top + $(document).height();
});

// blazy code
var bLazy = new Blazy({
  success: function(){
    updateCounter();
  }
});

// not needed, only here to illustrate amount of loaded images
var imageLoaded = 0;

function updateCounter() {
  imageLoaded++;
  console.log("blazy image loaded: "+imageLoaded);
}
