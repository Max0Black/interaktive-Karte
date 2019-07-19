package de.maxblack.Backend.controller;

import de.maxblack.Backend.model.Marker;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
public class BackendAbfrage {
    private BearbeiteAnfragen anfrage = new BearbeiteAnfragen();

    @Bean
    public CorsFilter corsFilter() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        final CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Collections.singletonList("*"));
        config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "OPTIONS", "DELETE"));
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/addEintrag", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addMarker(@RequestBody Marker marker) {
        anfrage.exportiereMarker(marker);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/getAllEintraege", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Marker> getEintrage() {
        return anfrage.getMarkerListe();
    }
}
