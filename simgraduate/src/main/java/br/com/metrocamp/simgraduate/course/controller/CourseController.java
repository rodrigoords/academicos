package br.com.metrocamp.simgraduate.course.controller;

import br.com.metrocamp.simgraduate.course.model.Course;
import br.com.metrocamp.simgraduate.utils.base.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

@ApiIgnore
@RestController
@RequestMapping("courses")
public class CourseController extends BaseController<Course> {
}
