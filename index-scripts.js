// JavaScript Document
(function($){
		//Top Pictures Pos
	var currPos = 1;
	var nextPos = 2;
		//Middle Pictures Pos
	var mcurrPos = 3;
	var mnextPos = 4;
		//Bottom Pictures Pos
	var bcurrPos = 5;
	var bnextPos = 6;
	
	$(document).ready(function() {
		$("#aside-slider-top #1").fadeIn(300);
		$("#aside-slider-middle #3").fadeIn(300);
		$("#aside-slider-bottom #5").fadeIn(300);
		cycle();
	});
	
	function cycle(){
		var size = $("#aside-slider-top>img").length;
			
			// Top Picture Loop
		loop = setInterval(function(){
			$("#aside-slider-top>img").fadeOut(300);
			$("#aside-slider-top #" + nextPos).fadeIn(300);
				currPos = nextPos;
				nextPos = currPos + 1;
			
			if(nextPos > size){
				nextPos = 1;	
				currPos = 1;
			}
			
		},4000);
		
			// Middle Picture Loop
		mloop = setInterval(function(){
			$("#aside-slider-middle>img").delay(1000).fadeOut(300);
			$("#aside-slider-middle #" + mnextPos).fadeIn(300);
				mcurrPos = mnextPos;
				mnextPos = mcurrPos + 1;
			
			if(mnextPos > size + 2){
				mnextPos = 3;	
				mcurrPos = 3;
			}	
		}, 4000);
		
		// bottom Picture Loop
		bloop = setInterval(function(){
			$("#aside-slider-bottom>img").delay(2000).fadeOut(300);
			$("#aside-slider-bottom #" + bnextPos).fadeIn(300);
				bcurrPos = bnextPos;
				bnextPos = bcurrPos + 1;
			
			if(bnextPos > size + 4){
				bnextPos = 5;	
				bcurrPos = 5;
			}	
		}, 4000);
		
	}
	
})(jQuery);