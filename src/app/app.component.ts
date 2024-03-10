import { Component, OnInit } from '@angular/core';
import { Observable, filter, interval, map, tap } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  
  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(

      filter(value => value % 3 === 0),

      map(value => value % 2 === 0 ? 
        `Je suis ${value} et je suis pair` : 
        `Je suis ${value} et je suis impair`
      ),

      tap(text => this.logger(text))
    );
  }

  logger(text: string){
    console.log(`log: ${text}`);
  }
}
