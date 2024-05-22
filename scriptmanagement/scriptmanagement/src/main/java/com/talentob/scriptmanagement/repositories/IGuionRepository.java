package com.talentob.scriptmanagement.repositories;

import com.talentob.scriptmanagement.models.Guion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IGuionRepository extends JpaRepository<Guion, Integer> {

    @Procedure(name = "crear_guion")
    void crearGuion(
            @Param("p_titulo") String titulo,
            @Param("p_genero") String genero,
            @Param("p_autor_id") Integer autorId,
            @Param("p_escenas_str") String escenas
    );

    @Query(value = "SELECT obtenerGuionPorId(:guionId)", nativeQuery = true)
    String obtenerGuionPorIdYUsuario(
            @Param("guionId") Integer guionId
    );

    @Override
    void deleteById(Integer id);
}
