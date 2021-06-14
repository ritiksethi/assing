import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageShareService {
  uname = new Subject<any>();
  constructor() { }
}
