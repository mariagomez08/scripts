package com.talentob.scriptmanagement.services;


import com.talentob.scriptmanagement.models.Guion;
import com.talentob.scriptmanagement.models.Script;
import com.talentob.scriptmanagement.repositories.IGuionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GuionService {


    private IGuionRepository iGuionRepository;

    @Autowired
    public void setiGuionRepository(IGuionRepository iGuionRepository) {
        this.iGuionRepository = iGuionRepository;
    }


    public void crearGuion(String titulo, String genero, Integer autorId, String escenas) {
        iGuionRepository.crearGuion(titulo, genero, autorId, escenas);
    }

    public String obtenerGuionPorId(Integer guionId) {
        return iGuionRepository.obtenerGuionPorIdYUsuario(guionId);
    }

    public void eliminar(Integer id) {
        iGuionRepository.deleteById(id);
    }
    public List<Guion> readAll() {
        return iGuionRepository.findAll();
    }
}
