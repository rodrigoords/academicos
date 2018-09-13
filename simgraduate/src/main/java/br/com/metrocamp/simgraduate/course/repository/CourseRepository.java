package br.com.metrocamp.simgraduate.course.repository;

import br.com.metrocamp.simgraduate.course.model.Course;
import br.com.metrocamp.simgraduate.utils.base.repository.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends BaseRepository<Course> {
}
