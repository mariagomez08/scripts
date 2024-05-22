package com.talentob.scriptmanagement.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.talentob.scriptmanagement.dtos.request.GuionRequest;
import com.talentob.scriptmanagement.dtos.response.GuionResponse;
import com.talentob.scriptmanagement.models.Guion;
import com.talentob.scriptmanagement.services.GuionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/guion")
public class RestControllerGuion {

    private GuionService guionService;
    @Autowired
    public void setGuionService(GuionService guionService) {
        this.guionService = guionService;
    }


    @PostMapping(value = "crear", headers = "Accept=application/json")
    public void crearGuion(@RequestBody GuionRequest request) throws JsonProcessingException {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String escenasJson = objectMapper.writeValueAsString(request.getEscenas());

            guionService.crearGuion(request.getTitulo(), request.getGenero(), request.getAutorId(), escenasJson);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }

    @GetMapping(value = "listar", headers = "Accept=application/json")
    public List<Guion> listarGuiones() {
            return guionService.readAll();

    }

    @DeleteMapping(value = "eliminar/{id}", headers = "Accept=application/json")
    public void eliminarGuion(@PathVariable Integer id) {
        guionService.eliminar(id);
    }


    @GetMapping("/obtener/{id}")
    public GuionResponse obtenerGuionPorIdYUsuario(@PathVariable Integer id) throws JsonProcessingException {
        String jsonString = guionService.obtenerGuionPorId(id);
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(jsonString, GuionResponse.class);
    }
}
