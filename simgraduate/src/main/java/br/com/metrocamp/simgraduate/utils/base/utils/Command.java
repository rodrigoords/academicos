package br.com.metrocamp.simgraduate.utils.base.utils;

public interface Command<T> {
  T execute(T t);
}
