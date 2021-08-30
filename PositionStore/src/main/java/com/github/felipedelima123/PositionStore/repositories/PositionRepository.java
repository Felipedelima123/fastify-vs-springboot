package com.github.felipedelima123.PositionStore.repositories;

import com.github.felipedelima123.PositionStore.models.Position;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PositionRepository extends JpaRepository<Position, Long> {
  
}
