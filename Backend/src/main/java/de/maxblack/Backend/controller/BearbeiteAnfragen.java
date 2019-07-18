package de.maxblack.Backend.controller;

import de.maxblack.Backend.model.Marker;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class BearbeiteAnfragen {
    private List<Marker> markerListe;

    BearbeiteAnfragen() {
        fuelleMarkerListe();
    }

    private void fuelleMarkerListe() {
        ImportFromCsv importCsv = new ImportFromCsv();
        File file = new File("Dateien/Positionen.csv");

        if (file.exists()) {
            markerListe = importCsv.importieren(file);
        } else {
            markerListe = new ArrayList<>();
        }
    }

    public void exportiereMarker(Marker marker) {
        ExportToCsv export = new ExportToCsv();
        export.export(marker);
        markerListe.add(marker);
    }

    public List<Marker> getMarkerListe() {
        return markerListe;
    }
}
