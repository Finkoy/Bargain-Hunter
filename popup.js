$(function(){
	$("#search_button").click(function()
	{
		var input = $("#search_field").val();
		if(input != "")
		{
			$("#product_label").text("Please wait, your request is being processed...");
			$("#search_field").detach();
			$("#search_button").detach();
		}
		else
		{
			$("#product_label").text("Cannot search with empty text box, please try again.");
		}
	});
});
