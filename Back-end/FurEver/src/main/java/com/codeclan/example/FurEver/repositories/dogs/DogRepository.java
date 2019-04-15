package com.codeclan.example.FurEver.repositories.dogs;

import com.codeclan.example.FurEver.models.Dog;
import com.codeclan.example.FurEver.projections.EmbedOwners;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedOwners.class)
public interface DogRepository extends JpaRepository<Dog, Long> {
}
