package com.talentob.scriptmanagement.services;

import com.talentob.scriptmanagement.models.Script;
import com.talentob.scriptmanagement.repositories.IScriptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScriptService {
    private IScriptRepository iScriptRepository;

    @Autowired
    public ScriptService(IScriptRepository iScriptRepository) {
        this.iScriptRepository = iScriptRepository;
    }


    public void crear(Script script) {
        iScriptRepository.save(script);
    }

    public List<Script> readAll() {
        return iScriptRepository.findAll();
    }

    public Optional<Script> readOne(Long id) {
        return iScriptRepository.findById(id);
    }

    public void update(Script script) {
        iScriptRepository.save(script);
    }

    public void delete(Long id) {
        iScriptRepository.deleteById(id);
    }
}
