package com.talentob.scriptmanagement.dtos.response;

import lombok.Data;

@Data
public class PosicionActorResponse {
    private Integer posicion_actor_id;
    private String actor;
    private String ubicacion;
    private String pose;
}
