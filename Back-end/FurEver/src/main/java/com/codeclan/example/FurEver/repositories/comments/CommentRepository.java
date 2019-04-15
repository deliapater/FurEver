package com.codeclan.example.FurEver.repositories.comments;

import com.codeclan.example.FurEver.models.Comment;
import com.codeclan.example.FurEver.projections.EmbedDogs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedDogs.class)
public interface CommentRepository extends JpaRepository<Comment, Long>, CommentRepositoryCustom {
}
