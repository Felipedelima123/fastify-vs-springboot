package com.github.felipedelima123.PositionStore.models;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "positions")
public class Position {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private Timestamp eventDate;
  private Timestamp equipamentDate;
  private Double latitude;
  private Double longitude;
  private Double speed;
  private String licensePlate;
}
