package br.com.metrocamp.simgraduate.topic;

import br.com.metrocamp.simgraduate.subject.model.Subject;
import br.com.metrocamp.simgraduate.utils.base.model.BaseModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;

@Table(name = "topics")
@Entity
@Data
public class Topic extends BaseModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String name;

  @ManyToMany(mappedBy = "topics")
  @JsonIgnore
  private List<Subject> subjects;
}
