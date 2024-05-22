package com.talentob.scriptmanagement.dtos.request;

import lombok.Data;

import java.util.List;

@Data
public class GuionRequest {
    private String titulo;
    private String genero;
    private Integer autorId;
    private List<EscenaRequest> escenas;
}
