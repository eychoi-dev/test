//package com.example.test.common;
//
//import java.util.Optional;
//
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class UserDetailServiceImpl implements UserDetailsService{
//	
//	private final UserRepository userRepository;
//	private final PasswordEncoder passwordEncoder;
//	
//	public UserDetailServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
//		this.userRepository = userRepository;
//		this.passwordEncoder = passwordEncoder;
//	}
//	
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		Optional<UserEntity> userOptional = userRepository.findByUsername(username);
//		UserEntity user = userOptional.orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
//		
//		return User.builder()
//				   .username(user.getUsername())
//				   .password(user.getPassword())
//				   .roles(user.getUserType())
//				   .build();
//	}
//}
