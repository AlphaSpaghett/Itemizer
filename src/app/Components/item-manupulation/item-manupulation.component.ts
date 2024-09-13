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

  items: Item[] = [];

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const item: Item = {
      upc: this.itemForm.value.upc,
      desc: this.itemForm.value.description,
      price: this.itemForm.value.price,
    }

    this.items.push(item);

    // console.log(`UPC: ${this.itemForm.value.upc}`);
    // console.log(`Desc: ${this.itemForm.value.description}`);
    // console.log(`Price: ${this.itemForm.value.price}`);
    // console.log(this.items.length);

  }
}
