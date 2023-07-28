import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-menu-two',
  templateUrl: './menu-two.component.html',
  styleUrls: ['./menu-two.component.css']
})
export class MenuTwoComponent {
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
