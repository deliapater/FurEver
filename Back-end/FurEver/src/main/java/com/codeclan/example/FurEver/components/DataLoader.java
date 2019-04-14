package com.codeclan.example.FurEver.components;

import com.codeclan.example.FurEver.models.BreedType;
import com.codeclan.example.FurEver.models.Dog;
import com.codeclan.example.FurEver.models.Message;
import com.codeclan.example.FurEver.models.Owner;
import com.codeclan.example.FurEver.repositories.comments.CommentRepository;
import com.codeclan.example.FurEver.repositories.dogs.DogRepository;
import com.codeclan.example.FurEver.repositories.messages.MessageRepository;
import com.codeclan.example.FurEver.repositories.owners.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    OwnerRepository ownerRepository;

    @Autowired
    DogRepository dogRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    MessageRepository messageRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Owner owner1 = new Owner("Kim Clark", "kim@home.com", "Glasgow");
        ownerRepository.save(owner1);

        Owner owner2 = new Owner("Delia Paterina", "delia@home.com", "Glasgow");
        ownerRepository.save(owner2);

        Dog dog1 = new Dog("Fido", BreedType.Affenpinscher, "Male", 4, "picUrl", "I am Fido, I am a four year old Affenpinscher from Austria", owner1);
        dogRepository.save(dog1);
        Dog dog2 = new Dog("Wido", BreedType.AlaskanKleeKai, "Female", 5, "picUrl", "I am Wido, I am a five year old Alaskan KleeKai from Alaska", owner1);
        dogRepository.save(dog2);
        Dog dog3 = new Dog("Kloe", BreedType.AfghanHound, "Female", 2, "picUrl", "I am Kloe, I am a two year old Afghan Hound from Afghanistan", owner2);
        dogRepository.save(dog3);

        Message message1 = new Message("Hello. This is a test message", owner1);
        messageRepository.save(message1);

        Message message2 = new Message("Hello. This is a test message", owner2);
        messageRepository.save(message2);
    }

}
