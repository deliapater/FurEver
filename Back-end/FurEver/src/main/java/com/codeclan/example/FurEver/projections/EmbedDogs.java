
package com.codeclan.example.FurEver.projections;
        import com.codeclan.example.FurEver.models.Dog;
        import org.springframework.data.rest.core.config.Projection;
        import java.util.List;

@Projection(name = "embedDogs", types = Dog.class)
public interface EmbedDogs {
    long getId();
    String getName();
    List<Dog> getDogs();
}
