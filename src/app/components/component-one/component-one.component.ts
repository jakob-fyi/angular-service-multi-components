import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from 'src/app/services/service-one/service-one.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
  providers: [ServiceOneService]
})
export class ComponentOneComponent implements OnInit {

  public local = 'local variable One';

  constructor(public service: ServiceOneService) { }

  ngOnInit() {
  }

}
