package com.codeclan.example.FurEver;

import com.codeclan.example.FurEver.models.BreedType;
import com.codeclan.example.FurEver.models.Dog;
import com.codeclan.example.FurEver.models.Message;
import com.codeclan.example.FurEver.models.Owner;
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
	public void canCreateOwnerAndDogAndAddToDatabase(){
		assertTrue(dogRepository.count() == 0);
		assertTrue(ownerRepository.count() == 0);

		Owner owner1 = new Owner("Kim Clark", "kim@home.com", "Glasgow");
		ownerRepository.save(owner1);

		Dog dog1 = new Dog("Kloe", BreedType.AfghanHound, "Male", 3, "picUrl", "I am Kloe, I am a three year old Afghan Hound from Afghanistan", owner1);
		dogRepository.save(dog1);

		Dog dog2 = new Dog("Fido", BreedType.AlaskanKleeKai, "Female", 5, "picUrl", "I am Fido, I am a five year old Alaskan KleeKai from Alaska", owner1);
		dogRepository.save(dog2);

		Message message1 = new Message("Hello.  This is a test message", owner1);
		messageRepository.save(message1);
//
//		assertTrue(dogRepository.count() == 2);
//		assertTrue(ownerRepository.count() == 1);

	}

}



