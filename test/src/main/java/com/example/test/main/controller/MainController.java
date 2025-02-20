package com.example.test.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {
	
	@GetMapping("/")
	public String goMain() {
		return "main/index";
	}
	
	@RequestMapping("/login")
	public ModelAndView Login() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("main/main");
		return mv;
	}
}
