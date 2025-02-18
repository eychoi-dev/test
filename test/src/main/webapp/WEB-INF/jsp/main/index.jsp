<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="test-style.css" />
</head>
<body>
<div class="pagebody">
	<div class="loginbox">
		<form action="#">
			<fieldset><!-- fieldset : form 요소를 그룹으로 묶는 태그 -->
				<legend>로그인 구역</legend><!-- legend : 그룹으로 묶은 구역의 제목 태그 -->
				<label for="loginId">아이디</label>
				<input type="text" id="loginId" placeholder="아이디를 입력해주세요">
				<label for="loginPw">비밀번호</label>
				<input type="password" id="loginPw" placeholder="비밀번호를 입력해주세요">
				
				<div class="optbox">
					<div class="opt1">
						<label class="checkbox_label">
							<input type="checkbox">
							<span class="checkbox_icon"></span>
							<span class="checkbox_text">Remember Me</span>
						</label>
					</div>
					<div class="opt2">
						<ul>
							<li><a href="#">Sign up</a></li>
							<li><a href="#">Forgot Password</a></li>
						</ul>
					</div>
				</div>
				<button type="submit">로그인</button>
			</fieldset>
		</form>
	</div>	
</div>
</body>
</html>