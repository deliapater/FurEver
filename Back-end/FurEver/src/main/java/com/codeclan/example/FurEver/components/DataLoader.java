package com.codeclan.example.FurEver.components;

import com.codeclan.example.FurEver.models.*;
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
        Owner owner2 = new Owner("Delia Paternina", "delia@home.com", "Glasgow");
        ownerRepository.save(owner2);
        Owner owner3 = new Owner("Simon McBride", "simon@codeclan.com", "Glasgow");
        ownerRepository.save(owner3);
        Owner owner4 = new Owner("Colin Bell", "colin@codeclan.com", "Edinburgh");
        ownerRepository.save(owner4);
        Owner owner5 = new Owner("Steve Meiklejohn", "steve@codeclan.com", "Falkirk");
        ownerRepository.save(owner5);
        Owner owner6 = new Owner("Heather Malloch", "heather@codeclan.com", "Stirling");
        ownerRepository.save(owner6);
        Owner owner7 = new Owner("Louise Reid", "Louise@codeclan.com", "Edinburgh");
        ownerRepository.save(owner7);

        Dog dog1 = new Dog("Fido", BreedType.Affenpinscher, "Male", 4, "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/30174107/Affenpinscher-copy.jpg", "I am Fido, I am a four year old Affenpinscher from Austria", owner1);
        dogRepository.save(dog1);
        Dog dog2 = new Dog("Wido", BreedType.AlaskanKleeKai, "Female", 5, "https://embarkvet.com/wp-content/uploads/2018/08/alaskan-klee-kai-5.jpg", "I am Wido, I am a five year old Alaskan KleeKai from Alaska", owner1);
        dogRepository.save(dog2);
        Dog dog3 = new Dog("Kloe", BreedType.AfghanHound, "Female", 2, "https://vetstreet.brightspotcdn.com/dims4/default/869e315/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Ff3%2F88ed60a3ff11e087a80050568d634f%2Ffile%2FAfghan-Hound-3-645mk-062311.jpg", "I am Kloe, I am a two year old Afghan Hound from Afghanistan", owner3);
        dogRepository.save(dog3);
        Dog dog4 = new Dog("Napo", BreedType.Daschund, "Male", 12, "https://dachshund-central.com/wp-content/uploads/2018/02/dachshund-dog-4.jpg", "I am looking for true love", owner2);
        dogRepository.save(dog4);
        Dog dog5 = new Dog("Woofer", BreedType.Ladrador, "Male", 3, "https://timedotcom.files.wordpress.com/2017/03/labrador.jpg?quality=85", "Woof", owner3);
        dogRepository.save(dog5);
        Dog dog6 = new Dog("Susy", BreedType.Chihuaha, "Female", 5, "https://www.dogbreedinfo.com/images15/ChihuahuaDaisyphlox0416.JPG", "I am beautiful Chihuahua looking for woof", owner4);
        dogRepository.save(dog6);
        Dog dog7 = new Dog("Hachiko", BreedType.Akita, "Male", 8, "https://en.mthai.com/app/uploads/2015/04/Cr.-imgarcade.jpg", "Hiya", owner5);
        dogRepository.save(dog7);
        Dog dog8 = new Dog("Ozzy", BreedType.AmericanBulldog, "Male", 1, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/American_bulldog.jpg/220px-American_bulldog.jpg", "Looking to make some friends!", owner6);
        dogRepository.save(dog8);
        Dog dog9 = new Dog("Scooby", BreedType.BorderTerrier, "Male", 9, "https://cdn1-www.dogtime.com/assets/uploads/gallery/border-terrier-dog-breed-pictures/8-face.jpg", "Hi all!", owner6);
        dogRepository.save(dog9);
        Dog dog10 = new Dog("Lucky", BreedType.Chihuaha, "Male", 3, "https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/dog-1878459_1920-1-1024x682.jpg", "Hello! I am a nice little gentleman", owner6);
        dogRepository.save(dog10);


        Message message1 = new Message("Hello","Hello. This is a test message", owner1);
        messageRepository.save(message1);
        Message message2 = new Message("Hellooo","Hello. This is a test message", owner2);
        messageRepository.save(message2);

        Comment comment1 = new Comment("This is a test comment 1, lovely dog", dog3);
        commentRepository.save(comment1);
        Comment comment2 = new Comment("This is a test comment 2, lovely dog", dog4);
        commentRepository.save(comment2);
        Comment comment3 = new Comment("This is a test comment 3, lovely dog", dog4);
        commentRepository.save(comment3);
    }

}
