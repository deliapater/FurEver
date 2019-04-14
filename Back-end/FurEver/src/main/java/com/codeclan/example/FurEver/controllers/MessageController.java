package com.codeclan.example.FurEver.controllers;

import com.codeclan.example.FurEver.models.Dog;
import com.codeclan.example.FurEver.models.Message;
import com.codeclan.example.FurEver.models.Owner;
import com.codeclan.example.FurEver.repositories.dogs.DogRepository;
import com.codeclan.example.FurEver.repositories.messages.MessageRepository;
import com.codeclan.example.FurEver.repositories.owners.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messages")
public class MessageController {
    @Autowired
    MessageRepository messageRepository;

    @Autowired
    OwnerRepository ownerRepository;

    @PutMapping(value = "{id}/owner/{ownerId}")
    public void updatedMessage(@PathVariable long id, @PathVariable long dogId) {
        Message message = messageRepository.getOne(id);
        Owner owner = ownerRepository.getOne(dogId);
        owner.addOwner(owner);
        messageRepository.save(message);
    }
}
