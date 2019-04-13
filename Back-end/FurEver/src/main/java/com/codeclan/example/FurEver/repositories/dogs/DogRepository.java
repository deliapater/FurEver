package com.codeclan.example.FurEver.repositories.dogs;

import com.codeclan.example.FurEver.models.Dog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DogRepository extends JpaRepository<Dog, Long> {
}
