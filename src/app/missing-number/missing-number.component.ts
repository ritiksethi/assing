import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missing-number',
  templateUrl: './missing-number.component.html',
  styleUrls: ['./missing-number.component.scss']
})
export class MissingNumberComponent implements OnInit {
  result = 0;
  constructor() { }

  ngOnInit(): void {
  }

  calculate(num: any) {
    this.result = (num % 2 == 0) ? (num * num) - 1 : (num * num) + 1;
  }
}
