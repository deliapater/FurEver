package com.codeclan.example.FurEver.controllers;

import com.codeclan.example.FurEver.models.Comment;
import com.codeclan.example.FurEver.models.Dog;
import com.codeclan.example.FurEver.models.Owner;
import com.codeclan.example.FurEver.repositories.comments.CommentRepository;
import com.codeclan.example.FurEver.repositories.dogs.DogRepository;
import com.codeclan.example.FurEver.repositories.owners.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    DogRepository dogRepository;

    @PutMapping(value = "{id}/dog/{dogId}")
    public void updatedComment(@PathVariable long id, @PathVariable long dogId) {
        Comment comment = commentRepository.getOne(id);
        Dog dog = dogRepository.getOne(dogId);
        commentRepository.save(comment);
    }
}
