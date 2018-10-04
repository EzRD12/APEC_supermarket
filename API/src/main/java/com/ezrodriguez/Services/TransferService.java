package com.ezrodriguez.Services;

import com.ezrodriguez.Dao.TransferDao;
import com.ezrodriguez.Entities.Transfer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransferService {

    @Autowired
    private TransferDao transferDao;

    public Transfer getTransferById(int id){
        return transferDao.getTransferById(id);
    }


    public List<Transfer> getAllTransfers(){
        return transferDao.getAllTransfers();
    }

}
