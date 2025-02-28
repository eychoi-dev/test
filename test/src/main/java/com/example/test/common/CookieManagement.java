package com.example.test.common;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

public class CookieManagement {
	
	public void successfulAuthentication(HttpServletResponse response, String jwtToken) {
		Cookie cookie = new Cookie("Authorization", jwtToken);
		cookie.setHttpOnly(true);
		cookie.setSecure(true);
		cookie.setPath("/");
		cookie.setMaxAge(60 * 60 * 24 * 7);
		response.addCookie(cookie);
	}
	
}
