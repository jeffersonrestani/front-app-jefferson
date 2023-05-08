import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent {

  constructor(private service: CustomerService){
  }

  ngOnInit(): void {
    this.saveCustomer();
  }

  customer: Customer = {
    idCustomer: '',
    firstNameCustomer: 'Fabrícia',
    lastNameCustomer: 'Passerini',
    birthdateCustomer: '09/08/1990',
    dateCreatedCustomer: '',
    monthlyIncomeCustomer: '200',
    cpfCustomer: '23499359065',
    emailCustomer: 'fabricia@teste.com',
    passwordCustomer: '121212',
    statusCustomer: "B"
  }

  saveCustomer() {
    this.service.save(this.customer).subscribe(response => {
      console.log(response)
    })
  }
}

