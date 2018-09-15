package br.com.metrocamp.simgraduate.topic.repository;

import br.com.metrocamp.simgraduate.topic.model.Topic;
import br.com.metrocamp.simgraduate.utils.base.repository.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepository extends BaseRepository<Topic> {
}
