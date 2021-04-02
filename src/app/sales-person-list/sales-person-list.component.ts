import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@gmail.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@gmail.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire.murphy@gmail.com", 90000),
    new SalesPerson("Trung", "Nguyen", "thangkhung156@gmail.com", 150000)
  ]
}
