package com.codeclan.example.FurEver.repositories.owners;

import com.codeclan.example.FurEver.models.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerRepository extends JpaRepository<Owner, Long>, OwnerRepositoryCustom {
}
