package com.github.felipedelima123.PositionStore.controllers;

import com.github.felipedelima123.PositionStore.models.Position;
import com.github.felipedelima123.PositionStore.repositories.PositionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/positions")
public class PositionController {
  
  @Autowired
  private PositionRepository positionRepository;

  @PostMapping("")
  public Position createPosition(@RequestBody Position position) {
    return this.positionRepository.save(position);
  }
}
