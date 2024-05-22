package com.talentob.scriptmanagement.dtos.response;

import lombok.Data;

/**
 * clase que devuelve el token de autenticacion
 * **/
@Data
public class DtoAuthRespuesta {
    private String accessToken;
    private String tokenType = "Bearer ";
    private String role;

    public DtoAuthRespuesta(String accessToken) {
        this.accessToken = accessToken;
    }
}
