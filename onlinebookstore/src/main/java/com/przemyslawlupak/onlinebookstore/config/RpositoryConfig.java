package com.przemyslawlupak.onlinebookstore.config;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;


@Configuration
public class RpositoryConfig implements RepositoryRestConfigurer {
	@Autowired
	private EntityManager entityManager;
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream()//get all Etities
				.map(Type::getJavaType).//by stearm get them java type
				toArray(Class[]::new)); //and converted to array
				config.getCorsRegistry()
				.addMapping("/**")
				.allowedOrigins("http://localhost:4200");
	
	}	
}
