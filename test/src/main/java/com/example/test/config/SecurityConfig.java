package com.example.test.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import jakarta.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
			
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
//		HttpSecurity : Spring Security 설정 담당
//		formLogin : httpSecurity의 formlogin 사용
		httpSecurity.csrf(csrf -> csrf.disable()) //CSRF 보호 비활성화(테스트용) 해제 및 토큰 없을 경우 403에러 발생
					.formLogin(login -> login.loginPage("/main/index") //로그인 페이지
				                             .defaultSuccessUrl("/main/main") //로그인 성공시 이동할 페이지
				                             .failureUrl("/main/loginError") //로그인 실패시 이동할 페이지
				                             .usernameParameter("loginId") //로그인id 파라미터 명
				                             .passwordParameter("loginPw")) //로그인 비밀번호 파라미터 명
//				                             .permitAll())//인증받지 않아도 접근 가능
//		rememeberMe : 로그인시 아이디 저장 기능
					.rememberMe(remember -> remember.key("remember") //쿠키 암호화 키
													.rememberMeParameter("rememberMe") //remember me 파라미터 명
													.tokenValiditySeconds(60 * 60 * 24 * 7)//유지 기간 7일
													.userDetailsService(userDetailsService()))//사용자 계정 정보 조회 rememberMe 기능이용시 필수 적용
					.logout(logout -> logout.logoutUrl("/logout") 
//											.logoutSuccessUrl("/")
//											.logoutRequestMatcher(new AntPathRequestMatcher("/logout", "GET"))
											.logoutSuccessHandler(logoutSuccessHandler())
											.invalidateHttpSession(true)
											.deleteCookies("JSESSIONID", "remember-me"))
		;
		return httpSecurity.build();
	}
	
////	logoutConfigure
//	private void logoutConfigure(HttpSecurity httpSecurity) throws Exception {
//		httpSecurity.logout(logout -> logout.logoutUrl("/logout")
//					.logoutSuccessUrl("/main/index")
//					.deleteCookies("JSESSIONID", "remember-me")
////					.addLogoutHandler(logoutHandler())
//					.logoutSuccessHandler(logoutSuccessHandler()));
//	}
	
//	remember-me 기능 사용자 정보 조회
	@Bean
	public UserDetailsService userDetailsService() {
		UserDetails userDetails = User.withDefaultPasswordEncoder()
									  .username("loginId")
									  .password("loginPw")
//									  .roles("")
									  .build();
		return new InMemoryUserDetailsManager(userDetails);
	}
	
//	logout handler
//	private LogoutHandler logoutHandler() { return null; }
	@Bean
	public LogoutSuccessHandler logoutSuccessHandler() { 
		System.out.println("============== logout success handler");
		return (request, response, authentication) -> {
			response.setStatus(HttpServletResponse.SC_OK);
			response.setContentType("application/json");
//			response.getWriter().write("'{\'message\': \'로그아웃 성공\'}");
			response.getWriter().flush();
		};
	}
}
