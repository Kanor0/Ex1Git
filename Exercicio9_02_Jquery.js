$(document).ready(function(){
	$("#link_p").click(function() {
		$(".port").css("background-color","red");
	})

	$("#p_y").click(function(){
	 	$(this).prev().css("background-color","green");
	 	$(this).css("background-color","yellow");
 	});
 	$("#link_b").click(function(){
	 	$("#parent_b").children().css("background-color","black");
	 	$(".b").last().css("background-color","red");
 	});
 	$("#b_b").click(function(){
	 	$(this).next().css("background-color","yellow");

	 });
	
	$("#parent_f").click(function(){
	 	$(this).children().not("#white").css("background-color","blue");
	 	$(this).children().last("#white").css("background-color","red");

	 });
	$("#link_f").click(function(){
		$("#parent_f").children().not("#white").css("background-color","white");
	 	$("#parent_f").children().last("#white").css("background-color","white");

	 });
 	

});
