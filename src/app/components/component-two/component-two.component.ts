import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from 'src/app/services/service-one/service-one.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss'],
  providers: [ServiceOneService]
})
export class ComponentTwoComponent implements OnInit {

  public local = 'local variable Two';

  constructor(public service: ServiceOneService) { }

  ngOnInit() {
  }

}
