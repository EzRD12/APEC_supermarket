package com.ezrodriguez.Controllers;

import com.ezrodriguez.Entities.Transfer;
import com.ezrodriguez.Models.TransferResponse;
import com.ezrodriguez.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/transfer")
public class EntryProductController {

    @Autowired
    private ProductService service;

    @RequestMapping(value = "/{id}/{entry}",method = RequestMethod.PUT)
    public TransferResponse entryProduct(@PathVariable("id") int id, @PathVariable("entry") long entry){
        return this.service.entryProducts(id,entry);
    }
}
