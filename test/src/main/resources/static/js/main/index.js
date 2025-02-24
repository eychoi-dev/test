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
		gfn_ajax({
			url : "/login",
			data : loginData,
			callBack : function(response) {
				console.log("response : ", response);
			}
		});
	});
	
	//회원가입
	$("#signUp").click(function() {
		console.log("회원가입");
	});
	
	//비밀번호 찾기
	$("#forgatPw").click(function() {
		console.log("비밀번호 찾기");
	});
});