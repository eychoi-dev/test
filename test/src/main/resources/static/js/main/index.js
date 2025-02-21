/**
 * 로그인 화면 js
 * - Sign up
 * - Forgot Password
 * - Login
 * Remember Me 여부 확인 및 각 화면이동
 */
$(function() {
	//로그인 버튼 클릭
	$("#login").click(function() {
		var loginData = $("#loginForm").serializeObject();
		$.ajax({
	        url : '/login',
	        type : 'POST',
	        dataType : "json",
	        contentType:"application/json",
	        data : JSON.stringify(loginData),
	        timeout: 10000,
	        beforeSend:function(){
	            $('#loading').removeClass('display-none');
	        },
	        success : function(data){
				console.log("수정");
				window.location.href = data.redirectUrl;
			},
	        error : function(request, status, error){
	            var err=JSON.parse(request.responseText);
	            console.log(err.resData[0].errorMsg);
	            $('#loading').addClass('display-none');
	        },
	        complete:function(){
	            $('#loading').addClass('display-none');
	        }
		});
	});
});