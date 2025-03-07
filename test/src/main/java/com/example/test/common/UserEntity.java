//package com.example.test.common;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//import lombok.Getter;
//import lombok.Setter;
//
//@Entity
//@Getter
//@Setter
//@Table(name ="USER_TBL")
//public class UserEntity {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private String ID;
//	
//	@Column(nullable = false)
//	private String NAME;
//	
//	@Column(nullable = false)
//	private String PASSWORD;
//	
//	@Column(nullable = false)
//	private String USER_TYPE;
//	
//	public UserEntity() {}
//	
//	public UserEntity(String NAME, String PASSWORD, String USER_TYPE) {
//		this.NAME = NAME;
//		this.PASSWORD = PASSWORD;
//		this.USER_TYPE = USER_TYPE;
//	}
//
//	public String getUsername() {
//		return NAME;
//	}
//	public String getPassword() {
//		return PASSWORD;
//	}
//	public String getUserType() {
//		return USER_TYPE;
//	}
//
//	
//}
