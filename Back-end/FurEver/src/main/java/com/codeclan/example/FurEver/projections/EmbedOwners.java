package com.codeclan.example.FurEver.projections;

        import com.codeclan.example.FurEver.models.Owner;
        import org.springframework.data.rest.core.config.Projection;
        import java.util.List;

@Projection(name = "embedOwners", types = Owner.class)
public interface EmbedOwners {
    long getId();
    String getName();
    List<Owner> getOwners();
}
