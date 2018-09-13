package br.com.metrocamp.simgraduate.subject.model;

import br.com.metrocamp.simgraduate.course.model.Course;
import br.com.metrocamp.simgraduate.topic.Topic;
import br.com.metrocamp.simgraduate.utils.base.model.BaseModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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

  @ManyToMany
  @JoinTable(
          name = "subjects_topics",
          joinColumns = { @JoinColumn(name = "id_topics", referencedColumnName = "id") },
          inverseJoinColumns = { @JoinColumn(name = "id_subjects", referencedColumnName = "id") }
  )
  @JsonIgnore
  private List<Topic> topics;

}
