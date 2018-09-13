package br.com.metrocamp.simgraduate.topic;

import br.com.metrocamp.simgraduate.utils.base.controller.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

@ApiIgnore
@RestController
@RequestMapping("topics")
public class TopicController extends BaseController<Topic> {
}
