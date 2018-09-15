package br.com.metrocamp.simgraduate.course.service;

import br.com.metrocamp.simgraduate.course.model.Course;
import br.com.metrocamp.simgraduate.course.repository.CourseRepository;
import br.com.metrocamp.simgraduate.subject.model.Subject;
import br.com.metrocamp.simgraduate.utils.base.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService extends BaseService<Course> {

  private CourseRepository courseRepository;

  @Autowired
  public CourseService(CourseRepository courseRepository) {
    this.courseRepository = courseRepository;
  }

  public void createSubjectLinks(Course course, List<Subject> subjects) {
    subjects.forEach(course::addSubject);
    this.courseRepository.save(course);
  }

}
