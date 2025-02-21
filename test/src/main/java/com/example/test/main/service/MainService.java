package com.example.test.main.service;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;

@Service
public class MainService {
	
	private final SqlSession sqlSession;
	
	public MainService(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
		
	public Boolean login(Map<String, Object> paramMap) {	
		String result = sqlSession.selectOne("indexService.selectUserList", paramMap);
		
		if(result.equals("1")) { //로그인 성공
			return true;
		}else { //로그인 실패
			return false;
		}
	}

}
