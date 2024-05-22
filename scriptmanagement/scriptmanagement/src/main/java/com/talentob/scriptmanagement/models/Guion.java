package com.talentob.scriptmanagement.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@Entity
@Table(name = "guiones")
public class Guion {
    @Id
    @ColumnDefault("nextval('guiones_id_seq'::regclass)")
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "titulo", length = Integer.MAX_VALUE)
    private String titulo;

    @Column(name = "genero", length = Integer.MAX_VALUE)
    private String genero;

    @Column(name = "usuario_id")
    private Integer usuarioId;

}