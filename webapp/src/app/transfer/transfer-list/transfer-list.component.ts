import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/transfer.service';
import { Transfer } from '../../models/Transfer';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {

  transfers: Transfer[] = [];
  displayData: Transfer[] = [];
  constructor(private transferService: TransferService) {
    transferService.getAllTransfers().then(resp => {
      console.log(resp);
      this.transfers = resp;
      this.displayData = [...this.transfers];
    });
  }

  ngOnInit() {
  }
  onSearch(searchText: string) {
    this.displayData = this.transfers.filter((transfer) => {
      return Object.keys(transfer).some(keys => transfer[keys] != null &&
        transfer[keys].toString().toLowerCase()
          .includes(searchText.toLowerCase()));
    });
}
}
