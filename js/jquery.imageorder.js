// imgLoad Plugin
var imgLoadImages, imgLoadIndex;
(function( $ ) {
  $.fn.imageOrder = function(selector) {
  	imgLoadImages = Array();
  	imgLoadIndex = 0;
  	var elems = $(selector), count = elems.length;
  	elems.each(function(i){
  		var el = $(this);
  		var index = el.attr("order"); 
  		imgLoadImages[index] = el;
		if(! -- count) $.imgLoadNext();
  	});
  };
  $.imgLoadNext = function(selector) {
  	if(imgLoadImages.length > imgLoadIndex ){
  		var nextImg = imgLoadImages[imgLoadIndex];
  		nextImg.attr("src",nextImg.attr("url"));
	  	imgLoadIndex++;
		nextImg.ready($.imgLoadNext);
  	}
  };
})( jQuery );