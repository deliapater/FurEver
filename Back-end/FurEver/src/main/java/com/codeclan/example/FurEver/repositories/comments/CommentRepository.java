package com.codeclan.example.FurEver.repositories.comments;

import com.codeclan.example.FurEver.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long>, CommentRepositoryCustom {
}
