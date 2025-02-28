<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- 공통 js/css -->
<link rel="stylesheet" href="css/test-style.css" />
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javascript" src="js/serialize-object.js"></script>
<script type="text/javascript" src="js/common.js"></script>
<!-- 페이지 전용 js -->
<script type="text/javascript" src="js/main/index.js"></script>
</head>
<body>
<div class="pagebody">
	<div class="loginbox">
		<form id="loginForm">
			<fieldset><!-- fieldset : form 요소를 그룹으로 묶는 태그 -->
				<legend>로그인 구역</legend><!-- legend : 그룹으로 묶은 구역의 제목 태그 -->
				<label for="loginId">아이디</label>
				<input type="text" id="loginId" name="loginId" placeholder="아이디를 입력해주세요">
				<label for="loginPw">비밀번호</label>
				<input type="password" id="loginPw" name="loginPw" placeholder="비밀번호를 입력해주세요">
				
				<div class="optbox">
					<div class="opt1">
						<label class="checkbox_label">
							<input type="checkbox" name="checkbox" id="rememberMe" name="rememberMe">
							<span class="checkbox_icon"></span>
							<span class="checkbox_text">Remember Me</span>
						</label>
					</div>
					<div class="opt2">
						<ul>
							<li>
								<button id="signUp" type="button" class="btn-txt">Sign up</button>
							</li>
							<li>
								<button id="forgatPw" type="button" class="btn-txt">Forgot Password</button>
							</li>
						</ul>
					</div>
				</div>
				<button id="login" type="button" class="btn-login">로그인</button>
			</fieldset>
		</form>
	</div>	
</div>
</body>
</html>