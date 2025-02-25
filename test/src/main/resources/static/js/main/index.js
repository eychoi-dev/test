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
		var options = {
			url : "/login",
			data : loginData
		};
		
		gfn_ajax(options, 
			/* 통신 성공 콜백 */
			function(response) {
				if(response.status == "success") {
					window.location.href = response.result.redirectUrl;
				}
			},
			/* 통신 실패 콜백 */
			function(error) {
				console.log("ajax status : ", error.status, ", request : ", error.request, ", error : ", error.error);
			}
		);
	});
	
	//회원가입
	$("#signUp").click(function() {
		console.log("회원가입");
		gfn_ajax({url : "/signUp", data : {}}
			, function(response) {
				console.log("response : ", response);
			}
		)
	});
	
	//비밀번호 찾기
	$("#forgatPw").click(function() {
		console.log("비밀번호 찾기");
	});
});