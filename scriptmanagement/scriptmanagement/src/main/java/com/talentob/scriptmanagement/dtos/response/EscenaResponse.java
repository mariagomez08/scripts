package com.talentob.scriptmanagement.dtos.response;

import lombok.Data;

import java.util.List;
@Data
public class EscenaResponse {
    private Integer escena_id;
    private Integer numero;
    private String descripcion;
    private List<DialogoResponse> dialogos;
    private List<PosicionActorResponse> posiciones_actores;
}
