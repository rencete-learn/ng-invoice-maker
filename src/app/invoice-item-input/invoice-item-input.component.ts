import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-invoice-item-input',
  templateUrl: './invoice-item-input.component.html',
  styleUrls: ['./invoice-item-input.component.css']
})
export class InvoiceItemInputComponent implements OnInit {
  desc = new FormControl();
  qty = new FormControl();
  price = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  private onSubmit(): void {
    console.log(this.desc.value);
  }
}
