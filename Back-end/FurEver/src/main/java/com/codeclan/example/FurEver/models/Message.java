package com.codeclan.example.FurEver.models;

import javax.persistence.*;


@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "txtMessage")
    private String txtMessage;

    // This will be passed to this field from the getMessageOwnerId() which we will define in the Owner Class
    @Column(name = "senderId")
    private Long senderId;

    // This will be passed to this field from the getMessageRecipientId() which we will .get() from the dog.GetOwner.get().getId()
    @Column(name = "recipientId")
    private Long recipientId;

    // Not sure bout this...
    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private Owner owner;

    public Message(String txtMessage) {
        this.id = id;
        this.txtMessage = txtMessage;
//        this.owner = owner;
    }

    public Message(){

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

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }
}
