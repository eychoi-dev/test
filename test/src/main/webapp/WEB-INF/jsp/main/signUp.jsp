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
</head>
<body>
<div class="pagebody">
	<div class="pagebox">
		<form id="pageForm">
			<div class="div-container">
			 	<div class="div-row div-row-first">
			 		<label for="loginId">아이디</label>
					<input type="text" id="loginId" name="loginId" placeholder="아이디를 입력해주세요">
					<button type="button" class="btn-normal">중복체크</button>
			 	</div>				
				<div class="div-row">
					<label for="loginPw">비밀번호</label>
					<input type="text" id="loginPw" name="loginPw" placeholder="비밀번호를 입력해주세요">
				</div>
				<div class="div-row">
					<label for="loginChkPw">비밀번호 확인</label>
					<input type="text" id="loginChkPw" name="loginChkPw" placeholder="비밀번호를 입력해주세요">
					<!-- <span id="loginChkPw_txt">비밀번호 일치 or 불일치</span> -->
					<!-- 비밀번호 일치 여부 문구 -->
				</div>
				<div class="div-row">
					<label for="name">이름</label>
					<input type="text" id="name" name="name" placeholder="이름을 입력해주세요">
				</div>
				<div class="div-row">
					<label for="email">EMAIL</label>
					<input type="text" id="email" name="email" placeholder="이메일을 입력해주세요">
				</div>
				<div class="div-button">
					<button type="button" id="onSignUp" class="btn-normal">회원가입</button>
				</div>
			</div>
		</form>
	</div>	
</div>
</body>
</html>