package br.com.metrocamp.simgraduate.course.controller;

import br.com.metrocamp.simgraduate.course.model.Course;
import br.com.metrocamp.simgraduate.course.service.CourseService;
import br.com.metrocamp.simgraduate.subject.model.Subject;
import br.com.metrocamp.simgraduate.utils.base.controller.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@ApiIgnore
@RestController
@RequestMapping("/courses")
public class CourseController extends BaseController<Course> {

  private CourseService courseService;

  @Autowired
  public CourseController(CourseService courseService) {
    this.courseService = courseService;
  }

  @PostMapping("{id}/subjects")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void createSubjectLinks(@PathVariable("id") Course course, @RequestBody List<Subject> subjects){
    this.courseService.createSubjectLinks(course, subjects);
  }

  @GetMapping("{id}/subjects")
  @ResponseStatus(HttpStatus.OK)
  public List<Subject> getLinkdSubjects(@PathVariable("id") Course course) {
    return course.getSubjects();
  }
}
