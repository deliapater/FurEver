package com.codeclan.example.FurEver.controllers;

import com.codeclan.example.FurEver.models.Dog;
import com.codeclan.example.FurEver.models.Owner;
import com.codeclan.example.FurEver.repositories.dogs.DogRepository;
import com.codeclan.example.FurEver.repositories.owners.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dogs")
public class DogController {

    @Autowired
    OwnerRepository ownerRepository;

    @Autowired
    DogRepository dogRepository;

    @PutMapping(value = "{id}/owner/{ownerId}")
    public void updatedDog(@PathVariable long id, @PathVariable long dogId) {
        Owner owner = ownerRepository.getOne(id);
        Dog dog = dogRepository.getOne(dogId);
        owner.addOwner(owner);
        dogRepository.save(dog);
    }
}
