import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrl: './form-debug.component.css'
})
export class FormDebugComponent {

  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
  }

}
