import { Component, OnInit } from '@angular/core';
import{ DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
 transactions=[ ];
 id = "";
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

  deleteTransaction($event){
    //alert("Alert from Parent: "+$event);
    this.dataService.deleteTransaction($event)
     .subscribe((data:any) => {
       alert(data.message);
       this.id="";
       this.getTransactions();
     })
  }

  onCancel($event){
    this.id="";
  }

  showConfirmationDialog(id){
    this.id=id;
  }
}
   //delete(transaction){
    //  this.dataService.deleteTransaction(id)
    //  .subscribe((data:any) =>{
    //    alert(data.message)
    //    this.getTransactions();
    //  })
  // }
//}
