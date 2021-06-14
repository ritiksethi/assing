import { Component, OnInit } from '@angular/core';
import { MessageShareService } from '../message-share.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  uname: string = "Ritik";
  constructor(private messageShareService: MessageShareService) {
    this.messageShareService.uname.subscribe(data => {
      this.uname = data;
    });
  }

  ngOnInit(): void {
  }

}
