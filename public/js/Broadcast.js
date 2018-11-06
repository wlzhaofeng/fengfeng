$(document).ready(function(){

	$(".index_focus").hover(function(){
		$(this).find(".index_focus_pre,.index_focus_next").stop(true, true).fadeTo("show", 1)
	},function(){
		$(this).find(".index_focus_pre,.index_focus_next").fadeOut()
	});
	
	$(".index_focus").slide({
		titCell: ".slide_nav a ",
		mainCell: ".bd ul",
		delayTime: 500,
		interTime: 3500,
		prevCell:".index_focus_pre",
		nextCell:".index_focus_next",
		effect: "fold",
		autoPlay: true,
		trigger: "click",
		
	});

});