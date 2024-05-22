package com.talentob.scriptmanagement.dtos.request;

import lombok.Data;

import java.util.List;
@Data
public class EscenaRequest {
    private Integer numero;
    private String descripcion;
    private List<DialogoRequest> dialogos;
    private List<PosicionActorRequest> posiciones_actores;
}
