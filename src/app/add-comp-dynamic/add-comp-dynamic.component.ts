import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comp-dynamic',
  templateUrl: './add-comp-dynamic.component.html',
  styleUrls: ['./add-comp-dynamic.component.scss']
})
export class AddCompDynamicComponent implements OnInit {

  name = 'Dynamic Add Fields';
  values = [{ key: "phoneNumber1", value: "1234567890", },
  { key: "phoneNumber2", value: "1234567890" },
  { key: "phoneNumber3", value: "1234567890" },
  { key: "phoneNumber4", value: "1234567890" }];
  constructor() { }

  ngOnInit(): void {
  }

  removevalue(i: any) {
    this.values.splice(i, 1);
  }

  addvalue() {
    this.values.push({ key: "phoneNumber" + (this.values.length + 1), value: "" });
  }
  save() {
    console.log(this.values);
  }

}
