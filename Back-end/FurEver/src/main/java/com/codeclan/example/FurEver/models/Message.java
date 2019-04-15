package com.codeclan.example.FurEver.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;


@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "txtMessage")
    private String txtMessage;

    // This will be passed to this field from the getMessageOwnerId() which we will define in the Owner Class
    @Column(name = "senderId")
    private Long senderId;

    // This will be passed to this field from the getMessageRecipientId() which we will .get from the dog.GetOwner.get().getId()
    @Column(name = "recipientId")
    private Long recipientId;

    @JsonIgnoreProperties("messages")
    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private Owner owner;

    public Message(String title, String txtMessage, Owner owner) {
        this.title = title;
        this.txtMessage = txtMessage;
        this.owner = owner;
    }

    public Message(){

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTxtMessage() {
        return txtMessage;
    }

    public void setTxtMessage(String txtMessage) {
        txtMessage = txtMessage;
    }

    public Long getSenderId() {
        return senderId;
    }

    public void setSenderId(Long senderId) {
        this.senderId = senderId;
    }

    public Long getRecipientId() {
        return recipientId;
    }

    public void setRecipientId(Long recipientId) {
        this.recipientId = recipientId;
    }


}
