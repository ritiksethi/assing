import { Component, OnInit } from '@angular/core';
import { MessageShareService } from '../message-share.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
  uname: string = "Ritik";
  constructor(private messageShareService: MessageShareService) {
    this.messageShareService.uname.subscribe(data => {
      this.uname = data;
    });
  }


  ngOnInit(): void {
  }

}
