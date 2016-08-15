$(document).ready(function(){
	$('.popup').click(function(e){
		e.preventDefault();
		window.open($(this).attr('href'), 'popupWindow', 'width=600, height=600');

	});
		 
	

});