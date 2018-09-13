package br.com.metrocamp.simgraduate.course.model;


import br.com.metrocamp.simgraduate.subject.model.Subject;
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

@Table(name = "courses")
@Entity
@Data
public class Course extends BaseModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  @NotNull(message = "Name must be informed")
  private String name;

  @ManyToMany
  @JoinTable(
          name = "courses_subjects",
          joinColumns = { @JoinColumn(name = "id_subjects", referencedColumnName = "id") },
          inverseJoinColumns = { @JoinColumn(name = "id_courses", referencedColumnName = "id") }
  )
  @JsonIgnore
  private List<Subject> subjects;

}
