package br.com.metrocamp.simgraduate.subject.controller;

import br.com.metrocamp.simgraduate.subject.model.Subject;
import br.com.metrocamp.simgraduate.topic.model.Topic;
import br.com.metrocamp.simgraduate.utils.base.controller.BaseController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@ApiIgnore
@RestController
@RequestMapping("subjects")
public class SubjectController extends BaseController<Subject> {

  @GetMapping("{id}/topics")
  public List<Topic> getAllTopics(@PathVariable("id") Subject subject){
    return subject.getTopics();
  }
}
