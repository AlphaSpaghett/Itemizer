import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/Objects/item';

@Component({
  selector: 'app-item-manupulation',
  templateUrl: './item-manupulation.component.html',
  styleUrls: ['./item-manupulation.component.scss']
})
export class ItemManupulationComponent implements OnInit {

  itemForm = this.fb.group({
    upc: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
  });

  constructor( private fb: FormBuilder, public item: Item ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.item.upc = this.itemForm.value.upc;
    this.item.desc = this.itemForm.value.description;
    this.item.price = this.itemForm.value.price;

    console.log(`UPC: ${this.itemForm.value.upc}`);
    console.log(`Desc: ${this.itemForm.value.description}`);
    console.log(`Desc: ${this.item.desc}`);
    console.log(`Price: ${this.itemForm.value.price}`);
  }

}
