import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  theString: string = 'Hello World';
  theNumber: number = 42;
  theBoolean: boolean = true;
 
  theUndefined: undefined = undefined;
  theNull: null = null;

  bigint: bigint = 100n;
  theSymbol: symbol = Symbol('Symbol');

  theArray: string[] = ['Hello', 'World'];
  theObject: object = { key: 'value' };
  theFunction: Function = function() { return 'Hello World'; };


  noteType: 'string' | 'number' | 'boolean' = 'string';

}
