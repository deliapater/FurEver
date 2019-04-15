package com.codeclan.example.FurEver.repositories.owners;

import com.codeclan.example.FurEver.models.Owner;
import com.codeclan.example.FurEver.projections.EmbedOwners;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedOwners.class)
public interface OwnerRepository extends JpaRepository<Owner, Long>, OwnerRepositoryCustom {
}
