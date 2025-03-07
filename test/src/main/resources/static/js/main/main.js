/*
	main js 파일
	- Logout
*/
$(function() {
	$("#logout").click(function() {
		$.ajax({
	        url : '/logout',
	        type : "POST",
	        contentType:"application/json",
	        timeout: 10000,
	        success : function(result, status, xhr){
				console.log("result : ", result);
				window.location.href = "/";
			},
	        error : function(request, status, error){
	            console.log("error : ", error);
	        }
		});
	});
});