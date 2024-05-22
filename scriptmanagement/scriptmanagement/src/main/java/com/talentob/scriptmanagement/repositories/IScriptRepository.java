package com.talentob.scriptmanagement.repositories;


import com.talentob.scriptmanagement.models.Script;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IScriptRepository extends JpaRepository<Script, Long> {
}
