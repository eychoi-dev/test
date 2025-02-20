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
		$.ajax({
	        url : '/login',
	        type : 'GET',
	        dataType : "json",
	        contentType:"application/json",
	        data : { name : "테스트" },
	        timeout: 10000,
	        beforeSend:function(){
	            $('#loading').removeClass('display-none');
	        },
	        success : function(data){
				console.log("success");
	            console.log(data);
	        },
	        error : function(request, status, error){
	            alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	            var err=JSON.parse(request.responseText);

	            alert(err.resData[0].errorMsg);
	                
	            $('#loading').addClass('display-none');
	        },
	        complete:function(){
	            $('#loading').addClass('display-none');
	        }
		});
	});
});