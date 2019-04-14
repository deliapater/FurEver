package com.codeclan.example.FurEver.repositories.comments;

import com.codeclan.example.FurEver.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepositoryCustom{

    List<Comment> allDogs();
}
