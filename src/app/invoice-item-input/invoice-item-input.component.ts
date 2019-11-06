import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-invoice-item-input',
  templateUrl: './invoice-item-input.component.html',
  styleUrls: ['./invoice-item-input.component.css']
})
export class InvoiceItemInputComponent implements OnInit {
  fg = new FormGroup({
    desc : new FormControl('', Validators.required),
    qty : new FormControl(1),
    price : new FormControl(0)
  });
  

  constructor() { }

  ngOnInit() {
  }

  private onSubmit(): void {
    console.log(this.fg.value);
    this.fg.reset({desc: '', qty: 1, price: 0});
  }
}
