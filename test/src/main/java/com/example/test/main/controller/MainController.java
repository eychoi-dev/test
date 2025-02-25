package com.example.test.main.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.example.test.main.service.MainService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class MainController {
	
	@Autowired
	private MainService mainService;
	
	@GetMapping("/")
	public String goMain() {
		return "main/index";
	}
	
//	로그인
	@PostMapping("/login")
	@ResponseBody
	public Map<String, String> login(@RequestBody Map<String, Object> paramMap) {
		Map<String, String> response = new HashMap<>();
		Boolean result = mainService.login(paramMap);
		
		if(result) {
			response.put("redirectUrl", "/home");
		}else {
			response.put("redirectUrl", "/loginError");
		}
		return response;
	}
	
//	로그인 성공
	@RequestMapping("/home")
	public String successPage() {
		return "main/main";
	}

//  로그인 실패
	@RequestMapping("/loginError")
	public String failPage() {
		return "main/loginError";
	}
	
//	회원가입
	@PostMapping("/signUp")
	@ResponseBody
	public ModelAndView signUp(HttpServletRequest request, HttpServletResponse response) {
		System.out.println("signUp controller22");
		ModelAndView mav = new ModelAndView();
		mav.setViewName("main/signUp");
		return mav;
	}
	
}
