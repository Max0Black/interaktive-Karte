package de.maxblack.Backend.controller;

import de.maxblack.Backend.model.Marker;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BackendAbfrage {
    private BearbeiteAnfragen anfrage = new BearbeiteAnfragen();

    @RequestMapping(method = RequestMethod.POST, path = "/addEintrag", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addMarker(@RequestBody Marker marker) {
        anfrage.exportiereMarker(marker);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/getAllEintraege", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Marker> getEintrage() {
        return anfrage.getMarkerListe();
    }
}
