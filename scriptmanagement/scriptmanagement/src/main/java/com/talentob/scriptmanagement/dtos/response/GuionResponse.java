package com.talentob.scriptmanagement.dtos.response;

import lombok.Data;

import java.util.List;

@Data
public class GuionResponse {
    private Integer guion_id;
    private String titulo;
    private String genero;
    private Integer autor_id;
    private List<EscenaResponse> escenas;
}
