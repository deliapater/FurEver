package com.codeclan.example.FurEver.repositories.messages;

import com.codeclan.example.FurEver.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long>, MessageRepositoryCustom {
}
