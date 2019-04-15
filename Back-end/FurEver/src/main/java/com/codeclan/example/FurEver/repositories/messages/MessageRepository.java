package com.codeclan.example.FurEver.repositories.messages;

import com.codeclan.example.FurEver.models.Message;
import com.codeclan.example.FurEver.projections.EmbedMessages;
import com.codeclan.example.FurEver.projections.EmbedOwners;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedMessages.class)
public interface MessageRepository extends JpaRepository<Message, Long>, MessageRepositoryCustom {
}
