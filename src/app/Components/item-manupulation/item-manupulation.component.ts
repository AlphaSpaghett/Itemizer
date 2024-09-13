import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  item: string[] = [];

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.item.push(this.itemForm.value.upc, this.itemForm.value.description, this.itemForm.value.price);

    console.log(`UPC: ${this.itemForm.value.upc}`);
    console.log(`Desc: ${this.itemForm.value.description}`);
    console.log(`Price: ${this.itemForm.value.price}`);
  }

}
