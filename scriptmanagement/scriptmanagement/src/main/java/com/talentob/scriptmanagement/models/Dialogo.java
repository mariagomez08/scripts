package com.talentob.scriptmanagement.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Getter
@Setter
@Entity
@Table(name = "dialogos")
public class Dialogo {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "dialogos_id_gen")
    @SequenceGenerator(name = "dialogos_id_gen", sequenceName = "dialogos_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "escena_id")
    private Escena escena;

    @Column(name = "personaje", length = Integer.MAX_VALUE)
    private String personaje;

    @Column(name = "texto", length = Integer.MAX_VALUE)
    private String texto;

}