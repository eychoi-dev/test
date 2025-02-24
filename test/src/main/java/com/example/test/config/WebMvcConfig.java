package com.example.test.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer{
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/js/**")
				.addResourceLocations("classpath:/static/js/")
//				.setCacheControl(CacheControl.noStore())//캐시 저장하지 않도록 설정
				.setCachePeriod(0);//캐시 비활성화 : 브라우저가 항상 최신 js 파일을 요청
	}
}
