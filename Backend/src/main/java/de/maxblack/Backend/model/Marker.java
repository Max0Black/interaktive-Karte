package de.maxblack.Backend.model;

public class Marker {
    private int positionX;
    private int positionY;
    private String text;
    private String picture;

    public int getPositionX() {
        return positionX;
    }

    public int getPositionY() {
        return positionY;
    }

    public String getText() {
        return text;
    }

    public String getPicture() {
        return picture;
    }

    public void setPositionX(int positionX) {
        this.positionX = positionX;
    }

    public void setPositionY(int positionY) {
        this.positionY = positionY;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
