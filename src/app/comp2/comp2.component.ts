import { Component, OnInit } from '@angular/core';
import { MessageShareService } from '../message-share.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  uname: string = "Ritik";
  constructor(private messageShareService: MessageShareService) {
    this.messageShareService.uname.subscribe(data => {
      this.uname = data;
    });
  }


  ngOnInit(): void {
  }

}
