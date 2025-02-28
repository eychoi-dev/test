package com.example.test.datasource;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@Configuration
@MapperScan("com.example.*")
public class MybatisConfig {
	
	@Bean
	public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
//		SqlSessionFactory : 마이바티스에서 핵심 역할을 하는 객체 / 데이터베이스 연결 및 SQL 실행 관리
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
		sqlSessionFactoryBean.setDataSource(dataSource);
		sqlSessionFactoryBean.setConfigLocation(new ClassPathResource("/mybatis-config.xml"));
		
//		매퍼 xml 각각 지정
//		sqlSessionFactoryBean.setMapperLocations(new ClassPathResource("/mapper/main/index.xml"));
		
//		여러 개의 xml 매퍼 동적 지정
		PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		Resource[] resources = resolver.getResources("classpath:mapper/**/*.xml");
		sqlSessionFactoryBean.setMapperLocations(resources);
		
		return sqlSessionFactoryBean.getObject();
	}
	
	@Bean
	public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) {
//		SqlSession 인터페이스 구현체 / SQL 실행 및 트랜잭션 관리 담당
//		스프링부트와 마이바티스 연동시 SqlSessionTemplate 빈 등록해야 함
		return new SqlSessionTemplate(sqlSessionFactory);
	}
}
