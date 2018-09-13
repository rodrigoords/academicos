package br.com.metrocamp.simgraduate.subject.controller;

import br.com.metrocamp.simgraduate.subject.model.Subject;
import br.com.metrocamp.simgraduate.utils.base.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

@ApiIgnore
@RestController
@RequestMapping("subjects")
public class SubjectController extends BaseController<Subject> {
}
