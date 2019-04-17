package com.codeclan.example.FurEver;

import com.codeclan.example.FurEver.models.*;
import com.codeclan.example.FurEver.repositories.comments.CommentRepository;
import com.codeclan.example.FurEver.repositories.dogs.DogRepository;
import com.codeclan.example.FurEver.repositories.messages.MessageRepository;
import com.codeclan.example.FurEver.repositories.owners.OwnerRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FurEverApplicationTests {

    @Autowired
    OwnerRepository ownerRepository;

    @Autowired
    DogRepository dogRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    MessageRepository messageRepository;

    @Test
    public void contextLoads() {
    }

    @Test
    public void canCreateEverythingAndAddToRepository() {
        assertTrue(messageRepository.count() == 0);
        assertTrue(dogRepository.count() == 0);
        assertTrue(ownerRepository.count() == 0);
        assertTrue(commentRepository.count() == 0);

        Owner owner1 = new Owner("Kim Clark", "kim@home.com", "Glasgow");
        ownerRepository.save(owner1);

        Owner owner2 = new Owner("Delia Paterina", "delia@home.com", "Glasgow");
        ownerRepository.save(owner2);

        Dog dog1 = new Dog("Fido", "Affenpinscher", "Male", 4, "picUrl", "I am Fido, I am a four year old Affenpinscher from Austria", owner1);
        dogRepository.save(dog1);
        Dog dog2 = new Dog("Wido", "AlaskanKleeKai", "Female", 5, "picUrl", "I am Wido, I am a five year old Alaskan KleeKai from Alaska", owner1);
        dogRepository.save(dog2);
        Dog dog3 = new Dog("Kloe", "AfghanHound", "Female", 2, "picUrl", "I am Kloe, I am a two year old Afghan Hound from Afghanistan", owner2);
        dogRepository.save(dog3);

        Message message1 = new Message("Hello", "Hello. This is test message one.", owner1);
        messageRepository.save(message1);

        Message message2 = new Message("Hellooo", "Hello. This is test message two.", owner1);
        messageRepository.save(message2);

        Message message3 = new Message("Hello", "Hello. This is test message three.", owner1);
        messageRepository.save(message3);

        Message message4 = new Message("Hellooo", "Hello. This is test message four.", owner2);
        messageRepository.save(message4);

        Comment comment1 = new Comment("This is a test comment, lovely dog", dog3);
        commentRepository.save(comment1);

        assertTrue(commentRepository.count() == 1);
        assertTrue(messageRepository.count() == 2);
        assertTrue(ownerRepository.count() == 2);
        assertTrue(dogRepository.count() == 3);
    }

}



