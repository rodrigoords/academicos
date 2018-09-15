package br.com.metrocamp.simgraduate.topic.model;

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
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Table(name = "topics")
@Entity
@Data
public class Topic extends BaseModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String name;

  @Column
  private String description;

  @ManyToOne
  @JoinColumn(name = "id_subject")
  @NotNull(message = "Subject must to be informed")
  @JsonIgnore
  private Subject subject;
}
