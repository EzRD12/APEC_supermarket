package com.ezrodriguez.Models;

import com.ezrodriguez.Entities.Transfer;

public class TransferResponse {

    public String Message;
    public Transfer Transfer;
    public boolean Success;

    public TransferResponse(String message) {
        Message = message;
        Success = false;
        Transfer = null;
    }

    public TransferResponse(Transfer transfer) {
        Transfer = transfer;
        Message = "";
        Success = true;
    }
}
