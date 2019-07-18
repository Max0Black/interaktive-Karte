package de.maxblack.Backend.controller;

import de.maxblack.Backend.model.Marker;

import java.io.*;

public class ExportToCsv {

    private File file = new File("Dateien/Positionen.csv");
    private boolean exists;

    public void export(Marker marker) {

        if (file.exists()) {
            exists = true;
        } else {
            exists = false;
        }

        try (PrintWriter writer = new PrintWriter(new FileWriter(file, exists))) {
            StringBuilder sb = new StringBuilder();

            if (exists == false) {
                sb.append("Position X");
                sb.append(';');
                sb.append("Position Y");
                sb.append(';');
                sb.append("Text");
                sb.append(';');
                sb.append("Bildauswahl");
                sb.append('\n');
            }
            sb.append(marker.getPositionX());
            sb.append(';');
            sb.append(marker.getPositionY());
            sb.append(';');
            sb.append(marker.getText());
            sb.append(';');
            sb.append(marker.getPicture());
            sb.append('\n');

            writer.write(sb.toString());

        } catch (FileNotFoundException e) {
            System.out.println(e.getMessage());
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}

