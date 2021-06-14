import { Component, OnInit } from '@angular/core';
import { MessageShareService } from '../message-share.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.scss']
})
export class Comp4Component implements OnInit {
  uname: string = "Ritik";
  constructor(private messageShareService: MessageShareService) {
    this.messageShareService.uname.subscribe(data => {
      this.uname = data;
    });
  }


  ngOnInit(): void {
  }

}
