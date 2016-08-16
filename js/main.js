$(document).ready(function(){
	$('.popup').click(function(e){
		e.preventDefault();
		window.open($(this).attr('href'), 'popupWindow', 'width=600, height=600');

	});
		

	$('a.gallery[rel="gal1"]').colorbox({
				'opacity': 0.95,
				 'rel': 'gal1',
				 
			});
			$('a.gallery[rel="gal2"]').colorbox({
				'opacity': 0.95,
				 'rel': 'gal2',
				 
			});

			$('a.gallery[rel="gal3"]').colorbox({
				'opacity': 0.95,
				 'rel': 'gal3',
				 
			});

				$('a.gallery[rel="gal4"]').colorbox({
				'opacity': 0.95,
				 'rel': 'gal4',
				 
			});	 
	

	
});


