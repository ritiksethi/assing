import { Component, OnInit } from '@angular/core';
import { MessageShareService } from '../message-share.service';
@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit {
  constructor(private messageShareService: MessageShareService) { }

  ngOnInit(): void {
  }

  fun(data: any) {
    this.messageShareService.uname.next(data.target.value);
  }
}
