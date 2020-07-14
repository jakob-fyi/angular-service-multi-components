import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from 'src/app/services/service-one/service-one.service';

@Component({
  selector: 'app-component-sub',
  templateUrl: './component-sub.component.html',
  styleUrls: ['./component-sub.component.scss']
})
export class ComponentSubComponent implements OnInit {

  public local = 'local variable Two';

  constructor(public service: ServiceOneService) { }

  ngOnInit() {
  }

}
