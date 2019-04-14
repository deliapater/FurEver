
package com.codeclan.example.FurEver.projections;
import com.codeclan.example.FurEver.models.Comment;
import org.springframework.data.rest.core.config.Projection;
import java.util.List;

@Projection(name = "embedComments", types = Comment.class)
public interface EmbedComments {
    long getId();
    String getName();
    List<Comment> getComments();
}
