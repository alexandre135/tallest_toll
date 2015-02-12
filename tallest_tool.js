function tallest_toll(element_class){
		
		var get_class = "."+element_class ;
		var hf = 0;
		$(get_class).css("height", "auto");
		$(get_class).each(function(){	
			var height_class = $(this).height(); 
			if (height_class > hf ){
				hf = height_class;		
			};	
		});
		$(get_class).css("height", hf);
		
	};