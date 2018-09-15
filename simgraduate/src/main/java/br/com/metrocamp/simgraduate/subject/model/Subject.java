package br.com.metrocamp.simgraduate.subject.model;

import br.com.metrocamp.simgraduate.course.model.Course;
import br.com.metrocamp.simgraduate.topic.model.Topic;
import br.com.metrocamp.simgraduate.utils.base.model.BaseModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.List;

@Table(name = "subjects")
@Entity
@Data
public class Subject extends BaseModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  @NotNull(message = "Name must be informed")
  private String name;

  @ManyToMany(mappedBy = "subjects")
  @JsonIgnore
  private List<Course> courses;

  @Column
  private String observation;

  @OneToMany(mappedBy = "subject")
  @JsonIgnore
  private List<Topic> topics;

}
