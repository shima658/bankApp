import { Component, OnInit } from '@angular/core';
import{ DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
 transactions=[ ];
  constructor(private dataService:DataService) {
    this.getTransactions();
  }
  getTransactions(){
    this.dataService.getTransactions()
    .subscribe((data:any)=>{
      this.transactions = data.transactions;
    })
  }
    //this.transactions=dataService.getTransactions();

  ngOnInit(): void {
  }

   delete(transaction){
     this.dataService.deleteTransaction(transaction._id)
     .subscribe((data:any) =>{
       alert(data.message)
       this.getTransactions();
     })
   }
}
