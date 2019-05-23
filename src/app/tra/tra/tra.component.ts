import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../layouts/shared-service';

const BREADCRUMBS: any[] = [
  {
    title: 'Assessment',
    link: '#'
  },
  {
    title: 'Core Readiness',
    link: '#'
  },
  {
    title: 'Need for Telehealth',
    link: ''
  }
];

@Component({
  selector: 'page-tra',
  templateUrl: './tra.component.html',
  styleUrls: ['./tra.component.scss']
})
export class DomCoreReadinessComponent implements OnInit {
  pageTitle: string = 'Assessment';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
