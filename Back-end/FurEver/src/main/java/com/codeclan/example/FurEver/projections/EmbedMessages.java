package com.codeclan.example.FurEver.projections;
import com.codeclan.example.FurEver.models.Message;
import com.codeclan.example.FurEver.models.Owner;
import org.springframework.data.rest.core.config.Projection;
import java.util.List;

@Projection(name = "embedMessages", types = Message.class)
public interface EmbedMessages {
    long getId();
    String getName();
    List<Message> getTxtMessage();
    Owner getOwner();
}
