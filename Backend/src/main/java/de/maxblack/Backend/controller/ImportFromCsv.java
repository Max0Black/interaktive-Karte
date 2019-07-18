package de.maxblack.Backend.controller;

import de.maxblack.Backend.model.Marker;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ImportFromCsv {

    public List<Marker> importieren(File file) {
        List<Marker> markerList = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line = br.readLine();
            while ((line = br.readLine()) != null) {
                String[] values = line.split(";");

                Marker marker = new Marker();
                marker.setPositionX(Integer.valueOf(values[0]));
                marker.setPositionY(Integer.valueOf(values[1]));
                marker.setText(values[2]);
                marker.setPicture(values[3]);

                markerList.add(marker);
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        return markerList;
    }
}
